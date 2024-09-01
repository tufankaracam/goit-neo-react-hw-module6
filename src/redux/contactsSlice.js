import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const contactIndex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      if (contactIndex > -1) {
        state.items.splice(contactIndex, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
