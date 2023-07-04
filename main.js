function calcularCIFCondicional(precioProducto) {
    if (precioProducto > 0) {
      let cif = precioProducto * 0.12;
      return cif;
    } else {
      return "El precio del producto debe ser mayor que 0.";
    }
  }
  
  let precio = 500; 
  let cifCalculado = calcularCIFCondicional(precio);
  console.log("Precio FOB del producto: $" + precio);
  console.log("CIF del 12%: $" + cifCalculado);

function calcularCIFCiclo(precioFobProducto) {
    if (precioFobProducto > 0) {
      let cif = precioFobProducto * 0.12;
      return cif;
    } else {
      return "El valor FOB del producto debe ser mayor que 0.";
    }
  }

  let precioFobIngresado = prompt("Ingrese el valor FOB del producto:");
  let precioFobProducto = parseFloat(precioFobIngresado);

  if (!isNaN(precioFobProducto)) {
    let cifCalculado = calcularCIFCiclo(precioFobProducto);
    console.log("Precio Fob del producto: $" + precioFobProducto);
    console.log("CIF del 12%: $" + cifCalculado);
  } else {
    console.log("El valor FOB ingresado no es válido.");
  }
  