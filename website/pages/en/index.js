/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h3 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h3>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/d3b-inline-white.svg`} />
        <div className="taglineBox">
          <h2>
            The Center for Data-Driven Discovery in Biomedicine Technical
            Handbook
          </h2>
          <h4>
            <em>{siteConfig.tagline}</em>
          </h4>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={props.padding || []}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <Block id="about" align="left" padding={['top']}>

        {[
          {
            content: siteConfig.description,
            image: `${baseUrl}img/undraw_personal_notebook.svg`,
            imageAlign: 'left',
            title: 'About',
          },
        ]}
      </Block>
    );

    const DevelopmentPractices = () => (
      <Block id="practices" padding={['top', 'bottom']}>
        {[
          {
            content: `Best practices adhered to by technical teams in The Center:
            <ul>
              <li>
                <a href="/docs/development/feature-lifecycle" className="button">
                  Features
                </a>
              </li>
              <li>
                <a href="/docs/development/pr-guide" className="button">
                Pull Requests
                </a>
              </li>
            </ul>`,

            image: `${baseUrl}img/undraw_version_control.svg`,
            imageAlign: 'left',
            title: 'Development Practices',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content: 'Technical Teams',
            image: `${baseUrl}img/undraw_team.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const TechnicalTeams = () => (
      <Block background="light" padding={['top', 'bottom']}>
        {[
          {
            content: `<p>The Center is divided into several units, some of which have technical aspects. Read more about each unit and its responsibilities and organization:<p>
              <ul>
                <li>
                  <a href="/docs/units/adapt/about" className="button">ADAPT Unit</a>
                </li>
                <li>
                  <a href="/docs/units/bixu/about" className="button">BIX Unit</a>
                </li>
            </ul>
            `,
            image: `${baseUrl}img/undraw_team.svg`,
            imageAlign: 'right',
            title: 'Technical Units',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="twoColumn" padding={['bottom']}>
        {[
          {
            title: 'Projects',
            content: `<p>D3b undertakes many projects to work towards its mission. Technical teams work fully or in part on completing these projects.</p>
            <a href="docs/projects/about-projects">An Overview of Projects</a>`,
          },
          {
            title: 'Products',
            content: `<p>Technical teams work to create products to assist in achieving requirements of D3b projects.
            Often, these products are combined and said to create <em>platforms</em>.</p>
            <a href="docs/projects/about-projects">An Overview of Products</a>`,
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <TechnicalTeams />
          <DevelopmentPractices />
        </div>
      </div>
    );
  }
}

module.exports = Index;
