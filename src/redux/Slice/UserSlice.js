import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUser: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxUser } = userSlice.actions;

export default userSlice.reducer;
