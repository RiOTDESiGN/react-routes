import { Page } from './Page'

export function Projects({ t }) {
  return (
    <Page title={t('Projects.title')} icon="./src/assets/images/projects_icon.webp">
      <h3>{t('Projects.projects_title_1')}</h3>
      <p>{t('Projects.projects_content_1')}</p>
    </Page>
  );
}