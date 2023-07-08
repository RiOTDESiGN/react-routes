import { Page } from './Page'

export function Home({ t }) {
  return (
    <Page title={t('Home.title')} icon="./src/assets/images/home_icon.webp" alt="Home">
      <h3>{t('Home.home_title_1')}</h3>
      <p>{t('Home.home_content_1')}</p>
    </Page>
  );
}