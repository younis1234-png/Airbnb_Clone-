import React from 'react'
import  "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core";


// send back to home page
import {Link} from "react-router-dom"


function Header() {
    return (
        <div className= "header">
            <Link to="/">
            
            {/* logo */}
            <img 
            className="header_icon"
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
            alt=""
            />

         </Link>

            {/* search input bar and icon fpr search */}
            <div className="header_center">
                <input type="text"/>
                <SearchIcon />
            </div>
            {/* Our icons */}
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
