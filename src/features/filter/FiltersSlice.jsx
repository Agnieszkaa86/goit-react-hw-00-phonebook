import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "",
}

export const filtersSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContactFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { setContactsFilter } = filtersSlice.actions;

export const selectFilters = (state) => state.contacts;

export default filtersSlice.reducer;





// const FilteredUsers = () => {
//   const filter = useSelector(state => state.filter);
//   const dispatch = useDispatch();
//   const onFilter = e => {
//     dispatch(filterContacts(e.target.value));
//   };
//   return (
//     <Filterbox>
//       <label>
//         <Input
//           onChange={onFilter}
//           type="text"
//           value={filter}
//           name="filter"
//           placeholder=" "
//         />
//         <Span>Find contacts by name</Span>
//       </label>
//     </Filterbox>
//   );
// };