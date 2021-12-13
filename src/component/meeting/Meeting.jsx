import React from 'react'
import {ReactComponent as ShoppingIcon1} from "./section_1-svg_1.svg";
import {ReactComponent as ShoppingIcon2} from "./section_1-svg_2.svg";

import {ReactComponent as ShoppingIcon3} from "./section_1-svg_3.svg";
import  bg1 from "./bg1.jpg";
import logo from './logo.svg'
import "./Meeting.scss"
import { CustomButton } from '../custom-buttom/CustomButton';

export const Meeting = () => {
 
    return (
        <div style={{ backgroundImage: `url("${bg1}")`,
        height: "100vh",}} >
             
          <ShoppingIcon1 className="green-sqware sqware1"/>
          <ShoppingIcon2 className="green-sqware sqware2"/>
          <ShoppingIcon3 className="green-sqware sqware3"/>
          <div className="meeting">
            <img src={logo} alt="альтернативный текст" /> <br/>
            <span className="text white"> Find the </span> <span className="text green"> best place </span> <br/>
            <span className="text green"> to rest  </span> <span className="text white"> while traveling </span> <br/> 
            <CustomButton  context={"hello"}/>
    
          </div>
      </div>
    )
}
