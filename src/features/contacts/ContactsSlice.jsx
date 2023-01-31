import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state) => {
            state.push({id:state.length + 1, name: "New Name", number: "number"})
        },
    },
})
export const { addContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;

export default contactsSlice.recucer;
