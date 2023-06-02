import { Todo } from "components/Todo"; 
import { List } from "./styled";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class ContactList extends Component{
    render() {
    const { onDeleteContact, contacts } = this.props;
        return (
            <List>
                {contacts
                    .map((item) => (
                        <Todo
                            {...item}
                            key={item.id}
                            onDelete={() => onDeleteContact(item.id)}
                        />
                    ))}
            </List>
        );
    }
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
