const config = require('../config');
const baseUrl = config.apiUrl;
const apiKey = config.apiKey;

let albumData = [];

const getAlbums = async (req, res) => {
  if (albumData.length < 1) {
    const response = await fetch(`${baseUrl}collections?page=2&per_page=100`, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`
      }
    });
    albumData = await response.json();
    albumData = albumData.map(({id, title, user}) => ({id, title, userId: user.id})); 
  } else {
    albumData = albumData;
  }

  res.json(albumData);
}

const getAlbumById = async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`${baseUrl}collections/${id}`, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`
      }
    });
  const responseJson = await response.json();
  res.json({
    id: responseJson.id,
    title: responseJson.title,
    userId: responseJson.user.id,
    username: responseJson.user.username
  });
}

const getPhotos = async (req, res) => {
  const id = req.params.id;
  let response = await fetch(`${baseUrl}collections/${id}/photos`, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`
      }
    });
  let responseJson = await response.json();

  if (responseJson.length < 1) {
    response = await fetch(`${baseUrl}collections/${id}`, {
        headers: {
          'Authorization': `Client-ID ${apiKey}`
        }
      }).then(data => data.json());
    responseJson = response.preview_photos;
  }

  res.json(responseJson.map(({id, alt_description, urls}) => (
    {id, title: alt_description, url: urls.regular, thumbnailUrl: urls.thumb}
  )));
}

const deleteAlbum = async (req, res) => {
  const id = req.params.id;
  albumData = albumData.filter(album => album.id !== id);
  res.status(200).json({message:'Removed succeffully'});
}

const patchAlbum = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;

  albumData.at(albumData.findIndex(album => album.id === id)).title =title;
  res.status(200).json({message: 'Changed title succeffully'});

}

module.exports = {
  getAlbums, getAlbumById, getPhotos, deleteAlbum, patchAlbum 
}
