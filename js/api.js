var base_url = "https://api.football-data.org/v2/";
var endpoint_tim = `${base_url}teams/`
var fetchApi = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': '424b053ff9084369bd1fde534b9c85e1'
    }
  });
}

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}

// Blok kode untuk melakukan request data json
function getTeams() {
  if ("caches" in window) {
    caches.match(`${base_url}competitions/2021/teams`).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          KumpulanTeam(data)
          finishLoading()
        });
      }
    });
  }

  fetchApi(`${base_url}competitions/2021/teams`)
    .then(status)
    .then(json)
    .then(function (data) {


      KumpulanTeam(data)
      finishLoading()
    })
    .catch(error);
}

function getTeamById() {
  return new Promise(function (resolve, reject) {
    // Ambil nilai query parameter (?id=)
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    if ("caches" in window) {
      caches.match(base_url + "teams/" + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            DetailTeam(data);
            data.squad.forEach(function (pemain) {
              pemainTeam(pemain);
              finishLoading()
            });

            // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
            resolve(data);
          });
        }
      });
    }

    fetchApi(base_url + "teams/" + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        DetailTeam(data);
        data.squad.forEach(function (pemain) {

          pemainTeam(pemain);
          finishLoading()
        });
        // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
        resolve(data);
      });
  });
}



function getSavedTeams() {
  getAll().then(function (teams) {
    console.log(teams);
  
    var teamsHTML = "";
    teams.forEach(function (tim) {
      teamsHTML += `
         <style>
           .card-image {
             height: 200px;
             padding-top: 25px;
             padding-bottom: 25px;
            }
         </style>
           <div class="col s12 m3" >
                 <div class="card">
                   <a href="./tim.html?id=${tim.id}&favorit=true">
                     <div class="card-image waves-effect waves-block waves-light">
                   
                       <img style='height: 100%; width: 100%; object-fit: contain' class="responsive-img" src="${tim.crestUrl}" alt="logo ${tim.name}"/>
                      
                       
                     </div>
                   </a>
                   <div class="card-content">
                     <span class="card-title truncate">${tim.name}</span>
                   </div>
                 </div>
                 </div>
               `
        ;
        finishLoading()
    });
    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("teams").innerHTML = teamsHTML;
  });
}

function getSavedTeamById() {
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

  getById(parseInt(idParam)).then(function (data) {
    console.log(data);
    DetailTeam(data);
    data.squad.forEach(function (pemain) {
      pemainTeam(pemain);
      finishLoading()
    });


  });
}

// Ditambahkan agar loader terhenti dan menghilang ketika data selesai dimuat
function finishLoading() {
  const loading = document.getElementById('loading-container');
  loading.style.display = 'none';
};
 
// Dimodifikasi agar loader terhenti dan menampilkan pesan gagal ketika mengambil data
function error(error) {
  console.log('Error: ' + error);
 
  const loadFailed = `
    <p class="white-text center-align">
      Gagal memuat data. Periksa koneksi internet lalu coba lagi.
    </p>
  `;
 
  document.getElementById('progress-bar').className = 'determinate';
  document.getElementById('load-failed').innerHTML = loadFailed;
};



