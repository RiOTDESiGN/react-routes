import { useState, useRef, useEffect } from "react";
import { Page } from './Page'

export function Contact({ t }) {

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
    };

  return (
    <Page title={t('Contact.title')} icon="./src/assets/images/contact_icon.webp">
        <div className="form-box">
          <div className="form">
            <div className="col">
              <div className="input-container ic1">
                <input
                  ref={firstnameRef}
                  id="firstname"
                  className="input"
                  type="text"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">
                {t('Contact.form_firstname')}
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  ref={lastnameRef}
                  id="lastname"
                  className="input"
                  type="text"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">
                {t('Contact.form_lastname')}
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  ref={emailRef}
                  id="email"
                  className="input"
                  type="text"
                  placeholder=" "
                />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">
                {t('Contact.form_email')}
                </label>
              </div>
              <div className="space"></div>
              <button id="clearForm" type="button" className="submit" onClick={handleClearForm}>
              {t('Contact.form_clear')}
              </button>
            </div>
            <div className="space"></div>
            <div className="col2">
              <form>
                <textarea
                  ref={textareaRef}
                  id="textarea"
                  placeholder={placeholder}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>
              </form>
              <button type="submit" className="submit">
              {t('Contact.form_submit')}
              </button>
            </div>
          </div>
        </div>
    </Page>
  );
}
