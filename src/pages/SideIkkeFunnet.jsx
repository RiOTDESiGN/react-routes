import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from './Page'

export function SideIkkeFunnet() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

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
    <Page title="Side ikke funnet" icon="../src/assets/404_icon.webp">
    <h2>Omdirigerer til fremsiden om {count} sekunder.</h2>
    </Page>
  );
}