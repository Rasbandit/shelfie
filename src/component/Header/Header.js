import React from 'react'
import logo from '../../images/logo.png'

export default function Header(){
    return(
        <div style={{background:"darkred", color: "white"}}>
            <img src={logo}/>
            <h1>SHELFIE</h1>
            <button>Dashboard</button>
            <button>Add Inventory</button>
        </div>
    )
}