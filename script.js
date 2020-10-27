window.onload = function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY >= (document.getElementById('chiffre').offsetTop-(document.getElementById('tarif').offsetHeight))) {
      window.addEventListener('scroll', move_trajets);
      window.addEventListener('scroll', move_vehicules);
      window.addEventListener('scroll', move_employes);
      window.addEventListener('scroll', move_pts);
    }
  });

  window.addEventListener('scroll', function () {

    if (window.scrollY >= (document.getElementById('tarif').offsetTop-(document.getElementById('about').offsetHeight/2))) {
      window.addEventListener('scroll', fun_anim_flip())
    }
  });

  window.addEventListener('scroll', function () {

    if (window.scrollY >= (document.getElementById('chiffre').offsetTop + 50) ){
      window.addEventListener('scroll', fun_anim_texte())
    }
  });

  window.addEventListener('scroll', function () {

    if (window.scrollY >= (document.getElementById('ou-nous-trouver').offsetTop + 200) ){
      window.addEventListener('scroll', fun_anim_form())
    }
  });

  var anim_trajets = false;
  var anim_vehicules = false;
  var anim_employes = false;
  var anim_pts = false;
  var anim_flip = false;
  var anim_text = false;
  var anim_form = false;

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

  function fun_anim_flip() {
    var els = document.getElementsByClassName('vignette');
    if (!anim_flip){
      for(i=0; i < els.length ; i++){
        els[i].className += " flip-vertical-right ";
      }
      anim_flip=true;
    }
  }

  function fun_anim_texte(){
    var els = document.getElementById('ou-nous-trouver');
    if (!anim_text){
      els.classList.add('tracking-in-expand-fwd')
      anim_text=true;
    }
  }

  function fun_anim_form(){
    var els = document.getElementById('contact');
    if (!anim_form){
      els.classList.add('slide-in-bottom')
      anim_form=true;
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