function giphySearch(query, callback) {
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&q=" +
    query;
  console.log("url=" + url);
  //
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      callback(response.data);
    });
}
