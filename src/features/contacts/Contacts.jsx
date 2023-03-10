import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact, selectContacts, filterContacts } from "./ContactsSlice";

export function Contacts() {
    const contacts = useSelector(selectContacts);
    const inputRef = useRef(null);
    
    console.log("contacts: ", contacts)
    
    const dispatch = useDispatch();

    const handleAddContact = () => {
        const contactName = inputRef.current.value;
        dispatch(
            addContact({
                id: contacts.length + 1,
                name: contactName,
                number: "number",
            })
        );
        inputRef.current.value = "";
    };
    // const handleDeleteContact = (id) => {
    //     dispatch(deleteContact(id));
    // }

    return (
        <>
            <h1>Phonebook</h1>
            <input type="text" ref={inputRef} />
            {/* <input type="number" ref={inputRef}/> */}
            <button onClick={handleAddContact}>ADD CONTACT</button>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}
                        <button onClick={() => dispatch(deleteContact(contact.id))}>delete</button>
                        <input type="text" placeholder="Find contact by name" onChange={()=> dispatch(filterContacts(contact.id))}/>
                    </li>
                ))}
            </ul>
        </>
    )
};

