import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContactFilter, selectFilters } from "./ContactsSlice";

export function Filter() {
    const filters = useSelector(selectFilters);
    const inputRef = useRef(null);
    
    // console.log("contacts: ", contacts)
    
    const dispatch = useDispatch();

    const handleFilterContact = () => {
        const contactName = inputRef.current.value;
        dispatch(
            filterContacts({
                // id: contacts.length + 1,
                name: contactName,
            })
        );
        inputRef.current.value = "";
    };
    // const handleDeleteContact = (id) => {
    //     dispatch(deleteContact(id));
    // }

    return (
        <>
            <h1>Contacts</h1>
            <input type="text" ref={inputRef} />
            {/* <input type="number" ref={inputRef}/> */}
    
            <ul>
                {filters.map((contact) => (
                    <li key={contact.id}>
                        {contact.name}
                        <input type="text" placeholder="Find contact by name" onChange={()=> dispatch(filterContacts(contact.id))}/>
                    </li>
                ))}
            </ul>
        </>
    )
};