import React, { useState } from "react";
import "./App.css";
import OtpInput from "./Components/OtpInputs";

function App() {
  const [isOtp, setIsOtp] = useState(false);
  const [phoneNumber, setphoneNumber] = useState("");

  const handleChange = (e: any) => {
    if (e.target.value) {
      setphoneNumber(e.target.value);
    }
  };

  const handlePhoneSubmit = (event: any) => {
    event.preventDefault();
    setIsOtp(true);
  };

  const onOtpSubmit = () => {
    // event.preventDefault();
    console.log("login successfully!");
  };

  return (
    <div className="App">
      {!isOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <h1>Enter your number</h1>
          <input
            placeholder="enter your number"
            type="number"
            value={phoneNumber}
            onChange={handleChange}
          />
          <button type="submit">get otp</button>
        </form>
      ) : (
        <div>
          <h1>Enter OTP sent to {phoneNumber}</h1>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          <button onClick={() => onOtpSubmit()}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
