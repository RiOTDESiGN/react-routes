import { Page } from './Page'

import home from '../assets/images/home_icon.webp'

export function Home({ t }) {
  return (
    <Page title={t('Home.title')} icon={home} alt="Home">
      <h3>{t('Home.home_title_1')}</h3>
      <p>{t('Home.home_content_1')}</p>
    </Page>
  );
}