import React, { useState, useEffect } from "react";
import Turnstile from "react-turnstile";

const TurnstileGate = ({ children }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [delayed, setDelayed] = useState(false);

  useEffect(() => {
    // Check if the user has already verified
    const isVerified = localStorage.getItem("captchaVerified");
    if (isVerified === "true") {
      setCaptchaVerified(true);
      setDelayed(true);
    }
  }, []);

  const handleCaptchaSuccess = (token) => {
    console.log("CAPTCHA verified:", token);

    // Save verification status in localStorage
    localStorage.setItem("captchaVerified", "true");
    setCaptchaVerified(true);

    // Add a delay before rendering the app
    setTimeout(() => {
      setDelayed(true);
    }, 3000); // 3-second delay
  };

  const handleCaptchaError = () => {
    console.error("CAPTCHA verification failed.");
    setCaptchaVerified(false);
  };

  const handleCaptchaExpire = () => {
    console.log("CAPTCHA token expired.");
    setCaptchaVerified(false);
  };

  if (!captchaVerified || !delayed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Verifying you are human</h1>
          <p className="mb-4 text-gray-300">
            This may take a few seconds. <br />
            <strong>habcdsed.store</strong> needs to review the security of your
            connection before proceeding.
          </p>
          <Turnstile
            sitekey="0x4AAAAAAA5KdgDzzgQl_aA5" // Replace with your Turnstile site key
            onSuccess={handleCaptchaSuccess}
            onError={handleCaptchaError}
            onExpire={handleCaptchaExpire}
            theme="dark"
            className="inline-block"
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default TurnstileGate;
