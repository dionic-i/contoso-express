import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, type, error}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    let inputType = type ? type : 'text';

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>

            <div className="field">
                <input type={inputType}
                       name={name}
                       className="form-control"
                       placeholder={placeholder}
                       value={value ? value : ''}
                       onChange={onChange}/>

                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;