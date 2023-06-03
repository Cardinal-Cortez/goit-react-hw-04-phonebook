import { InputContacts } from "./Styled";
import PropTypes from "prop-types";

export const Filter=({handleChange, filter})=> {
    
        return (
            <InputContacts value={filter} onChange={handleChange} />
        );
    }
   
Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

