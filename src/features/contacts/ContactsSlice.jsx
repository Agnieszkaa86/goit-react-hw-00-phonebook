import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            const index = state.findIndex((contact) => contact.id === action.payload);
            state.splice(index, 1);
        },
        filterContacts(state, action) {
            const index = state.findIndex((contact) => contact.id === action.payload);
            state[index].filterContacts = !state[index].filterContacts;
        }
    },
})
export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;

export default contactsSlice.reducer;
