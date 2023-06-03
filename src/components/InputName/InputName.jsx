import { InputAddName } from "./styled";
import PropTypes from "prop-types";

export const InputName = ({handleNameChange, name}) => {

    return (
        <div>
            <h2>Name</h2>
            <InputAddName onChange={handleNameChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>
    );
};

InputName.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};