import React from 'react';
import '../Container/App.css';
import icon from './icon.png';

const Header =({searchChange})=>{
	return(
     <div className="headbar">
      <div className ="combined">
	       <h1>C<img alt="corona-logo" src={icon} className="icon-animation"/>VIDASHB<img alt="corona-logo" src={icon} className="icon-animation"/>ARD</h1>
	       <input type ="search" placeholder="Type the country name here...."	onChange={searchChange} style ={{'border-radius':20, height: 30 , 'border-style':'none', 'width':'50%', 
	       '-webkit-box-shadow': '10px 10px 24px 0px rgba(0,0,0,0.78)',
           '-moz-box-shadow': '10px 10px 24px 0px rgba(0,0,0,0.78)',
           'box-shadow': '10px 10px 24px 0px rgba(0,0,0,0.78)',
            }}/>
	 </div>
     </div>
	)
}

export default Header;