import React  from 'react'
import './App.css'
import logo from './logo.svg'
import './App.js';


const Logo = ({ loading }) => {
    return (
      <img
        src={logo}
        //condizione if else
        className={`App-logo${loading ? ' App-logo-spinning' : ''}`}
        alt='interactive-logo'
         
      />
    )
  }

class ComponenteEsterno extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        bgColor: "",
        on:false
      }
    }
  
    boxClick = (e) => {
      this.setState({
        bgColor: "red"
      })
    }
  
    toggle =()=> {
      this.setState({
        on: !this.state.on
      })
    }
  
    onInputTextChange = (event) => this.setState({ inputText: event.target.value })
  
    
   
  
    render () {
      return (

        <div> 

       
        <button
        className="Layout-Button" 
        style={{backgroundColor: this.state.bgColor}}          
        //onClick={this.boxClick}
        onClick={this.toggle}
        
      >
      <code>DOMENICO MUCCI</code>

      </button>
      {this.state.on && <div>Verifica React 28/1/2021</div>}
      

      

      
      
      
      </div>
        
  
        
  
  
        
        
      );
     }
  };
  
  export default ComponenteEsterno;