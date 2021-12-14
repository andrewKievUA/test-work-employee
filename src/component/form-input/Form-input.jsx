
import React from 'react';
import {ReactComponent as Email_icon} from "./first-name_icon.svg"
import './Form-input.scss';
import "aos/dist/aos.css"
import Aos from "aos"




const FormInput = ({ handleChange, label, pass=0, icon, ...otherProps }) => {
    React.useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
    <div className='group' data-aos="fade-up" >
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
                                        <div data-aos="fade-up">
                                <icon className="trickIcon" />
                                </div>
    </div>
)};

export default FormInput;