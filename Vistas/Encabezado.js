function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'es' },
    'google_translate_element'
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = encodeURIComponent(window.location.href.split("?")[0].split("#")[0]);

  const fbBtn = document.getElementById("btn-facebook");
  if (fbBtn) {
    fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  }

  const xBtn = document.getElementById("btn-x");
  if (xBtn) {
    xBtn.href = `https://twitter.com/intent/tweet?url=${currentUrl}`;
  }
});

function CopiarUrl() {
  var enlace = document.createElement("input");
  enlace.setAttribute("value", window.location.href.split("?")[0].split("#")[0]);
  document.body.appendChild(enlace);
  enlace.select();
  document.execCommand("copy");
  document.body.removeChild(enlace);
  var css = document.createElement("style");
  var estilo = document.createTextNode("#aviso {position:fixed; z-index: 9999999; widht: 120px; top:6.9em;left:15em;margin-left: -60px;padding: 19.5px; background: white;border-radius: 0.375rem;font-size: 14px;font-family: sans-serif;}");
  css.appendChild(estilo);
  document.head.appendChild(css);
  var aviso = document.createElement("div");
  aviso.setAttribute("id", "aviso");
  var contenido = document.createTextNode("URL Copiada");
  aviso.appendChild(contenido);
  document.body.appendChild(aviso);
  window.load = setTimeout("document.body.removeChild(aviso)", 2000);
}

/*Etiqueta*/
class Encabezado extends HTMLElement {
  constructor() {
    super();
    /*Atributos*/
    const identificador = this.getAttribute("identificador");
    const elementoHtml = document.createElement(identificador);
    elementoHtml.innerHTML = `
    <div class="row sticky-top">
      <nav class="navbar navbar-dark bg-dark p-3 rounded-pill">
        <div class="container-fluid">
    
          <a class="navbar-brand" href="https://jeanpcarrillog.github.io/">
            <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-blog.png" alt=""
              width="36" height="30" class="d-inline-block align-text-top">
            Blog
          </a>
    
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
    
              <a class="navbar-brand" href="https://jeanpcarrillog.github.io/">
                <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-blog.png" alt=""
                  width="36" height="30" class="d-inline-block align-text-top">
                Blog
              </a>
    
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
    
            <div class="offcanvas-body">
    
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page"
                    href="https://jeanpcarrillog.github.io/index.html">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active"
                    href="https://jeanpcarrillog.github.io/Publicacion/Sentido_de_Pertenencia.html">Publicaciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active"
                    href="https://jeanpcarrillog.github.io/Lectura/Articulos.html">Artículos</a>
                </li>
    
              </ul>

            </div>
          </div>
    
        </div>
      </nav>
    
      <div class="px-3 py-1">
    
        <div class="btn-group dropend">
    
          <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
            <img
              src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-traductor-google.png"
              alt="" width="36" height="30">
          </button>
          <ul class="dropdown-menu px-2">
            <div id="google_translate_element"></div>
          </ul>
    
        </div>

        <!-- Facebook -->
        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Compartir en Facebook">
          <a class="btn" id="btn-facebook" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/refs/heads/main/ICONS/facebook.png" alt=""
              width="35" height="35" class="d-inline-block" />
          </a>
        </span>

        <!-- X (Twitter) -->
        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Compartir en X">
          <a class="btn" id="btn-x" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/refs/heads/main/ICONS/x.png" alt=""
              width="36" height="36" class="d-inline-block" />
          </a>
        </span>
    
        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
        data-bs-content="Compartir Enlace">
        <a class="btn" onclick="window.location.href='Javascript:CopiarUrl()'">
          <img src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-compartir.png" alt=""
            width="36" height="30" class="d-inline-block">
        </a>
        </span>

    
      </div>
    </div>
        `;
    this.appendChild(elementoHtml);
  }
}
customElements.define('encabezado-de-pagina', Encabezado);
