function obtenerAreaVolumen() {
    var areaResultado = document.getElementById("areaResultado");
    var volumenResultado = document.getElementById("volumenResultado");
    var a = parseInt(document.getElementById("a").value);
  
    var volumen = a*a*a;
    var area = 6*(a*a);
  
    areaResultado.innerHTML = area;
    volumenResultado.innerHTML = volumen;

    
  }