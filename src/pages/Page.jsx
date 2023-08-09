export function Page({ title, icon, alt, children }) {
    return (
      <>
        <div className="page pageContentAdapt">
          <div className="title">
            <h1>{title}</h1>
            <img src={icon} alt={alt} />
          </div>
          <div className="pageContent">{children}</div>
        </div>
      </>
    );
  }