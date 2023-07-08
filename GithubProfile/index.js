const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const searchBox = document.getElementById("search");

const getRepos = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(APIURL + username + "/repos");
  const data = await response.json();
  data.forEach((item) => {
    console.log(item);
    const elem = document.createElement("a");
    elem.classList.add("repo");
    elem.href = item.html_url;
    elem.innerHTML = item.name;
    elem.target = "_blank";
    repos.appendChild(elem);
  });
};

const getUser = async (username) => {
  try {
    const response = await fetch(APIURL + username);
    const data = await response.json();

    const card = `<div class="card">
        <div>
          <img
            src="${data.avatar_url}"
            alt="Florin Pop"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${data.name}</h2>
          <p>${data.bio}</p>

          <ul class="info">
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
          </ul>

          <div id="repos">
           
          </div>
        </div>
      </div>`;
    main.innerHTML = card;
    getRepos(username);
  } catch (error) {
    main.innerHTML = "<h1>Enter a valid username.</h1>";
  }
};

const formSubmit = () => {
  if (searchBox.value != "") {
    getUser(searchBox.value);
  }
  return false;
};

searchBox.addEventListener("focusout", () => {
  formSubmit();
});

// getUser("tejaswabedi");
