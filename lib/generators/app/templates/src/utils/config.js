module.exports = {
  siteName: 'LD Umi',
  copyright: 'LD Umi  © 2019 zuiidea',
  logoPath: '/logo.svg',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exlude: [/login/],
    },
  ]
};
