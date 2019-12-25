/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'D3b Technical Handbook',
  tagline: 'Breakthroughs for every child, every time, everywhere',
  url: 'https://handbook.d3b.io/',
  baseUrl: '/',
  description: `
  This handbook is intended as a reference manual for teams within The Center
  for Data-Driven Discovery in Biomedicine and others who wish to understand
  how we operate or to contribute to one of the many initiatives that 
  The Center is responsible for.
  Things you will find in the handbook:
  - Technical teams, their values, organization, and responsibilies in The Center
  - Technical projects on-going in The Center
  - Processes for development and organization
  - Standards and best practices used by the technical teams
  `,

  // Used for publishing and more
  projectName: 'handbook',
  organizationName: 'The Center for Data-Driven Discovery in Biomedicine',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'units/adapt/about', label: 'Units'},
    {doc: 'development/feature-lifecycle', label: 'Development'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/d3b-cube.svg',
  footerIcon: 'img/d3b-cube.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#000',
    secondaryColor: '#f3f3f3',
    brandColor: '#005788',
    brandBlue: '#41b6e6',
  },

  /* Custom fonts for website */
  fonts: {
    rubrik: [
      'Rubrik',
      'Arial',
      'Rounded MT',
      'Bold',
      'Helvetica Rounded',
      'Arial',
      'sans-serif',
    ],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} The Center for Data-Driven Discovery in Biomedicine`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
