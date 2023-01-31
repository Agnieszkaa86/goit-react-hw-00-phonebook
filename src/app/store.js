// import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
}); 