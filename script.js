window.onload = function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY >= 1400) {
      window.addEventListener('scroll', move_trajets);
      window.addEventListener('scroll', move_vehicules);
      window.addEventListener('scroll', move_employes);
      window.addEventListener('scroll', move_pts);
    }
  });


  anim_trajets = false;
  anim_vehicules = false;
  anim_employes = false;
  anim_pts = false;

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

  function move_vehicules() {
    if (!anim_vehicules) {
      var elem = document.getElementById("vehicules");
      var i = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (i == 230) {
          elem.innerHTML = i;
          anim_vehicules = true;
          clearInterval(id);
        } else {
          i = i + 1;
          elem.innerHTML = i;
        }
      }
    }
  }

  function move_employes() {
    if (!anim_employes) {
      var elem = document.getElementById("employes");
      var i = 0;
      var id = setInterval(frame, 60);
      function frame() {
        if (i == 33) {
          elem.innerHTML = i;
          anim_employes = true;
          clearInterval(id);
        } else {
          i = i + 1;
          elem.innerHTML = i;
        }
      }
    }
  }

  

  function move_pts() {
    if (!anim_pts) {
      var elem = document.getElementById("points_de_retrait");
      var i = 0;
      var id = setInterval(frame, 350);
      function frame() {
        if (i == 6) {
          elem.innerHTML = i;
          anim_pts = true;
          clearInterval(id);
        } else {
          i = i + 1;
          elem.innerHTML = i;
        }
      }
    }
  }
/*
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
*/

}