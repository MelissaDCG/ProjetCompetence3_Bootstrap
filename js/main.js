//Control SideBar
$(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar #hamburguer').on('click', function() {
    fixHeight();
  });
  $('#hamburguer').on('click', function() {
    $('.mobileMenu').toggleClass('open');
  });
});




// add et remove class à menuIcones pour le bon deroulement du sidebar
function addEtRemoveClassMediaQ(){
  if (window.matchMedia('(max-width: 991px)').matches)
  {
    $('#menuIcones').removeClass('col-lg-3');
    // do functionality on screens smaller than 768px
  } else {
    $('#menuIcones').addClass('col-lg-3');
  };
};

addEtRemoveClassMediaQ();

$(window).resize(function(){
  addEtRemoveClassMediaQ();
});



//Formulaire
// Fonction de désactivation de l'affichage des "tooltips"
function deactivateTooltips() {
  let tooltips = document.querySelectorAll('.tooltip'),
      tooltipsLength = tooltips.length;

  for (let i = 0; i < tooltipsLength; i++) {
      tooltips[i].style.display = 'none';
  }
}

// La fonction ci-dessous permet de récupérer la "tooltip" qui correspond à notre input

function getTooltip(elements) {
  console.log("elements : "+elements);
  console.log("elements next : "+elements.nextSibling);
  while (elements = elements.nextSibling) {
    console.log("className   "+elements.className);
      if (elements.className === 'maTooltip') {
        console.log(elements.className === 'maTooltip');
          return elements;
      }
  }

  return false;
}

function verifMail(champ){
  let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/,
      tooltipStyle = getTooltip(champ).style;
  if(!regex.test(champ.value)) {
    champ.className += ' incorrect';
    tooltipStyle.display = 'inline-block';
    return false;
  } else {
      champ.className = 'form-control bgCouleurClaire inputFormulaire';
      tooltipStyle.display = 'none';
      return true;
  }
}

function verifMotdePasse(champ) {

  let tooltipStyle = getTooltip(champ).style;
  

  if (champ.value.length >= 6) {
      champ.className = 'form-control bgCouleurClaire inputFormulaire';
      tooltipStyle.display = 'none';
      return true;
  } else {
      champ.className += ' incorrect';
      tooltipStyle.display = 'inline-block';
      return false;
  }
}

function verifMotDePasseEgal(champ) {

  let pwd1 = document.getElementById('pass'),
      tooltipStyle = getTooltip(champ).style;

  if (pass.value == champ.value && champ.value != '') {
      champ.className = 'form-control bgCouleurClaire inputFormulaire';
      tooltipStyle.display = 'none';
      return true;
  } else {
      champ.className += ' incorrect';
      tooltipStyle.display = 'inline-block';
      return false;
  }

};

function verifPrenom(champ) {

  let tooltipStyle = getTooltip(champ).style;

  if (champ.value.length >= 2) {
      champ.className = 'form-control bgCouleurClaire inputFormulaire';
      tooltipStyle.display = 'none';
      return true;
  } else {
      champ.className += ' incorrect';
      tooltipStyle.display = 'inline-block';
      return false;
  }

};