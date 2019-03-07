import React from 'react';
import './Stats.css'
export default function Stats(){
    return(
        <div className='stats-outer'>
            <div className='stats'>
                <h1>How long does credit repair take?</h1>
                <h3>Honestly, it can take a long time (especially if you do it yourself). But our members have seen an average score increase of</h3>
                <div className='stats-center'>
                    <div className='inner-stats'>
                        <div>
                            <h1>40</h1>
                            <h1>POINTS</h1>
                        </div>
                        <h4>IN</h4>
                        <div>
                            <h1>40</h1>
                            <h1>MONTHS</h1>
                        </div>
                    </div>
                    <img src='https://www.creditrepair.com/content/dam/credit-repair/assets/images/score-graph.png' alt='Logo'></img>
                </div>
                <div className='stats-bottom'>
                    <p>You know what's much easier than credit repair?</p>
                    <p>Calling CreditRepair.com</p>
                </div>
                <button className='stats-button'>Call 1-833-277-6351</button>
            </div>
        </div>
    )
}