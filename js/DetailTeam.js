function DetailTeam(data) {

  // Menyusun komponen card artikel secara dinamis
  var timHTML = `
  <style>
  
  .card-image {
    height: 200px;
    padding-top: 25px;
    padding-bottom: 25px;
   }
</style>


   <div class="card">
     <div class="card-image waves-effect waves-block waves-light">
       <img style='height: 100%; width: 100%; object-fit: contain' src="${data.crestUrl}" alt="logo ${data.name}" />
     </div>
     <div class="card-content">

     <div class="row">
       <span class="card-title center-align"><b>${data.name}</b></span>
       </div>
     
       </div>
    
       
     </div>
   </div>
   
  


  
 `;
  // Sisipkan komponen card ke dalam elemen dengan id #content
  document.getElementById("Profil-Team").innerHTML = timHTML;
};
var timHTML = ``
function pemainTeam(data) {

  // Menyusun komponen card artikel secara dinamis

  timHTML += `
  <tr>
                <td>${data.name}</td>
                <td>${data.position}</td>
                <td>${data.nationality}</td>
              </tr>
  
 `;
  var tableSquadHTML = ``;
  tableSquadHTML += `
  <h1 class="center-align" style="color: #415A7E;">List Pemain</h1>
 <table class="striped" >
     <thead>
         <tr>
             <td class="a-font-bold">Nama</td>
             <td class="a-font-bold">Posisi</td>
             <td class="a-font-bold">Negara</td>
         </tr>
     </thead>
     <tbody> ${timHTML}  </tbody>
 </table>`
  // Sisipkan komponen card ke dalam elemen dengan id #content
  document.getElementById("tabel-player").innerHTML = tableSquadHTML;
};


