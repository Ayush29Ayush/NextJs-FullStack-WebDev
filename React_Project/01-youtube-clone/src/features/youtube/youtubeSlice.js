import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: []
};

const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {

    }
});

export default youtubeSlice.reducer;