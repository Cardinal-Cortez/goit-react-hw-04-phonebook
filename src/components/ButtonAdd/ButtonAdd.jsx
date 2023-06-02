import { InputContacts } from "./Styled";
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Filter extends Component{
    
    render() {
    const { handleChange, filter } = this.props;
    // const { filter} = this.props.state;
        return (
            <InputContacts value={filter} onChange={handleChange} />
        );
    }
};
   
Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

