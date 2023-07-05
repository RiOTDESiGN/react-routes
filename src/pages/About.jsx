import { Badges } from './Badges';
import { Page } from './Page';

export function About() {
  return (
    <Page title="About" icon="./src/assets/images/about_icon.webp">
      <h3>WHO am I //</h3>
      <p>
        My name is Erik, and I am a curious and determined man currently learning front-end development through KodeHode.
        I enjoy working in the IT field and find design and functionality fascinating. Privately, I am a so-called Jack
        of All Trades and I engage in various activities such as music production, photography, gaming, dog care, and
        mechanical work on cars, among others.
      </p>
      <br />
      <h3>WHAT can I do //</h3>
      <p>
        I have knowledge across multiple fields, but primarily, I have worked extensively with HTML, CSS, Photoshop, and
        web design. I have also worked with Wordpress to a considerable extent.
      </p>
      <br />
      <h3>WHERE do I want to go //</h3>
      <p>
        In the future, I envision myself working with design and functionality in the context of website or application
        development. I also aim to enhance my back-end skills with the intention of becoming a full-stack developer.
      </p>
      <br />
      <Badges />
    </Page>
  );
}
