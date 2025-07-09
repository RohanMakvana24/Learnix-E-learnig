import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decryptData, encryptData } from "../../../component/features/Hashing";

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
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/isverify/${userId}`,
        userId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Somenthing went wrong in verify user API"
      );
    }
  }
);

// # Delete User AsyncThunk #
export const deleteUserAsyncThunk = createAsyncThunk(
  "auth/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/deleteUser/${userId}`,
        userId
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Something went wrong in delete user API"
      );
    }
  }
);

// # Private Auth AsyncThunk #
export const PrivateAuthAsyncThunk = createAsyncThunk(
  "auth/private-auth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/private-auth`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Something went wrong in private auth API"
      );
    }
  }
);

// # Login Form AsyncThunk #
export const LoginFormAsyncThunk = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
        values
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response.data || "Something went wrong in login API"
      );
    }
  }
);

const isAuthenticated =
  decryptData(localStorage.getItem("isAuthenticated") || "false") || false;
const authSlices = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("authToken") || null,
    loading: false,
    error: null,
    isAuthenticated: isAuthenticated,
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
        state.loading = true;
        state.error = null;
      })
      .addCase(IsVerifyUserAsynThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(IsVerifyUserAsynThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // * Delete User Builder *
    builder
      .addCase(deleteUserAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserAsyncThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // * Private Auth Builder *
    builder
      .addCase(PrivateAuthAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PrivateAuthAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", encryptData(true));
      })
      .addCase(PrivateAuthAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // * Login Form Builder *
    builder
      .addCase(LoginFormAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginFormAsyncThunk.full);
  },
});

export default authSlices.reducer;
