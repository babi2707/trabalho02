function loadProfileInicial() {
  //------------------------ perfil ------------------------
  let xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var data = JSON.parse(this.responseText);

    let newProfile = `<div class="container" id="profile">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Perfil</h4>
    </div>
    </div>
    <div class="row">
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

    let newProfile = `<div class="container" id="profile">
    <div class="container">
    <div class="row ms-auto">
    <div class="col-4">
    <h4>Perfil</h4>
    </div>
    </div>
    <div class="row">
    <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <img
      class="info-img"
      src="${dataP.avatar_url}"
      alt="image cap"
    />
    </div>
    <div class="col-12 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12">
    <div class="infos">
      <h5 class="info-title"> <strong> Profile: </strong>  ${dataP.name}</h5>
      <p><strong> Username: </strong> ${dataP.login} </p>
      <p class="info-text"><strong> Bio: </strong> 
      ${dataP.bio}
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

      if (coloca.has_pages == false) {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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

      if (coloca.has_pages == false) {
        if (i % 2 == 0) {
          Repository += `
        <div class="row repos">
        <div class="r1 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
        <button id="perfilBotao" class="btn bg- bg-gradient"><a style="text-decoration: none; color: white;"
        target="_blank"
        href="${coloca.html_url}"
        >Link</a
      ></button>
        </div>`;
        } else {
          Repository += `
        <div class="r2 col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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
        <h5>Repositório: ${coloca.name}</h5>
        <p>Linguagem: ${coloca.language}</p>
        <p>Descrição: ${coloca.description} </p>
        <p>Visibilidade: ${coloca.visibility} </p>
        <p>Data criação (m/d/a): ${date.toLocaleString('en')} </p>
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

function pesqRepB (){
  
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
