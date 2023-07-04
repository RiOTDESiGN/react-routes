import { useState, useRef } from "react";
import { Page } from './Page'

export function Kontakt() {

    const [placeholder, setPlaceholder] = useState("Skriv beskjeden din her");
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);
    const textareaRef = useRef(null);
  
    const handleFocus = () => {
      setPlaceholder("");
    };
  
    const handleBlur = () => {
      if (textareaRef.current.value === "") {
        setPlaceholder("Skriv beskjeden din her");
      }
    };
  
    const handleClearForm = () => {
      firstnameRef.current.value = "";
      lastnameRef.current.value = "";
      emailRef.current.value = "";
      textareaRef.current.value = "";
      setPlaceholder("Skriv beskjeden din her");
    };

  return (
    <Page title="Kontakt" icon="./src/assets/images/contact_icon2.webp">
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
                  Fornavn
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
                  Etternavn
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
                  Epost
                </label>
              </div>
              <div className="space"></div>
              <button id="clearForm" type="button" className="submit" onClick={handleClearForm}>
                Tøm skjema
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
                Send
              </button>
            </div>
          </div>
        </div>
    </Page>
  );
}