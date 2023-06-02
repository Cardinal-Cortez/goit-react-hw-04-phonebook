import React, { Component } from "react";
import { AddContact, Section, H1, ContactForm } from "./styled";
import { InputName } from "components/InputName";
import { InputNumber } from "components/InputNumber";
import { Filter } from "components/ButtonAdd";
import { nanoid } from 'nanoid';
import { ContactList } from "components/ContactList";

export class Input extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
    number: ''
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("myContacts");
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem("myContacts", JSON.stringify(this.state.contacts));
      }
    }
  
  handleDeleteContact = (id) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((e) => e.id !== id)
      })
    );
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      filter: value
    });
  };

  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const existingContact = this.state.contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    const newContact = { id, name, number };
    const updatedContacts = [...this.state.contacts, newContact];
    this.setState({
      contacts: updatedContacts,
      name: '',
      number: ''
    });
  };

  filters = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;

    return (
      <Section>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={this.handleSubmit}>
          <InputName handleNameChange={this.handleNameChange} name={name} />
          <InputNumber
            handleNumberChange={this.handleNumberChange}
            number={number}
          />
          <AddContact type="submit">Add Contact</AddContact>
        </ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          filter={filter}
          contacts={this.filters()}
          onDeleteContact={this.handleDeleteContact}
        />
      </Section>
    );
  }
}
