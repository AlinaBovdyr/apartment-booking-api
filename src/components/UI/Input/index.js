import React from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ type, name, className, ...restProps }) => {
    const classList = [s.input, className].join(' ');

    return (
        <input
            className={classList}
            type={type}
            name={name}
            {...restProps}
        />
    );
};

Input.defaultProps = {
  type: 'text',
  name: null,
  className: '',
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Input;