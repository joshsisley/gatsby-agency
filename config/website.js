const meta = {
  // Metadata
  siteTitle: 'Joshua Sisley - Full Stack Developer',
  siteDescription: 'Joshua Sisley - I build Full Stack SaaS Applications for early to mid stage Startups with a focus on stability and scalability.',
  siteTitleAlt: 'Joshua Sisley',
  siteShortName: 'Joshua Sisley',
  siteUrl: 'http://joshuasisley.com', // No trailing slash!
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@joshsisley',
}

const website = {
  ...meta,
  ...social,
  disqusShortName: 'joshsisley',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website