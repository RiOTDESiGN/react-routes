import { useState, useRef } from "react";
import { Page } from './Page'

export function Contact() {

    const [placeholder, setPlaceholder] = useState("Enter your text here");
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);
    const textareaRef = useRef(null);
  
    const handleFocus = () => {
      setPlaceholder("");
    };
  
    const handleBlur = () => {
      if (textareaRef.current.value === "") {
        setPlaceholder("Enter your text here");
      }
    };
  
    const handleClearForm = () => {
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      emailRef.current.value = "";
      textareaRef.current.value = "";
      setPlaceholder("Enter your text here");
    };

  return (
    <Page title="Contact" icon="./src/assets/images/contact_icon.webp">
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
                  First name
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
                  Last name
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
                  Email
                </label>
              </div>
              <div className="space"></div>
              <button id="clearForm" type="button" className="submit" onClick={handleClearForm}>
                Clear Form
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
                Submit
              </button>
            </div>
          </div>
        </div>
    </Page>
  );
}