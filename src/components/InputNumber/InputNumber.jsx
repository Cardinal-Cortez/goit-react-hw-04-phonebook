import { InputAddNumber } from './styled'
import PropTypes from "prop-types";

export const InputNumber = ({handleNumberChange, number}) => {

    return (
        <div>
            <h2>Number</h2>
            <InputAddNumber onChange={handleNumberChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </div>
    );
};

InputNumber.propTypes = {
    handleNumberChange: PropTypes.func.isRequired,
    number: PropTypes.string.isRequired,
};
