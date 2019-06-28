import React from 'react';
// import './verification.scss';

import ReactCodeInput from 'react-verification-code-input';

const EmailVerify = () => (
  <div>
    <div className="registration__subtitle">
      <span>
        <h1>Create Account</h1>
        <h1>Email Verify</h1>
      </span>
    </div>
    <div className="registration__container--verification">
      <h1 className="serviceAgreement_header">Verify your email to complete registration</h1>
      <p>Please enter the 5 digit from the email that we sent to <span><a href="">hanthss@gmail.com</a></span></p>
      <p>Didn't recieve a code?<span><a href=""> Resend Code</a></span></p>
      <ReactCodeInput fields={5} className="codeInput"/>
      <div className="serviceAgreement_customerService">
        <p>If you have not recieved an email with a verification code,</p>
        <p>please call 213-745-2667 for customer service assistance.</p>
      </div>
    </div>
    <div className="registration__container--btn">
      <button className="serviceAgreement_btn btn">Verify</button>
    </div>
  </div>
);
export default EmailVerify;