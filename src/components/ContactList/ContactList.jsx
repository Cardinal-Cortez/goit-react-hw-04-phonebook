import { Todo } from "components/Todo"; 
import { List } from "./styled";
import PropTypes from "prop-types";

export const ContactList = ({onDeleteContact, contacts}) => {

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
};

ContactList.propTypes = {
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
