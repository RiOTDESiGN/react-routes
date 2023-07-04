export function Page({ title, icon, children }) {
    return (
      <>
        <div className="title">
          <h1>{title}</h1>
          <img className="titleImg" src={icon} alt="test" />
        </div>
        <div className="pageContent">{children}</div>
      </>
    );
  }