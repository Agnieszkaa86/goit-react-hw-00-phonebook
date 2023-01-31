import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, selectContacts } from "./ContactsSlice";

export function Contacts() {
    const contacts = useSelector(selectContacts);
    const inputRef = useRef(null);
    
    console.log("contacts: ", contacts)
    
    const dispatch = useDispatch();

    const handleAddContact = () => {
        const contactName = inputRef.current.value;
        dispatch(addContact(contactName))
    };

    return (
        <>
            <h1>Phonebook</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={() => dispatch(addContact())}>ADD CONTACT</button>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </>
    )
};

