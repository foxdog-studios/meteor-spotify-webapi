'use strict';

Package.describe({
  name: 'fds:spotify-webapi',
  summary: 'Spotify WebAPI',
  version: '0.0.1',
  git: 'git@github.com:foxdog-studios/meteor-spotify-webapi.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('coffeescript');
  api.use('http');
  api.use('reactive-var');
  api.use('underscore');
  api.use('mrt:uri-js@1.10.2');
  api.use('fds:coffeescript-share@1.0.0');
  api.addFiles('lib/spotify.coffee');
  api.addFiles('client/lib/web_api.coffee', 'client');
  api.export('Spotify');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fds:spotify-webapi');
  api.addFiles('tests.coffee');
});

