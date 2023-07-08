export function Page({ title, icon, alt, children }) {
    return (
      <>
        <div className="title">
          <h1>{title}</h1>
          <img className="titleImg" src={icon} alt={alt} />
        </div>
        <div className="pageContent">{children}</div>
      </>
    );
  }