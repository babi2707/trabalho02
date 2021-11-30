function loadProfile() {
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    // alert("Retorno da requisição: \n" + this.responseText);

    var data = JSON.parse(this.responseText);

    let newProfile = `<div class="card" style="width: 18rem">
    <img
      class="card-img-top"
      src="${data.avatar_url}"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Profile: ${data.name}</h5>
      <p>Username: ${data.login} </p>
      <p class="card-text">Bio:
      ${data.bio}
      </p>
      <button id="perfilBotao" class="btn btn-danger"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${data.html_url}"
        >Github profile</a
      ></button>
    </div>
  </div>`;

  document.getElementById("tela").innerHTML = newProfile;
  };

  xhr.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr.open("Get", "https://api.github.com/users/babi2707");
  xhr.send();
}

onload = () => {
  loadProfile();
};
