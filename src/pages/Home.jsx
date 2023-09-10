import { Page } from './Page';
import { useSettings } from '../SettingsContext';

import home from '../assets/images/home_icon.webp';
import eruDark from '../assets/images/eru-dark.png';
import eruLight from '../assets/images/eru-light.png';

export function Home() {
  const { isDarkMode, t } = useSettings();
  const personality = t('Home.home_traits_personality', { returnObjects: true });
  const hobbies = t('Home.home_traits_hobbies', { returnObjects: true });
  const interests = t('Home.home_traits_interests', { returnObjects: true });
  const favourites = t('Home.home_traits_favourites', { returnObjects: true });

  return (
    <Page title={t('Home.title')} icon={home} alt="Home">
      <div className="home-container">

          <div className="facecard facecardleft">
            <div className="stats">
              <h3>{t('Home.home_stats_title')}:</h3>
              <h2><span>{t('Home.home_stats_name')}:</span><span>Erik</span></h2>
              <h2><span>{t('Home.home_stats_level')}:</span><span>43</span></h2>
              <h2>{t('Home.home_stats_progress')}:</h2>
              <progress className="progress" value="75" max="100" />
            </div>
            <div className="">
              <h3>{t('Home.home_goals_title')}</h3>
              {t('Home.home_goals')}
            </div>
          </div>

          <div className="eru">
            <img className="eruDark eruImg" src={eruDark} alt="" style={{ opacity: isDarkMode ? 1 : 0 }} />
            <img className="eruLight eruImg" src={eruLight} alt="" />
          </div>

          <div className="facecard facecardright">
            <h3>{t('Home.home_traits_personality_title')}:</h3>
            <div className="traits">
              {personality.map((trait, index) => (
                <div className="trait" key={index}>
                  {trait}
                </div>
              ))}
            </div>
            <h3>{t('Home.home_traits_hobbies_title')}:</h3>
            <div className="traits">
              {hobbies.map((entry, index) => (
                <div className="trait" key={index}>
                  {entry}
                </div>
              ))}
            </div>
            <h3>{t('Home.home_traits_interests_title')}:</h3>
            <div className="traits">
              {interests.map((entry, index) => (
                <div className="trait" key={index}>
                  {entry}
                </div>
              ))}
            </div>
            <h3>{t('Home.home_traits_favourites_title')}:</h3>
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
