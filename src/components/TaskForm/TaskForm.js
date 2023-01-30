// Importujemy hook
import { useDispatch, useSelector } from "react-redux";
// Importujemy generator akcji 
import { addContact } from "../../redux/actions";

export const ContactForm = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania
    const dispatch = useDispatch();
    const state = useSelector(state => state.contacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const number = form.number.value;
            
             for (const contact of state) {
        if (contact.name === name) {
            return alert(
                `&{number}is already in your contacts with the name ${contact.name}`
            );
            if (contact.number === number)
                return alert(
                    `${number}is already in your contacts with the name ${contact.number}`
                )
        }
    }
        // Wywołujemy generator akcji i przekazujemy tekst zadania dla payload
        // Wysyłamy wynik – akcję utworzenia zadania
            dispatch(addContact({ name, number }));
        form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
       <inputbox>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder=" "
          />
          <span>Name</span>
        </label>
      </inputbox>
      <inputbox>
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder=" "
          />
          <span>Number</span>
        </label>
          </inputbox>
          <inputbox>
      <button type="submit">Add task</button>
      </inputbox>
    </form>
  );
};