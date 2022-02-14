import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar(){
    return(
        <>
        
        <Link to='/'> <p style={{margin:20}}>Home</p></Link>
        <Link to='/detal'></Link>

        
        </>
    )
 
}




export default Navbar;