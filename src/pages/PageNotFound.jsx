import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSettings } from '../SettingsContext';
import { Page } from './Page'

import pagenotfound from '../assets/images/translation.png'

export function PageNotFound() {
  const { t } = useSettings();
  const navigate = useNavigate();
  const [count, setCount] = useState(60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
  }, [count, navigate]);

  return (
    <Page title={t("PNF.title")} icon={pagenotfound} alt="ProjectNotFound">
    <h2>{t("PNF.header")}</h2>
    <h2>{t("PNF.description")}{count}{t("PNF.seconds")}</h2>
    </Page>
  );
}