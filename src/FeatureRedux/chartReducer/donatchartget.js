import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/axiosInstance";
 
const getChartData = createAsyncThunk('display', async (projectid, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/project/chartdata`, {
            headers: {
                'x-auth-token': localStorage.getItem('token'),
                 
            }
        });
        // console.log(response.data  , "yo hai data")
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An unexpected error occurred");
    }
});


const getChartDataSlice = createSlice({
    name: 'getChartData',
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
            .addCase(getChartData.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(getChartData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(getChartData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;  // Fixed issue here
                state.isSuccess = false;
            });
    }
})


export   { getChartData}  ;
export default getChartDataSlice.reducer;