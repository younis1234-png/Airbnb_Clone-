import { Button } from '@material-ui/core'
import React, { useState } from 'react'; 
import "./Banner.css";
import Search from "./Search";

import {useHistory} from "react-router-dom";

function Banner() {

    // keep recorte of our history
    const history = useHistory();

    // state is how your write a VARIABLE inside of react
    const [showSearch, setShowSearch] = useState(false)
    return (
        
        <div className="banner">
            {/* banner search */}
            <div className="banner_search">
                {/* SHOW DATE PICKER WHEN IS TRUE */}
                {showSearch && <Search />}
                {/* onlicek show the opposite */}
                <Button onClick= {() => setShowSearch (!showSearch)} vraiant="outline" className="banner_searchButton">Search Dates</Button>
            </div>
            
            {/* banner info */}
        <div className="banner_info">
            <h1>Get Out and stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
            {/* buttom */}
            <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>

        </div>
    
        
        </div>
    )
}

export default Banner
