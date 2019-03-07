import React, { Component } from 'react';
import './Components/NavBar/Navbar.css'
import Landing from './Components/Landing/Landing'
import './App.css';
import Instructions from './Components/Instructions/Instructions';
import Stats from './Components/Stats/Stats'
import Body from './Components/Body/Body';
class App extends Component {
  constructor(){
    super()
    this.state = {
      dropdown: false
    }
  }
  scroll(elementId){
    const element = document.getElementById(elementId)
    window.scroll({
        top:element.offsetTop,
        behavior:'smooth'
    })
}

  toggleView = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  toggleGo = (elementId) => {
    const element = document.getElementById(elementId)
    this.setState({
      dropdown: !this.state.dropdown
    },
    window.scroll({
      top:element.offsetTop,
      behavior:'smooth'
  }))
  }

  render() {
    return (
      <div className="App">
        <div className='navbar'>
            <i className="fas fa-bars" onClick={()=>this.toggleView()}></i>
            <img className='logo' src='https://www.creditrepair.com/images/credit-repair-logo-416x66.png' alt='company title'/>
            <div className='buttons'>
                <button className='btn' onClick={(e) => this.scroll('instructions')}>How it Works</button>
                <button className='btn' onClick={(e) => this.scroll('stats')}>How Long it Takes</button>
                <button className='btn' onClick={(e) => this.scroll('body')}>How Much it Costs</button>
            </div>
            <div className='number'>1-855-611-2213</div>
        </div>
        <Landing/>
        <div id="instructions"><Instructions /></div>
        <div id="stats"><Stats /></div>
        <div id="body"><Body /></div>
        {this.state.dropdown?
          <div className='dropdown'>
            <nav id='dropdown-nav'>
              <i class="fas fa-window-close" onClick={()=>this.toggleView()}></i>
              <img className='logo' src='https://www.creditrepair.com/images/credit-repair-logo-416x66.png' alt='company title'/>
            </nav>
            <button className='drop' onClick={(e) => this.toggleGo('instructions')}>How it Works</button>
            <button className='drop' onClick={(e) => this.toggleGo('stats')}>How Long it Takes</button>
            <button className='drop' onClick={(e) => this.toggleGo('body')}>How Much it Costs</button>
         </div>:null
      }
      </div>
    );
  }
}

export default App;
