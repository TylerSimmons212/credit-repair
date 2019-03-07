import React from 'react';
import './Body.css'
import pic1 from './images/1.png'
import pic2 from './images/2.png'
import pic3 from './images/3.png'
export default function Body(){
    return(
        <div className='body'>
            <h1>How much does it cost?</h1>
            <h3>A sevice for all budgets</h3>
            <div className='body-sections'>
                <div className='body-sections-1 column'>
                    <img src={pic1} alt=''></img>
                    <h2>AGGRESSIVE</h2>
                    <p>Recommended for those who have a lot of negative items</p>
                    <h1>$$$</h1>
                </div>
                <div className='body-sections-2 column'>
                    <img src={pic2} alt=''></img>
                    <h2>MODERATE</h2>
                    <p>Recommended for those who have a moderate amount of negative items</p>
                    <h1>$$</h1>
                </div>
                <div className='body-sections-3 column'>
                    <img src={pic3} alt=''></img>
                    <h2>BASIC</h2>
                    <p>Recommended for those who have a handful of negative items</p>
                    <h1>$</h1>
                </div>
            </div>
            <h4>Find out how many negative items you have - {<strong>FREE</strong>}</h4>
            <button>Call 1-833-277-6351</button>
        </div>
    )
}