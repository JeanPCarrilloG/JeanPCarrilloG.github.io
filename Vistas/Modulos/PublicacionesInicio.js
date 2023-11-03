function PublicacionInicio(titulo, imagen, introduccion, url_publicacion) {
  
  var titulo = document.getElementsByName("titulo")[0].value;
  var imagen = document.getElementsByName("imagen")[0].value;
  var introduccion = document.getElementsByName("introduccion")[0].value;
  var url_publicacion = document.getElementsByName("url_publicacion")[0].value;

  document.getElementById("PublicacionInicio").innerHTML =
  `<div class="card mb-3 border border-dark border-3">
  <div class="px-3 py-2 border-bottom border-dark border-5 color2 letraF">
    <b class="text-capitalize">${titulo}</b>
  </div>
  <div class="card-body">

    <div class="container px-4">
      <img src="${imagen}" class="img-fluid">
    </div>

    <p class="card-text">${introduccion}</p>
    <a href="${url_publicacion}"
      class="btn color1 border-dark border-3 letraF btn-outline focus-ring focus-ring-dark">Leer
      Publicación</a>
  </div>
  </div>`;
  
}
