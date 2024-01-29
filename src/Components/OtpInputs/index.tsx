import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length, onOtpSubmit }: any) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpInputRef = useRef<any>([]);
  console.log("otpInputRef", otpInputRef);

  useEffect(() => {
    if (otpInputRef.current[0]) {
      otpInputRef?.current[0].focus();
    }
  }, []);

  const handleChange = (e: any, index: number) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //pass otp into the submit funtion
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    //move to next input if current field is filled
    if (value && index < length - 1 && otpInputRef.current[index + 1]) {
      otpInputRef.current[index + 1].focus();
    }
  };

  const handleClick = (e: any) => {};
  const handleKeyDown = (e: any, index: any) => {};

  return (
    <form className="otp-container">
      {otp?.map((value: any, index: any) => (
        <input
          className="otp-input"
          ref={(inputRef) => (otpInputRef.current[index] = inputRef)}
          key={index}
          value={value}
          type="text"
          onChange={(e) => handleChange(e, index)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </form>
  );
};

export default OtpInput;
