fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    var joke = data.value;
    //var icon = data.icon_url;
    console.log(joke);
    //console.log(icon);

  })
  .catch();