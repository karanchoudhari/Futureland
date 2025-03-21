import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/axiosInstance";
import Cookies from 'js-cookie';

// Async thunk for adding a company
const addCompany = createAsyncThunk('companyAdd', async (companyData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/company/addcompany`, companyData, {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                // 'x-report-id': Cookies.get('reportId')
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An unexpected error occurred");
    }
});

// Slice for managing add company state
const addCompanySlice = createSlice({
    name: 'AddCompany',
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
            .addCase(addCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(addCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(addCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;
                state.isSuccess = false;
            });
    }
});

export { addCompany };
export default addCompanySlice.reducer;