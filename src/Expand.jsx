import React from 'react';

class Expand extends React.Component {
  state = {
    isExpand: false
  }

handleContent = () => {
    this.setState({
      isExpand: !this.state.isExpand
    })
  }

  render() {
    const { children, title } = this.props;

    let expandContent = null;
    let arrowDirection = "▼";
      if (this.state.isExpand) {
        expandContent = children;
        arrowDirection = "▲";
      };

    return (
      <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button 
          className="expand__toggle-btn"
          onClick={this.handleContent}
        >
          {arrowDirection}
        </button>
      </div>
      <div className="expand__content">
        {expandContent}
      </div>
    </div>
  );
  }
}

export default Expand;