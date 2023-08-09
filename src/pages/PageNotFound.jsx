import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from './Page'

export function PageNotFound() {
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
    <Page title="Project not found" icon="/assets/images/404.webp" alt="ProjectNotFound">
    <h2>Re-directing to landingpage in {count} seconds.</h2>
    </Page>
  );
}