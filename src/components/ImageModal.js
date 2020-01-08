import React from "react";
export default class ImageModal extends React.Component {


  render() {
    if(!this.props.show){
          return null;
      }
    return (
      <div className="M" >
        <div className="content">{this.props.children}</div>
      
      </div>
    )
  }
}
