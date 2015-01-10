'use strict';

Package.describe({
  name: 'fds:spotify-webapi',
  summary: 'Spotify WebAPI ',
  version: '0.0.0',
  git: 'git@github.com:foxdog-studios/meteor-spotify-webapi.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('coffeescript');
  api.use('fds:coffeescript-share@1.0.0');
  api.addFiles([
      'lib/spotify.coffee',
      'lib/web_api.coffee',
  ]);
  api.export('Spotify');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fds:spotify-webapi');
  api.addFiles('tests.coffee');
});

