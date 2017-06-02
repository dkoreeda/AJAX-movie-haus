$(document).ready(function(){
console.log('hi');

  let movie = function(movieTitle) {
    let url = 'http://www.omdbapi.com/?t=' + movieTitle + '&r=json';
    console.log(url);

    return url;
  }

  const getData = function(movieTitle){
      $.ajax({
          method: 'GET',
          url: movie(movieTitle),
          dataType: 'json',
          success: function(data) {
            console.log(data);
            if(data.Response === "True") {
              handleResponse(data);
            }
          },
          error: function(error) {
            console.log(error);
          }
      });
  };

  const addAJAXFunction = function(){
      $('button').click(function(){
          const movie = $('input').val();
          getData(movie);
      });
  };
  addAJAXFunction();

  const appendMovie = function(name,imagePath){
    const newDiv = $('<div>');
    newDiv.addClass('four columns');
    const heading = $('<h5>');
    heading.text(name);
    const img = $('<img>');
    img.attr('src', imagePath);
    $('#movies').append(newDiv);
    newDiv.append(heading);
    newDiv.append(img);
  };

  const handleResponse = function(data){
    const movieTitle = data.Title;
    const movieImg = data.Poster;
    appendMovie(movieTitle, movieImg);
  };

}); // ends doc.ready
