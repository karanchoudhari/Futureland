import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'
import axiosInstance from "../../Component/axiosInstance";


const getallkml = createAsyncThunk('display', async (ffss, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/project/getKml`, {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                'x-report-id': Cookies.get('reportId'),
                'x-project-id':"67da9ad56c063a4b2f3974be"
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An unexpected error occurred");
    }
});


const getallkmlSlice = createSlice({
    name: 'Getallkml',
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
            .addCase(getallkml.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(getallkml.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(getallkml.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;  // Fixed issue here
                state.isSuccess = false;
            });
    }
})


export   { getallkml}  ;
export default getallkmlSlice.reducer;