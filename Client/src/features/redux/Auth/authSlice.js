import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// # Signup AsyncThunk #
export const SignupAsynkThunk = createAsyncThunk(
  "auth/signup",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup`,
        values
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Somenthing went wrong in signup API"
      );
    }
  }
);

// # Check Varification Of User AsyncThunk #
export const IsVerifyUserAsynThunk = createAsyncThunk(
  "auth/verify-user",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/isverify/${userId}`,
        values
      );
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Somenthing went wrong in verify user API"
      );
    }
  }
);
const authSlices = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("authToken") || null,
    loading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // * Signup Builder *
    builder
      .addCase(SignupAsynkThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignupAsynkThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("authToken", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(SignupAsynkThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });

    // * Check Verify User Builder *
    builder
      .addCase(IsVerifyUserAsynThunk.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(IsVerifyUserAsynThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(IsVerifyUserAsynThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlices.reducer;
