import { Badges } from './Badges';
import { Page } from './Page';

export function About({ t }) {
  return (
    <Page title={t('About.title')} icon="/assets/images/about_icon.webp" alt="About">
        <h3>{t('About.about_title_1')}</h3>
        <p>{t('About.about_content_1')}</p>
        <br />
        <h3>{t('About.about_title_2')}</h3>
        <p>{t('About.about_content_2')}</p>
        <br />
        <h3>{t('About.about_title_3')}</h3>
        <p>{t('About.about_content_3')}</p>
        <br />
      <Badges />
    </Page>
  );
}
