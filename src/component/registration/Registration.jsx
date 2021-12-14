import React, {useState} from "react"
import FormInput from "../form-input/Form-input"

import "./Registration.scss"
import bg2 from './bg-2.jpg'
import isd from "./isd_country_code.json"

import {Parallax} from 'react-parallax'





import "aos/dist/aos.css"
import Aos from "aos"



import {ReactComponent as Check_icon} from "./icons/check_icon.svg"
import {ReactComponent as ConfirmPassword_icon} from "./icons/confirm-password_icon.svg"
import {ReactComponent as Country_icon} from "./icons/country_icon.svg"
import {ReactComponent as Email_icon} from "./icons/email_icon.svg"
import {ReactComponent as FirstName_icon} from "./icons/first-name_icon.svg"
import {ReactComponent as Password_icon} from "./icons/password_icon.svg"
import {ReactComponent as Phone_icon} from "./icons/phone_icon.svg"
import {ReactComponent as SecondName_icon} from "./icons/second-name_icon.svg"



export const Registration = () => {



    React.useEffect(()=>{
        Aos.init({duration:2000})
    },[FormInput])
    
    const [firstName, setfirstName] = useState("")
    const [firstNameError, setfirstNameError] = useState(false)

    const [lastName, setlastName] = useState("")
    const [lastNameError, setlastNameError] = useState(false)

    const [country, setcountry] = useState("")
    const [countryError,setCountryError]=useState(false)

    const [password, setpassword] = useState("")
    const [passwordError, setpasswordError] = useState(false)

    const [confirmPassword, setconfirmPassword] = useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState(false)

    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState(false)

    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState(false)

    const [x, setX] = useState(false);
    const [xAlarm, setXAlarm] = useState(false);

    const soldCheckbox = ({ target: { checked } }) => {
               setX(true)
               console.log(x);;
      }


    const countryHandle = (e) => {
        setcountry(e.target.value)
    }
    const firstNameHandler = (e) => {
        setfirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        setlastName(e.target.value)
    }
    const emailHandler = (e) => {
        setemail(e.target.value)
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }
    const passwordHandler = (e) => {
        setpassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        setconfirmPassword(e.target.value)
    }
    const confirmCountryHandler =(e)=>{
        console.log(e.target.value);
        setcountry(e.target.value)
        isd.forEach((el)=>{if(el.name===e.target.value){setPhone(el.dial_code)}})

    }
    const checkFormHandler = () => {
      
        if (!x){setXAlarm(true)
        console.log("true");}else{console.log("false");}

        if (firstName.length < 1) {
            setfirstNameError(true)
        }
        if (lastName.length < 1) {
            setlastNameError(true)
        }


        function validateEmail(email) {
            var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return re.test(String(email).toLowerCase());
          }

        if (!validateEmail(email)) {
            setemailError(true)
        }
        if (!phone) {
            setPhoneError(true)
        }
        const checkArray = [/[A-Z]/g, /[0-9]/g, /[!@#$%^&*()]/g]
        if (password.match(checkArray[0]) && password.match(checkArray[1]) && password.match(checkArray[2])) {
        } else {
            setpasswordError(true)
        }
        if(confirmPassword !== password){setconfirmPasswordError(true)}

        if(!country){setCountryError(true)}
        setTimeout(()=>{
            setfirstNameError(false)
            setconfirmPasswordError(false)
            setpasswordError(false)
            setPhoneError(false)
            setemailError(false)
            setlastNameError(false)
            setfirstNameError(false)
            setCountryError(false)
            setXAlarm(false)
        },4000)
    }

       return (
        <Parallax className="sign-up" 
        bgImage={ bg2} 
        strength={500}
        style={{ 
            height: "100vh",
        }}>
        
            
            <div className="containers" id="forma">

                <div className="text-intro-container">

                    <span className="green text2"> Sign Up</span><span className="white text2"> and find the best place to rest while traveling</span>
                </div>
                <br/>
                <form className="sign-up-form">
                    <div className="row">
                        <div className="col-sm">
                       
                            
                            <FormInput
                                icon={FirstName_icon}
                                autocomplete="off"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={firstNameHandler}
                                label="First Name"
                                required
                            />  {firstNameError ?
                                <div className="error-form">The name must be more than 2 characters </div> : <div className="error-form dn">1</div>}

                                <div data-aos="fade-up">
                                <FirstName_icon className="trickIcon" />
                                </div>


                            <FormInput
                                type="text"
                                autocomplete="off"
                                name="lastName"
                                value={lastName}
                                onChange={lastNameHandler}
                                label="Last Name"
                                required/>
                                {lastNameError ?<div className="error-form">The name must be more than 2 characters </div> : <div className="error-form dn">1</div>}
                                
                                <div data-aos="fade-up">
                                 <SecondName_icon data-aos="fade-up" className="trickIcon"/>
                                 </div>
                            <FormInput
                                type="text"
                                name="email"
                                value={email}
                                onChange={emailHandler}
                                label="email"
                                required/>
                              {emailError ? <div className="error-form">Email is not correct </div> : <div className="error-form dn">1</div>}
                              
                              <div data-aos="fade-up">
                                <Email_icon data-aos="fade-up" className="trickIcon"/>
                                </div>
                           
                            <FormInput
                                type="text"
                                autocomplete="off"
                                name="phone"
                                value={phone}
                                onChange={phoneHandler}
                                label="Phone"
                                required/>

                                 

                                {phoneError ? <div className="error-form">Fill in the field </div> : <div className="error-form dn">1</div>}                                                    
                                    <Phone_icon   className="trickIcon"/>                               
                                 </div>                                   
                                <div className="col-sm">
                            <FormInput
                                type="text"
                                autocomplete="off"
                                pass={true}
                                name="password"
                                value={password}
                                onChange={passwordHandler}
                                label="password"
                                required
                            />                      
                             {passwordError ? <div className="error-form">Password must have 1 letter, 1 number and one
                            symbol </div> :<div className="error-form dn">1</div> }
                           
                            <div data-aos="fade-up">
                            <Password_icon data-aos="fade-up" className="trickIcon"/>
                            </div>
  
                            <FormInput
                                type="text"
                                autocomplete="off"
                                pass={true}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={confirmPasswordHandler}
                                label="Confirm Password"
                                required
                            />
                            {confirmPasswordError ? <div className="error-form">Password does not match </div> : <div className="error-form dn">1</div>}
                           
                            <div data-aos="fade-up">
                             <ConfirmPassword_icon data-aos="fade-up" className="trickIcon"/>
                             <div>

                            <div className="coutryContainer">
                                <select className="country-select" onChange={confirmCountryHandler}>
                                {isd?  isd.map(el=>  <option className="dropdownSelect">{el.name}</option>):null}
                                </select>
                            </div>
                            {countryError ? <div className="error-form">Fill in the field </div> : <div className="error-form dn">1</div>}
                            <div data-aos="fade-up">
                            <Country_icon data-aos="fade-up" className="trickIcon"/>
                            </div>
                            {xAlarm ? 
                            <>
                            <input type="checkbox" checked={x}  className="checkbox" onChange={soldCheckbox} />
                            <span className="sqareRed"></span>    
                            <span className="white">I agree to the </span>    
                            <span className="green">Terms & Conditions</span> 
                            </>
                            : 
                            <><input type="checkbox" checked={x}  className="checkbox" onChange={soldCheckbox} /> 
                            <span className="white">I agree to the </span>    
                            <span className="green">Terms & Conditions</span> </>}
                            
                           </div>
                           </div>
                        </div>
                        
                        
                    </div>
                </form>
                <button onClick={checkFormHandler} className="SignUpForm" >Sign Up</button>

            </div>
       
        </Parallax>
    )
    
}

