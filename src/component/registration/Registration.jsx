import React, {useState} from "react"
import FormInput from "../form-input/Form-input"
import {CustomButton} from "../custom-buttom/CustomButton"
import "./Registration.scss"
import bg2 from './bg-2.jpg'
import isd from "./isd_country_code.json"

export const Registration = () => {
    console.log(isd)
    const [firstName, setfirstName] = useState("")
    const [firstNameError, setfirstNameError] = useState(false)

    const [lastName, setlastName] = useState("")
    const [lastNameError, setlastNameError] = useState(false)

    const [country, setcountry] = useState("")

    const [password, setpassword] = useState("")
    const [passwordError, setpasswordError] = useState(false)

    const [confirmPassword, setconfirmPassword] = useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState(false)

    const [email, setemail] = useState("")
    const [emailError, setemailError] = useState(false)

    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState(false)


    const countryHandle = (e) => {
        console.log("asdf", e.target.value);
        setcountry(e.target.value)
    }
    const firstNameHandler = (e) => {
        console.log("asdf", e.target.value);
        setfirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        console.log("asdf", e.target.value);
        setlastName(e.target.value)
    }
    const emailHandler = (e) => {

        setemail(e.target.value)
    }
    const phoneHandler = (e) => {
        console.log("asdf", e.target.value);
        setPhone(e.target.value)
    }
    const passwordHandler = (e) => {
        console.log("setpassword", e.target.value);
        setpassword(e.target.value)
    }
    const confirmPasswordHandler = (e) => {
        console.log("setpassword", e.target.value);
        setconfirmPassword(e.target.value)
    }
    const checkFormHandler = () => {
        if (firstName.length < 1) {
            setfirstNameError(true)
        }
        if (lastName.length < 1) {
            setlastNameError(true)
        }

        if (!email.match(/[@]+[.]/g)) {
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
        setTimeout(()=>{
            setfirstNameError(false)
            setconfirmPasswordError(false)
            setpasswordError(false)
            setPhoneError(false)
            setemailError(false)
            setlastNameError(false)
            setfirstNameError(false)
        },4000)
    }

    return (

        <div className="sign-up" style={{
            backgroundImage: `url("${bg2}")`,
            height: "100vh",
        }}>
            <div className="containers">
                <div className="text-intro-container">

                    <span className="green text2"> Sign Up</span><span className="white text2"> and find the best place to rest while traveling</span>
                </div>
                <form className="sign-up-form">
                    <div className="row">
                        <div className="col-sm">
                            <FormInput
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={firstNameHandler}
                                label="First Name"
                                required
                            />
                            {firstNameError ?
                                <div className="error-form">The name must be more than 2 characters </div> : <br/>}

                            <FormInput
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={lastNameHandler}
                                label="Last Name"
                                required/>
                            {lastNameError ?
                                <div className="error-form">The name must be more than 2 characters </div> : <br/>}

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                onChange={emailHandler}
                                label="email"
                                required/>
                            {emailError ? <div className="error-form">Email is not correct </div> : <br/>}


                            <FormInput
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={phoneHandler}
                                label="Phone"
                                required/>
                            {phoneError ? <div className="error-form">Fill in the field </div> : <br/>}
                        </div>


                        <div className="col-sm">
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                onChange={passwordHandler}
                                label="password"
                                required
                            />
                            {passwordError ? <div className="error-form">Password must have 1 letter, 1 number and one
                                symbol </div> : <br/>}

                            <FormInput
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={confirmPasswordHandler}
                                label="Confirm Password"
                                required
                            />
                            {confirmPasswordError ? <div className="error-form">Password does not match </div> : <br/>}

                            <select>
                            {isd?  isd.map(el=>  <option>{el.name}</option>):null}


                            </select>

                            <FormInput
                                type="name"
                                name="country"
                                value={country}
                                onChange={countryHandle}
                                label="Country"
                                required
                            />

                        </div>
                    </div>
                </form>
                <button onClick={checkFormHandler}>asdfasdfasdf</button>
                {/*<CustomButton > SIGN UP</CustomButton>*/}
            </div>
        </div>
    )
}
