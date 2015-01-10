'use strict'

class Spotify.WebAPI
  ALBUM: 'album'
  ARTIST: 'artist'
  PLAYLIST: 'playlist'
  TRACK: 'track'

  constructor: ->
    @rootUrl = 'https://api.spotify.com'
    @version = 'v1'

  searchAlbum: (query) =>
    @search @ALBUM, query

  search: (query, options = {}) =>
    _.defaults options, types: [
      @ALBUM
      @ARTIST
      @PLAYLIST
      @TRACK
    ]

    unless _.isArray options.types
      options.types = [options.types]

    uri = new URI @rootUrl
    uri.segment @version
    uri.segment 'search'
    uri.query q: query, type: options.types.join ','

    future = new Future
    HTTP.get uri.toString(), future.onResponse
    future


class Future
  constructor: ->
    @_isDone = ReactiveVar false
    @_error = ReactiveVar()
    @_result = ReactiveVar()

  onResponse: (error, result) =>
    @_isDone.set true
    @_error.set error
    @_result.set result

  isDone: =>
    @_isDone.get()

  getError: =>
    @_error.get()

  getResult: =>
    @_result.get()

