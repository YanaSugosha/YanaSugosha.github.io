var dbPromised = idb.open("Mysport", 1, function (upgradeDb) {
  var teamsObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("team_name", "team_name", { unique: false });
});

function saveForLater(team) {
  dbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.put(team);
      return tx.complete;
    })
    .then(function () {
      console.log("Team Masuk ke list favorit.");
    });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}

function getById(id) {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.get(parseInt(id));
      })
      .then(function (team) {
        resolve(team);
      });
  });
}

function deleteDatafav(data) {
  dbPromised.then(function (db) {
    var tx = db.transaction("teams", 'readwrite');
    var store = tx.objectStore("teams");
    store.delete(parseInt(data));
    return tx.complete;
  }).then(function () {
    console.log('Item deleted');
    document.getElementById("save").innerHTML = `<i class="large material-icons">save</i>`;

  }).catch(function () {
    console.log('Terjadi Kesalahan');
  });
}