import React from "react";
import "./style.css";
import imglogo from "../../images/mf-avatar.svg";
import { useHistory } from "react-router";


function Signin(props) {
    const history = useHistory();
  return (
    <div className="signin-container">
      <div className="signin-header">
        <div className="signin-logo">
          <p onClick={()=>history.push("/portfolio")}>hoailv</p>
        </div>
      </div>
      <div className="signin-logo-header">
        <div className="sign-logo-border"></div>
      </div>
      <div className="sign-img">
        <img src={imglogo} />
      </div>
      <div className="sign-p">
        <p>
          Thanks for taking the time to reach out. How can I help you today?
        </p>
      </div>
      <form class="row g-3 d-flex justify-content-center w-75  ml-auto mr-auto">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Message</label>
    <textarea type="" class="form-control" id="inputAddress"  rows="6"/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-outline-primary mt-3">Submit</button>
  </div>
</form>
    </div>
  );
}

export default Signin;
