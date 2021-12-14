
import React from 'react';
import {ReactComponent as Email_icon} from "./first-name_icon.svg"
import './Form-input.scss';



const FormInput = ({ handleChange, label, pass=0, ...otherProps }) => (
    <div className='group' >
        <input className={`form-input ${pass?"pass":""} `} onChange={handleChange}  {...otherProps}  />
        {label ? (
            <label
         
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}    
            </label>
        ) : null}
    </div>
);

export default FormInput;