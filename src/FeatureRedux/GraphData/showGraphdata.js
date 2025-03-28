import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'
import axiosInstance from "../../Component/axiosInstance";


const getallGraphdata = createAsyncThunk('display', async (projectid, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/graph/getGraphdata`, {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'x-report-id': Cookies.get('reportId'),
                'x-project-id': projectid
            }
        });

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An unexpected error occurred");
    }
});


const getallGraphdataSlice = createSlice({
    name: 'getallGraphdata',
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
            .addCase(getallGraphdata.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(getallGraphdata.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(getallGraphdata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;  // Fixed issue here
                state.isSuccess = false;
            });
    }
})


export { getallGraphdata };
export default getallGraphdataSlice.reducer;