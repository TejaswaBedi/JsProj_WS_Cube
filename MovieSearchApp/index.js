const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector("#movie-box");
const searching = document.getElementById("search");
const showMovies = (data) => {
  movieBox.innerHTML = "";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
              <img src="${
                item.poster_path
                  ? IMGPATH + item.poster_path
                  : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
              }" alt="" https://picsum.photos/200/300/>
          <div class="overlay">
            <div class="title">
              <h2>${item.original_title}</h2>
              <span>${item.vote_average}</span>
            </div>
            <h3>Overview</h3>
            <p>
              ${item.overview}
            </p>
          </div>
    `;
    movieBox.appendChild(box);
  });
};

const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  showMovies(data.results);
};

searching.addEventListener("keyup", (event) => {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});
getMovies(APIURL);
