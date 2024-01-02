import React from "react";
import ChildComp from './ChildComp'
class ParentComp extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         messageFromChildComp:''
      }
    }
    
    handleDataFromChild =(message)=>{
        this.setState({messageFromChildComp:message})
    }
    render() {
      return (
        <>
          <h2>Parent  Comp</h2>
          <h4>Message from Child Comp :{this.state.messageFromChildComp}</h4>
          <ChildComp  sendDataToParentComp ={this.handleDataFromChild}/>
        </>
      )
    }
}
export default ParentComp



//app -> parent => child