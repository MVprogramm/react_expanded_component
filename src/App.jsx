import React from "react";
import Expand from "./Expand.jsx";

class App extends React.Component {
  state = {
    isExpand: false
  }

handleContent = () => {
    this.setState({
      isExpand: !this.state.isExpand
    })
  }

  render() {
    return (
      <div className="app">
        <Expand 
          isExpand={this.state.isExpand} 
          title="About Hooks"
          onClose={this.handleContent}
        >
          <div className="expand__content">
            <p>
              Hooks are a new addition in React 16.8. 
              They let you use state and other React 
              features without writing a class.
            </p>
          </div>
        </Expand>
      </div>
    );
  }
};

export default App;


