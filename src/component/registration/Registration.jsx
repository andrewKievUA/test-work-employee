import React,{useState} from "react"
import FormInput from "../form-input/Form-input"
import {CustomButton} from"../custom-buttom/CustomButton"
import "./Registration.scss"
import bg2 from './bg-2.jpg'

export const Registration = () => {
    const [firstName, setfirstName]=useState("")
    const [lastName, setlastName]=useState("")
    const [country, setcountry]=useState("")
    const [password, setpassword]=useState("")
    const [email, setemail]=useState("")
    const [phone, setPhone]=useState("")
    const [confirmPassword, setconfirmPassword]=useState("")
    const handleChange =()=>{
        console.log("asdf");
    }
    const handleSubmit =()=>{
        console.log("asdf");
    }
    return (
            
            <div className="sign-up" style={{ backgroundImage: `url("${bg2}")`,
            height: "100vh",}}>
            <h2 className="title"> I do not have a account</h2>
            <span> Sign Up and find the best place to rest while traveling</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>

                <FormInput
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    label="First Name"
                    required
                />

                <FormInput
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    label="First Name"
                    required
                />  


                <FormInput
                    type="text"
                    name="country"
                    value={email}
                    onChange={handleChange}
                    label="country"
                    required
                />

                <FormInput
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    label="phone"
                    required
                />

                <FormInput
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit" > SIGN UP</CustomButton>
            </form>
        </div>
    )               
}
