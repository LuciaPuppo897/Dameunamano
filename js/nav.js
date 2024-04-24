function openNav(){
    document.getElementById("mobile-menu").style.width ="50%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width ="0%";
}

function mostrarTexto(className) {
    var textos = document.querySelectorAll('.' + className);
    textos.forEach(function(texto) {
        if (texto.style.display === 'block') {
            texto.style.display = 'none';
        } else {
            texto.style.display = 'block';
        }
    });
}

var currentFeature = 1; 

function nextFeature() {

  currentFeature++;
  
  if (currentFeature > 3) {
    currentFeature = 1;
  }
  
  var imageSrc;
  var textContent;
  
  if (currentFeature === 1) {
    imageSrc = "imagenes/repjpg.jpg";
    textContent = "Permite a los usuarios buscar profesionales eligiendo un barrio específico.Al seleccionarlo, la aplicación muestra una lista de profesionales disponibles en ese barrio para el rubro seleccionado.Los usuarios pueden explorar los perfiles de los profesionales y obtener más información sobre ello";
  } else if (currentFeature === 2) {
    imageSrc = "imagenes/red.jpg";
    textContent = "Permite a los usuarios buscar profesionales en función de su ubicación actual una vez seleccionado el rubro.La aplicación pide los permisos de ubicación al usuario, muestra su dirección actual en un mapa y texto, permitiéndole obtener una lista de profesionales. ";
  } else if (currentFeature === 3) {
    imageSrc = "imagenes/folklorepg.jpg";
    textContent = "Después de recibir servicios de un profesional, los usuarios pueden calificarlo basándose en su experiencia con ellos."
    ;
  }
  
  document.querySelector('.image-column img').src = imageSrc;
  document.querySelector('.text-column h3').textContent = "Feature " + currentFeature;
  document.querySelector('.text-column p').textContent = textContent;
}

