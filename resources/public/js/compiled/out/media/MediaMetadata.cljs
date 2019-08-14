(ns media.MediaMetadata
  "The MediaMetadata interface of the the Media Session API provides
  a web page to provide rich media metadata for display in a platform"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaMetadata() constructor creates a new `media.MediaMetadata` object.

  metadata Optional


  \\tThe metadata parameters are as follows:


  \\t\\ttitle: The title of the media to be played.
  \\t\\tartist: The name of the artist, group, creator, etc. of the media to be played.
  \\t\\talbum: The name of the album, or collection, containing the media to be played.
  \\t\\tartwork: An array of images associated with the playing media.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata`"
  js/MediaMetadata)

(defn album
  "Property.

  The album property of the `media.MediaMetaData` interface returns
  sets the name of the album or collection containing the media
  be played.

  `var album = mediaMetaData.album
  mediaMetaData.album = album`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/album`"
  [this]
  (-> this (.album)))

(defn set-album!
  "Property.

  The album property of the `media.MediaMetaData` interface returns
  sets the name of the album or collection containing the media
  be played.

  `var album = mediaMetaData.album
  mediaMetaData.album = album`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/album`"
  [this val]
  (aset this "album" val))

(defn artist
  "Property.

  The artist property of the `media.MediaMetaData` interface returns
  sets the name of the artist, group, creator, etc., of the media
  be played.

  `var artist = mediaMetadata.artist
  mediaMetadata.artist = artist`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/artist`"
  [this]
  (-> this (.artist)))

(defn set-artist!
  "Property.

  The artist property of the `media.MediaMetaData` interface returns
  sets the name of the artist, group, creator, etc., of the media
  be played.

  `var artist = mediaMetadata.artist
  mediaMetadata.artist = artist`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/artist`"
  [this val]
  (aset this "artist" val))

(defn artwork
  "Property.

  The artwork property of the `media.MediaMetaData` interface returns
  sets an array of images associated with playing media.

  `var artwork[] = mediaMetadata.artwork
  mediaMetadata.artwork = artwork[]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/artwork`"
  [this]
  (-> this (.artwork)))

(defn set-artwork!
  "Property.

  The artwork property of the `media.MediaMetaData` interface returns
  sets an array of images associated with playing media.

  `var artwork[] = mediaMetadata.artwork
  mediaMetadata.artwork = artwork[]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/artwork`"
  [this val]
  (aset this "artwork" val))

(defn media-metadata
  "Property.

  The MediaMetadata() constructor creates a new `media.MediaMetadata`

  `var mediaMetadata = new MediaMetadata([metadata])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata`"
  [this]
  (-> this (.MediaMetadata)))

(defn set-media-metadata!
  "Property.

  The MediaMetadata() constructor creates a new `media.MediaMetadata`

  `var mediaMetadata = new MediaMetadata([metadata])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata`"
  [this val]
  (aset this "MediaMetadata" val))

(defn title
  "Property.

  The title property of the `media.MediaMetaData` interface returns
  sets the title of the media to be played.

  `var title = mediaMetaData.title
  mediaMetaData.title = title`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/title`"
  [this]
  (-> this (.title)))

(defn set-title!
  "Property.

  The title property of the `media.MediaMetaData` interface returns
  sets the title of the media to be played.

  `var title = mediaMetaData.title
  mediaMetaData.title = title`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/title`"
  [this val]
  (aset this "title" val))

