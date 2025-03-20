import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../Component/axiosInstance';
import axios from "axios";

const createBlog = createAsyncThunk(
    "createBlog", async (data, { rejectWithValue }) => {
        try {

            // const formData = new FormData();
            // formData.append("file", file);
            // formData.append("upload_preset", "ml_default"); 

            // const image = await axios.post(
            //     "https://api.cloudinary.com/v1_1/dnqrumfwn/upload",
            //     formData
            // );
            // const url = image.data.secure_url ;



            const response = axiosInstance.post('/api/blog/createBlog', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-company-id': '67ce66294f28f85e4ff91e2c'
                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "An unexpected error occurred")
        }
    }
);

const blogSlice = createSlice({
    name: 'blog',
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
            .addCase(createBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                state.data = null;
                state.isError = true;  // Fixed issue here
                state.isSuccess = false;
            });
    }
})

export { createBlog };
export default blogSlice.reducer;
