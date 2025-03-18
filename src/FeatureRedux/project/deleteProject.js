import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Component/axiosInstance";


const deleteProject = createAsyncThunk('deleteProject', async (id, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.delete('/project/deleteproject', {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("token"),
                'x-project-id': id
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to delete project")
    }
});



const projectSlice = createSlice({
    name: 'project',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        issuscess: false,
        errorMessage: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteProject.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = "";
                state.issuscess = false;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = "";
                state.issuscess = true;
            })
            .addCase(deleteProject.rejected, (state , action)=>{
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
                state.issuscess = false
            })

    }
})



export default projectSlice.reducer;
export { deleteProject };