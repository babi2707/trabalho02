function loadProfileInicial() {
  //------------------------ perfil ------------------------
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var data = JSON.parse(this.responseText);

    let newProfile = `<div class="container">
    <div class="row" id="profile">
    <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <img
      class="info-img"
      src="${data.avatar_url}"
      alt="image cap"
    />
    </div>
    <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
    <div class="infos">
      <h5 class="info-title"> <strong> Profile: </strong>  ${data.name}</h5>
      <p><strong> Username: </strong> ${data.login} </p>
      <p class="info-text"><strong> Bio: </strong> 
      ${data.bio}
      </p>
      <button id="perfilBotao" class="btn btn-danger"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${data.html_url}"
        >Github profile</a
      ></button>
  </div>
    </div>
    </div>
    </div>`;

    document.getElementById("perfil").innerHTML = newProfile;
  };

  xhr.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr.open("Get", "https://api.github.com/users/babi2707");
  xhr.send();

  //--------------------------------------------------------

  //---------------------- repositorio ----------------------

  let xhr2 = new XMLHttpRequest();

  xhr2.onload = function () {
    var data2 = JSON.parse(this.responseText);

    let Repository = ``;

    for (let i = 0; i < data2.length; i++) {
      let coloca = data2[i];
      Repository += `<div class="container">
        <div class="row">
        <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Visibilidade:${coloca.visibility} </p>
        <button id="perfilBotao" class="btn btn-danger"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.url}"
        >Link</a
      ></button>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("repositorios").innerHTML = Repository;
  };

  xhr2.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr2.open("GET", "https://api.github.com/users/babi2707/repos");
  xhr2.send();

  //---------------------------------------------------------
}

function loadPesquisa() {
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var data = JSON.parse(this.responseText);

    let newProfile = `<div class="container">
    <div class="row" id="profile">
    <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <img
      class="info-img"
      src="${data.avatar_url}"
      alt="image cap"
    />
    </div>
    <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
    <div class="infos">
      <h5 class="info-title"> <strong> Profile: </strong>  ${data.name}</h5>
      <p><strong> Username: </strong> ${data.login} </p>
      <p class="info-text"><strong> Bio: </strong> 
      ${data.bio}
      </p>
      <button id="perfilBotao" class="btn btn-danger"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${data.html_url}"
        >Github profile</a
      ></button>
  </div>
    </div>
    </div>
    </div>`;

    document.getElementById("perfil").innerHTML = newProfile;
  };

  xhr.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr.open("Get", `https://api.github.com/users/${inserir.value}`);
  xhr.send();
}

onload = () => {
  loadProfileInicial();

  pesquisa.onclick = () => {
    if (inserir.value.length > 0) {
      loadPesquisa();
      inserir.style.border = "thin gray solid";
    } else {
      loadProfileInicial();
      inserir.style.border = "thin red solid";
    }
  };
};
