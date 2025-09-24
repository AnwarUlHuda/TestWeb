import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState : null,
    reducers : {
        addFeed : (state, action) => action.payload,
        removeUserFromFeed : (state, action) => {
            return state.filter(({_id}) => _id != action.payload)
        },
        emptyFeed : (state, action) => null
    }
})

export const {addFeed, removeUserFromFeed, emptyFeed} = feedSlice.actions;

export default feedSlice.reducer;