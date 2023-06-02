import { Number, Item, Name, ButtonDel } from "./styled";
import PropTypes from "prop-types";

export const Todo = ({ name, number, onDelete }) => {
 const handleDelete = () => {
    onDelete();
  };

  return (
    <ul>
      <Item>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <ButtonDel onClick={handleDelete}>Delete</ButtonDel>
      </Item>
    </ul>
  );
};

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};