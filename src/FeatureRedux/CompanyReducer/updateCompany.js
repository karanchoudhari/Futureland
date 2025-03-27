import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/axiosInstance";


const updateCompany = createAsyncThunk(
    'updateCompany',
    async ({ id, newCompany }, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.put(
          '/company/updatecompany',
          newCompany, // Send only the updated company data
          {
            headers: {
              'Content-Type': 'application/json',
              'x-company-id': id, // Send the company ID in the header
            },
          }
        );
        return response.data; // Return response data on success
      } catch (error) {
        return rejectWithValue(error.response?.data || "An unexpected error occurred");
      }
    }
  );
  


const updateCompanySlice = createSlice({
    name: 'updateCompany',
    initialState: {
        loading: false,
        error: null,
        data: null,
        isSuccess: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(updateCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;
                state.isSuccess = false;
            });
    }
     
});

export { updateCompany };
export default updateCompanySlice.reducer;