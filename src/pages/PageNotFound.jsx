import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <div className="title"><h1>Page not found</h1>test</div>
      <br />
      <div className="pageContent">
      <h2>Re-directing to landingpage in {count} seconds.</h2>
      </div>
    </>
  );
}