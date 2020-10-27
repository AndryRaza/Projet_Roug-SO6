window.onload = function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY >= 1400) {
      window.addEventListener('scroll', move_trajets);
      window.addEventListener('scroll', chiffre(230, 1, "vehicules", anim_vehicules, 10));
      window.addEventListener('scroll', chiffre(33, 1, "employes", anim_employes, 60));
      window.addEventListener('scroll', chiffre(6, 1, "points_de_retrait", anim_pts, 350));
    }
  });


  var anim_trajets = false;
  var anim_vehicules = false;
  var anim_employes = false;
  var anim_pts = false;

  function move_trajets() {
    if (!anim_trajets) {
      var elem = document.getElementById("trajets");
      var i = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (i == 80000) {
          elem.innerHTML = "+ de " + i;
          anim_trajets = true;
          clearInterval(id);
        } else {
          i = i + 500;
          elem.innerHTML = "+ de " + i;
        }
      }
    }
  }



  function chiffre(max, interval, id, bool_, time) {
    if (!bool_) {
      var elem = document.getElementById(id)
      var i = 0;
      var id = setInterval(frame, time);
      function frame() {
        if (i == max) {
          elem.innerHTML = i;
          bool_ = true;
          clearInterval(id);
        } else {
          i = i + interval;
          elem.innerHTML = i;
        }
      }
    }
  }


}