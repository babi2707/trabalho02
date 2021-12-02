function loadProfileInicial() {
  //------------------------ perfil ------------------------
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var data = JSON.parse(this.responseText);

    if (data.followers_url == null) {
      data.followers_url = "nenhum seguidor";
    }

    if (data.name == null) {
      data.name = "sem nome definido";
    }

    if (data.login == null) {
      data.login = "sem login definido";
    }

    if (data.bio == null) {
      data.bio = "sem bio definida";
    }

    let newProfile = `<div class="container" id="profile">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Perfil</h4>
    </div>
    </div>
    <div class="row">
    <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <a target="_blank" href="${data.html_url}" style="text-decoration: none;"><img
    class="info-img"
    src="${data.avatar_url}"
    alt="image cap"
  /></a>
    </div>
    <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
    <div class="infos">
      <h5 class="info-title"> <strong><a target="_blank" href="${data.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Profile name: </a> </strong>  ${data.name}</h5>
      <p><strong><a target="_blank" href="${data.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Username: </a> </strong> ${data.login} </p>
      <p class="info-text"><strong><a target="_blank" href="${data.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Bio: </a> </strong> 
      ${data.bio}
      </p>
      <p class="info-text"> <strong><a target="_blank" href="${data.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Seguidores: </a> </strong> 
      ${data.followers} <strong class="espaco"><a target="_blank" href="${data.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Seguindo: </a> </strong>
      ${data.following}
      </p>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
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
  repositoriosB();
  //---------------------------------------------------------
}

function loadPesquisa() {
  //------------------------ perfil ------------------------
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var dataP = JSON.parse(this.responseText);

    if (dataP.name == null) {
      dataP.name = "sem nome definido";
    }

    if (dataP.login == null) {
      dataP.login = "sem login definido";
    }

    if (dataP.bio == null) {
      dataP.bio = "sem bio definida";
    }
    
    let newProfile = `<div class="container" id="profile">
    <div class="container">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Perfil</h4>
    </div>
    </div>
    <div class="row">
    <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <a target="_blank" href="${dataP.html_url}" style="text-decoration: none;"><img
    class="info-img"
    src="${dataP.avatar_url}"
    alt="image cap"
  /></a>
    </div>
    <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
    <div class="infos">
      <h5 class="info-title"> <strong><a target="_blank" href="${dataP.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Profile name: </a> </strong>  ${dataP.name}</h5>
      <p class="info-text"><strong><a target="_blank" href="${dataP.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Username: </a> </strong> ${dataP.login} </p>
      <p class="info-text"><strong><a target="_blank" href="${dataP.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Bio: </a> </strong> 
      ${dataP.bio}
      </p>
      <p class="info-text"> <strong><a target="_blank" href="${dataP.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Seguidores: </a> </strong> 
      ${dataP.followers} <strong class="espaco"><a target="_blank" href="${dataP.html_url}" style="text-decoration: none; color: rgb(39, 39, 39);"> Seguindo: </a> </strong>
      ${dataP.following}
      </p>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${dataP.html_url}"
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

  //--------------------------------------------------------

  //---------------------- repositorio ----------------------
  repositoriosP();
}

function repositoriosB() {
  let xhr2 = new XMLHttpRequest();

  xhr2.onload = function () {
    var data2 = JSON.parse(this.responseText);

    let Repository = `<div class="container" id="reposit">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Repositórios</h4>
    </div>
    </div>`;

    for (let i = 0; i < data2.length; i++) {
      let coloca = data2[i];

      let date = new Date(coloca.created_at);

      if (coloca.language == null) {
        coloca.language = "sem linguagem definida";
      }

      if (coloca.description == null) {
        coloca.description = "sem descrição definida";
      }

      if (coloca.has_pages == false) {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>
        </div>`;
        }
      } else {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="https://${coloca.owner.login}.github.io/${coloca.name}/"
        >Link página</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="https://${coloca.owner.login}.github.io/${coloca.name}/"
        >Link página</a
      ></button>
        </div>
        </div>`;
        }
      }
    }

    Repository += `</div>`;

    document.getElementById("repositorios").innerHTML = Repository;
  };

  xhr2.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr2.open("GET", "https://api.github.com/users/babi2707/repos");
  xhr2.send();
}

function repositoriosP() {
  let xhr2 = new XMLHttpRequest();

  xhr2.onload = function () {
    var data2 = JSON.parse(this.responseText);

    let Repository = `<div class="container" id="reposit">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Repositórios</h4>
    </div>
    </div>`;

    for (let i = 0; i < data2.length; i++) {
      let coloca = data2[i];

      let date = new Date(coloca.created_at);

      if (coloca.language == null) {
        coloca.language = "sem linguagem definida";
      }

      if (coloca.description == null) {
        coloca.description = "sem descrição definida";
      }

      if (coloca.has_pages == false) {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>
        </div>`;
        }
      } else {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="https://${coloca.owner.login}.github.io/${coloca.name}/"
        >Link página</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5><strong> Repositório: </strong> ${coloca.name}</h5>
        <p><strong> Linguagem: </strong> ${coloca.language}</p>
        <p><strong> Descrição: </strong> ${coloca.description} </p>
        <p><strong> Visibilidade: </strong> ${coloca.visibility} </p>
        <p><strong> Data criação (m/d/a): </strong> ${date.toLocaleString(
          "en"
        )} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
      <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="https://${coloca.owner.login}.github.io/${coloca.name}/"
        >Link página</a
      ></button>
        </div>
        </div>`;
        }
      }
    }

    Repository += `</div>`;

    document.getElementById("repositorios").innerHTML = Repository;
  };

  xhr2.onerror = function () {
    alert(`Erro na requisição. \nCódigo: ${this.status} - ${this.statusText}`);
  };
  xhr2.open("GET", `https://api.github.com/users/${inserir.value}/repos`);
  xhr2.send();
}

onload = () => {
  loadProfileInicial();

  pesquisa.onsubmit = (evento) => {
    evento.preventDefault();
    if (inserir.value.length > 0) {
      loadPesquisa();
      inserir.style.border = "thin gray solid";
    } else {
      loadProfileInicial();
      inserir.style.border = "thin red solid";
    }
  };
};
