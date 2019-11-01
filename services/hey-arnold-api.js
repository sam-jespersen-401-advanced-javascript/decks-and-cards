
function getCharacters(num) {


  const url = `https://hey-arnold-api.herokuapp.com/api/v1/characters/random?count=${num}`;

  return fetch(url).then(response => response.json())
    .then(response => {
      return response;
    });
}

function getGifs(num) {

  const url = `https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?count=${num}`;

  return fetch(url).then(response => response.json())
    .then(response => {
      return response;
    });
}

export { getGifs, getCharacters };
