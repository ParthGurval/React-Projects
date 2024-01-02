import React from "react";
class ChildComp extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message :"Welcome to React"
      }
    }
    sendMessage =() => {
       this.props.sendDataToParentComp(this.state.message) 
    }
    render() {
      return (
        <>
          <h2>Child Comp</h2>
          <button onClick={this.sendMessage}>Send message to Parent Comp</button>
        </>
      )
    }
}
export default ChildComp