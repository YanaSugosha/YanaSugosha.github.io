function KumpulanTeam(data) {

  var timHTML = "";
  data.teams.forEach(function (tim) {
    timHTML += `
 <style>
   .card-image {
     height: 200px;
     padding-top: 25px;
     padding-bottom: 25px;
    }
 </style>
   <div class="col s12 m3" >
         <div class="card">
           <a href="./tim.html?id=${tim.id}">
             <div class="card-image waves-effect waves-block waves-light">
           
               <img style='height: 100%; width: 100%; object-fit: contain' class="responsive-img" src="${tim.crestUrl}" alt="logo ${tim.name}" />
              
               
             </div>
           </a>
           <div class="card-content">
             <span class="card-title truncate">${tim.name}</span>
           </div>
         </div>
         </div>
       `


  }
  );


  // Sisipkan komponen card ke dalam elemen dengan id #content
  document.getElementById("teams").innerHTML = timHTML;
}