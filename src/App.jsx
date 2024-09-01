import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div>
        <h1>Phone Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
