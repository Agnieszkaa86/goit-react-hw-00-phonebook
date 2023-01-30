// Importujemy hook 
import { useDispatch } from "react-redux";
// Importujemy generator akcji
import { deleteContact } from "../../redux/actions";

export const Contact = ({ contact }) => {
  // Otrzymujemy odnośnik do funkcji wysłania akcji
  const dispatch = useDispatch();

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik – akcję usunięcia zadania
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <input type="checkbox" />
      <p>{contact.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};