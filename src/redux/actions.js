import { nanoid } from "nanoid";

export const addContact = (text) => {
   
  return {
    type: "contacts/addContacts",
    payload: {
        id: nanoid(),
        name: "name",
        number: "number",
        text,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

// export const toggleCompleted = taskId => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };