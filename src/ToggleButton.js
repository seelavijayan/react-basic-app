// function ToggleButton() {

//     //Handle Click
//     function handleClick(e){
//         e.preventDefault();
//         alert('Link Clicked');  
//     }

//     return <div> <button onClick={() => { alert('hello') }}>Hello</button>
//     <a href="#page" onClick={handleClick}>Page</a>
//     </div>
// }
import React, { Component } from 'react';

class ToggleButton extends Component {
constructor(props){
    super(props);
    this.state={
        isToggleOn:true
    };

    // this.handleClick=this.handleClick.bind(this);
}

    //Handle Click
    handleClick=(value,e)=> {
        console.log(e,'event');
        
        console.log(value,'value');

        // e.preventDefault();
        // alert('Link Clicked');
        this.setState(state=>{
            return {isToggleOn:state.isToggleOn?false:true}
        })
    }

    render() {
        return <div>
            {/* <button onClick={() => { alert('hello') }}>Hello</button> */}
            <button onClick={(e)=>this.handleClick('some value',e)}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
            {/* <a href="#page" onClick={this.handleClick}>Page</a> */}
        </div>
    }
}
export default ToggleButton;