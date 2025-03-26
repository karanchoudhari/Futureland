import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/axiosInstance";



const allcompanylist = createAsyncThunk('allcompanylist', async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/company/getallCompany');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An unexpected error occurred");
    }
})


const companySlice = createSlice({
    name: 'company',
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
            .addCase(allcompanylist.pending, (state) => {
                state.loading = true;
                state.isError = false;
                state.isSuccess = false;
                state.data = null;
                state.error = null;
            })
            .addCase(allcompanylist.rejected, (state, action) => {
                state.loading = true;
                state.isError = true;
                state.isSuccess = false;
                state.data = null;
                state.error = action.payload || action.error.message;
            })
            .addCase(allcompanylist.fulfilled, (state, action) => {
                state.loading = false;
                state.isError = false;
                state.isSuccess = true;
                state.data = action.payload;

            })
    }
})



export { allcompanylist };
export default companySlice.reducer;
