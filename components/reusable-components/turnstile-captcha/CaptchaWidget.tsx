import React from 'react';

interface CaptchaProps {
  name: string;
}

const CaptchaWidget: React.FC<CaptchaProps> = ({ name }) => {
  return <div id={`turnstile-captcha-${name}`} />;
};

export default CaptchaWidget;
