import { useSettings } from '../SettingsContext';

export function Page({ title, icon, alt, children }) {
  const { isShrinkHeaderActive } = useSettings();
    return (
      <>
        <div className={`page ${isShrinkHeaderActive ? 'pageContentAdapt' : ""}`}>
          <div className="title">
            <h1>{title}</h1>
            <img src={icon} alt={alt} />
          </div>
          <div className={`pageContent ${isShrinkHeaderActive ? 'pageContentGrow' : ""}`}>{children}</div>
        </div>
      </>
    );
  }