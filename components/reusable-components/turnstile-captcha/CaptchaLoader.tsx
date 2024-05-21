import React, { useEffect } from 'react';

interface CaptchaLoaderProps {
  onSuccess?: () => void;
  onError?: () => void;
  onExpired?: () => void;
  siteKey?: string;
  cData?: string;
  theme?: 'auto' | 'light' | 'dark';
  language?: string;
  tabIndex?: number;
}

const CaptchaLoader: React.FC<CaptchaLoaderProps> = ({
  onSuccess,
  onError,
  onExpired,
  siteKey = process.env.NEXT_PUBLIC_TURNSTILE,
  cData,
  theme = 'auto',
  language = 'auto',
  tabIndex = 0,
}) => {
  useEffect(() => {
    const renderWidget = (widget: Element | null) => {
      const widgetId = widget?.id;
      window.turnstile.render(`#${widgetId}`, {
        sitekey: siteKey,
        'error-callback': onError,
        'expired-callback': onExpired,
        theme,
        language,
        'response-field-name': 'turnstile',
        tabindex: tabIndex,
        cData,
        callback: () => {
          if (onSuccess) {
            onSuccess();
          }
        },
      });
    };
    const renderWidgets = () => {
      const widgets = document.querySelectorAll('[id^="turnstile-captcha-"]');
      widgets.forEach(renderWidget);
    };
    const scriptId = 'turnstile-loader';
    const loadCaptchaScript = () => {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.id = scriptId;
      script.onload = renderWidgets;
      document.body.appendChild(script);
    };
    const loadedScript = document.getElementById(scriptId);
    if (loadedScript === null) {
      loadCaptchaScript();
    }
  }, [cData, language, onError, onExpired, onSuccess, siteKey, tabIndex, theme]);
  return <div />;
};

export default CaptchaLoader;

export const useTurnstile = (id: string) => {
  if (id === undefined) {
    throw Error('id must be provided');
  }
  const turnstileInput = document.querySelector(
    `#turnstile-captcha-${id} > input`
  ) as HTMLInputElement;
  return turnstileInput?.value;
};
