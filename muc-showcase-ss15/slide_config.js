var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Open Data Showcase',
    subtitle: 'Sensors in Context-Aware Applications',
    eventInfo: {
      title: 'Mobile &amp; Ubiquitous Computing',
      date: 'June 2015'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/uulm.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['default', 'uulm-changes'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Falco Nogatz',
    company: 'Datalove University Group @ uulm',
    mail: 'datalove@uni-ulm.de',
    twitter: '@ulmapi',
    www: 'http://ulmapi.de',
    github: 'http://github.com/ulmapi'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};

