import React from 'react'
import"./index.scss"
import logo from"./logo/logo.png"

export const Header = () => {
    return (
        <div>
            <div className="Header">
            <div className="Header_container">
                <img src={logo}></img>

                <div className="input">
                    <input id = "search"type="text" placeholder="Search...." />
                    <button className="btn">Sign in</button>
                </div>
            </div>
        </div>
        <div className="header_menu">
            {/* <Router> */}
                <li id ="navMenu">Electronics</li>          
                <li id ="navMenu">Sports & outdors</li>
                <li id ="navMenu">Home & Garden</li>
                
                

                {/* <Route path="/electronicsProducts" component={ElectronicsProducts} />
                <Route path="/sports" component={Sports} />
                <Route path="/home" component={Home} /> */}
{/* 
            </Router> */}

        </div>
        </div>
    )
}
