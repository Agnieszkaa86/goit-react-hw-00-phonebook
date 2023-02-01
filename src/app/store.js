// import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/ContactsSlice";
import filtersContactsReducer from "../features/filter/FiltersSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersContactsReducer,
    },
}); 