import { Page } from './Page';
import { useSettings } from '../SettingsContext';

import home from '../assets/images/home_icon.webp';
import eruDark from '../assets/images/eru-dark.png';
import eruLight from '../assets/images/eru-light.png';

export function Home() {
  const { isDarkMode, t } = useSettings();
  const eruImg = !isDarkMode ? eruDark : eruLight;
  const personality = t('Home.home_personality', { returnObjects: true });
  const hobbies = t('Home.home_hobbies', { returnObjects: true });
  const interests = t('Home.home_interests', { returnObjects: true });
  const favourites = t('Home.home_favourites', { returnObjects: true });

  return (
    <Page title={t('Home.title')} icon={home} alt="Home">
      <div className="home-container">

          <div className="facecard facecardleft">
            <div>
            <h2><span>Name:</span><span>Erik</span></h2>
            <h2><span>Level:</span><span>43</span></h2>
            <h2>Progress :</h2>
            <progress className="progress" value="75" max="100" />
            </div>
            <div>
            <h3 />
            <h2>Goals :</h2>
            I will one day be a frontend developer and work fulltime with creative and exciting projects.
            </div>
          </div>

          <img className="eru" src={eruImg} alt="" />

          <div className="facecard facecardright">
            <h3>Personality :</h3>
              <div className="traits">
                {personality.map((trait, index) => (
                  <div className="trait" key={index}>
                    {trait}
                  </div>
                ))}
              </div>
            <h3>Hobbies :</h3>
              <div className="traits">
                {hobbies.map((entry, index) => (
                  <div className="trait" key={index}>
                    {entry}
                  </div>
                ))}
              </div>
            <h3>Interests :</h3>
              <div className="traits">
                {interests.map((entry, index) => (
                  <div className="trait" key={index}>
                    {entry}
                  </div>
                ))}
              </div>
            <h3>Favourite Things :</h3>
              <div className="traits">
                {favourites.map((entry, index) => (
                  <div className="trait" key={index}>
                    {entry}
                  </div>
                ))}
              </div>
          </div>

          <div className="home-quote-container"><p className="home-quote">{t('Home.home_quote')}</p></div>
        
      </div>
    </Page>
  );
}
