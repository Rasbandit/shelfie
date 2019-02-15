import React from 'react'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div style={{background:"#AB2A19", color: "white"}}>
            <img src={logo} alt="logo"/>
            <h1>SHELFIE</h1>
            <Link to="/">
                <button>Dashboard</button>
            </Link>
            <Link to="/add">
                <button>Add Inventory</button>
            </Link>
        </div>
    )
}