import { useState, useRef, useEffect } from "react";
import { useSettings } from '../SettingsContext';
import { Page } from './Page'

import recycle from '../assets/images/recycle.png';
import sendform from '../assets/images/sendform.png';
import contact from '../assets/images/contact_icon.webp';

export function Contact() {
    const { isDarkMode, t } = useSettings();
    const [isAnimating, setIsAnimating] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);
    const textareaRef = useRef(null);
    const enterText = t('Contact.form_entertext');

    useEffect(() => {
      setPlaceholder(enterText);
    }, [t]);
  
    const handleFocus = () => {
      setPlaceholder("");
    };
  
    const handleBlur = () => {
      if (textareaRef.current.value === "") {
        setPlaceholder(enterText);
      }
    };
  
    const handleClearForm = () => {
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      emailRef.current.value = "";
      textareaRef.current.value = "";
      const enterText = t('Contact.form_entertext');
      setPlaceholder(enterText);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    };

  return (
    <Page title={t('Contact.title')} icon={contact} alt="Contact Icon">
      <div className="form-box">
        <form action="https://formsubmit.co/b25719bfc1f7531b25f9664ebaa92ec9" method="POST">
            <div className="input-container firstname">
              <input
                ref={firstnameRef}
                id="firstName"
                className="no-drag"
                type="text"
                autoComplete="on"
                placeholder=" "
                required
              />
              <div className="cut">{t('Contact.form_firstname')}</div>
              <label htmlFor="firstName" className="placeholder">
                {t('Contact.form_firstname')}
              </label>
            </div>
            <div className="input-container lastname">
              <input
                ref={lastnameRef}
                id="lastName"
                className="no-drag"
                type="text"
                autoComplete="on"
                placeholder=" "
                required
              />
              <div className="cut">{t('Contact.form_lastname')}</div>
              <label htmlFor="lastName" className="placeholder">
                {t('Contact.form_lastname')}
              </label>
            </div>
            <div className="input-container email">
              <input
                ref={emailRef}
                id="email"
                className="no-drag"
                type="email"
                autoComplete="on"
                placeholder=" "
                required
              />
              <div className="cut">{t('Contact.form_email')}</div>
              <label htmlFor="email" className="placeholder">
                {t('Contact.form_email')}
              </label>
            </div>
            <textarea
                ref={textareaRef}
                id="textarea"
                className="no-drag"
                name="message"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
            ></textarea>
            <button id="clearForm" type="button" className="submit clear no-drag" onClick={handleClearForm}>
              {t('Contact.form_clear')}
              <img
                    src={recycle}
                    alt="Clear Form Icon"
                    className={`clearFormImg ${isDarkMode ? '' : 'invert-filter'} ${isAnimating ? 'rotate-animation' : ''}`}
              />
            </button>
            <button type="submit" className="submit no-drag">
              {t('Contact.form_submit')}
              <img
                    src={sendform}
                    alt="Send Form Icon"
                    className={`sendFormImg ${isDarkMode ? '' : 'invert-filter'}`}
              />
            </button>
        </form>
      </div>
    </Page>
  );
}
