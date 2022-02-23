import React from "react";
import Err404 from "../images/Site/404._logo.png"
import LostTxt from "../images/Site/404_text_small.png"

class Error extends React.Component {
  render() {
    return(
      <div>
      <div className="content">
        <img className="error-page-img" src={Err404} alt="error 404" />
        <img className="error-page-img" src={LostTxt} alt="Lost in Space" />
      </div>
      </div>
    )
  }
}

export default Error;