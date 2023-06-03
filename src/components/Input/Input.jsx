import React, { useState, useEffect} from "react";
import { AddContact, Section, H1, ContactForm } from "./styled";
import { InputName } from "components/InputName";
import { InputNumber } from "components/InputNumber";
import { Filter } from "components/ButtonAdd";
import { nanoid } from 'nanoid';
import { ContactList } from "components/ContactList";

export const Input = () => {
  
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [name, setName] = useState('');
  const [filter, setFilter] = useState('');
  const [number, setNumber] = useState('');


  useEffect(() => {
    const storedContacts = localStorage.getItem("myContacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myContacts", JSON.stringify(contacts));
  },[contacts]);

  
const handleDeleteContact = (id) => {
  setContacts((prev) =>
    prev.filter((contact) => contact.id !== id)
  );
};

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingContact = contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    const newContact = { id, name, number };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setName('');
    setNumber('');
  };

  const filters = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Section>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={handleSubmit}>
        <InputName handleNameChange={handleNameChange} name={name} />
        <InputNumber
          handleNumberChange={handleNumberChange}
          number={number}
        />
        <AddContact type="submit">Add Contact</AddContact>
      </ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        filter={filter}
        contacts={filters()}
        onDeleteContact={handleDeleteContact}
      />
    </Section>
  );
};
