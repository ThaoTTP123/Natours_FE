import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { privateAxios } from '../api/axios';
export const isLoggedIn = createAsyncThunk(
  'auth/is-logged-in',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('users/is-logged-in');
      return res.data.user;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async () => {
  await privateAxios.get('users/logout');
});
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const res = await axios.post('users/login', user);
    return res.data.data.user;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(isLoggedIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(isLoggedIn.rejected, (state) => {
        // state.user = null;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
