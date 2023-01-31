import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, selectContacts } from "./ContactsSlice";

export function Contacts() {
    const contacts = useSelector(selectContacts);

    console.log("contacts: ", contacts)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Phonebook</h1>
            <button onClick={() => dispatch(addContact())}>ADD CONTACT</button>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </>
    )
};

