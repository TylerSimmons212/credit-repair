import React from 'react';
import './Instructions.css';
import baking from './images/baking2.jpeg'
export default function Instructions(){
    return(
        <div className='instructions'>
            <div><h1>How it Works</h1></div>
            <div className='recipe-box'>
                <div className='recipe-box-top'>
                    <img src={baking} alt='baking'></img>
                    <div>
                        <h2>Our Recipe for Credit Repair</h2>
                            <div className='recipe-box-top-bottom'>
                                <div className='prep-time'>
                                    <p>PREP TIME</p>
                                    <h3>One 10-minute phone call</h3>
                                </div>
                                <div className='cook-time'>
                                    <p>COOK TIME</p>
                                    <h3>About six months*</h3>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='recipe-box-bottom'>
                    <p>Ingredients</p>
                    <ul>
                        <li>A dash of Bureau Challenges</li>
                        <li>A pinch of Creditor Disputes</li>
                        <li id='li-3'>A spoonful of sugar</li>
                    </ul>
                    <p>Instructions</p>
                    <ol>
                        <li>Check your credit for questionable negative items.</li>
                       <li>Challenge those items with all three bureaus. Apply pressure if necessary.</li>
                       <li>Send letters to your creditors, asking them to prove what they’re reporting.</li>
                       <li>Salt to taste.</li>
                   </ol>
               </div>
            </div>
            <div><button>Get Started Now</button></div>
        </div>
    )
}