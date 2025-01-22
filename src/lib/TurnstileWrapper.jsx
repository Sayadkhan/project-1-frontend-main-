import React, { useState } from "react";
import Turnstile from "react-turnstile";

const TurnstileGate = ({ children }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaSuccess = (token) => {
    console.log("CAPTCHA verified:", token); // Optionally send the token to the backend for further verification
    setCaptchaVerified(true);
  };

  const handleCaptchaError = () => {
    console.error("CAPTCHA verification failed.");
    setCaptchaVerified(false);
  };

  const handleCaptchaExpire = () => {
    console.log("CAPTCHA token expired.");
    setCaptchaVerified(false);
  };

  if (!captchaVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Complete CAPTCHA to Proceed
          </h1>
          <Turnstile
            sitekey="0x4AAAAAAA5KdgDzzgQl_aA5"
            onSuccess={handleCaptchaSuccess}
            onError={handleCaptchaError}
            onExpire={handleCaptchaExpire}
            className="inline-block"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TurnstileGate;
