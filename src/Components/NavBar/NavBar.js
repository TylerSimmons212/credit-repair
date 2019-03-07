import React, {Component} from 'react';
import './Navbar.css'
class NavBar extends Component{
    render(){
        return(
            <div className='navbar'>
                <img className='logo' src='https://www.creditrepair.com/images/credit-repair-logo-416x66.png' alt='company title'/>
                <div className='buttons'>
                    <button className='btn'>How it Works</button>
                    <button className='btn'>Reviews</button>
                <i class="fas fa-bars"></i>
                    <button className='btn'>Who We Are</button>
                </div>
                <div className='number'>1-855-611-2213</div>
            </div>
        )
    }
}
export default NavBar