import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        singleJob: null,
        allAdminJobs: [],
        searchJobByTest: "",
        allAppliedJobs: [],
        searchQurey: "",
    },
    reducers: {
        // actions ->dispatch
        setAllJobs: ((state, action) => {
            state.allJobs = action.payload;
        }),
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: ((state, action) => {
            state.allAdminJobs = action.payload;
        }),
        setSearchJobByTest: ((state, action) => {
            state.searchJobByTest = action.payload;
        }),
        setAllAppliedJobs: ((state, action) => {
            state.allAppliedJobs = action.payload;
        }),
        setSearchQurey: ((state, action) => {
            state.searchQurey = action.payload;
        })
    }
});

export const { setAllJobs, setSingleJob, setSearchQurey, setAllAdminJobs, setSearchJobByTest, setAllAppliedJobs } = jobSlice.actions;
export default jobSlice.reducer;