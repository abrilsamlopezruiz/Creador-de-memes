document.addEventListener('DOMContentLoaded', () => {
  const tipoMemeSelect = document.getElementById('tipoMeme');
  const imagenMemeSelect = document.getElementById('imagenMeme');
  const fontTypeSelect = document.getElementById('fontType');
  const escribeInput = document.getElementById('escribe');
  const creadorInput = document.getElementById('creador');
  const fondoInput = document.getElementById('fondo');
  const createMemeButton = document.getElementById('createMeme');
  const memeContenedor = document.getElementById('memeContenedor');
  const mostrarMeme = document.getElementById('mostrarMeme');
  const memeTexto = document.getElementById('memeTexto');

  // Actualizar las opciones de imagen basadas en la categoría seleccionada
  tipoMemeSelect.addEventListener('change', () => {
    const categoriaSeleccionada = tipoMemeSelect.value;
    let opcionesImagen = '';

    if (categoriaSeleccionada === 'perritos') {
      opcionesImagen = `
        <option value="Imagenes/Perrito1.jpg">Imagen 1 Perritos</option>
        <option value="Imagenes/Perrito2.jpg">Imagen 2 Perritos</option>
        <option value="Imagenes/Perrito3.jpg">Imagen 3 Perritos</option>
      `;
    } else if (categoriaSeleccionada === 'gatitos') {
      opcionesImagen = `
        <option value="Imagenes/Gatito1.jpg">Imagen 1 Gatitos</option>
        <option value="Imagenes/Gatito2.jpg">Imagen 2 Gatitos</option>
        <option value="Imagenes/Gatito3.jpg">Imagen 3 Gatitos</option>
      `;
    } else if (categoriaSeleccionada === 'aimep3') {
      opcionesImagen = `
        <option value="Imagenes/Aimep31.jpg">Imagen 1 Aimep3</option>
        <option value="Imagenes/Aimep32.jpg">Imagen 2 Aimep3</option>
        <option value="Imagenes/Aimep33.jpg">Imagen 3 Aimep3</option>
      `;
    }

    imagenMemeSelect.innerHTML = opcionesImagen;
  });

  createMemeButton.addEventListener('click', () => {
    const tipoMeme = tipoMemeSelect.value;
    const imagenMeme = imagenMemeSelect.value;
    const fontType = fontTypeSelect.value;
    const mensaje = escribeInput.value;
    const creador = creadorInput.value;
    const colorFondo = fondoInput.value;

    mostrarMeme.src = imagenMeme;
    mostrarMeme.style.backgroundColor = colorFondo;
    memeTexto.style.fontFamily = fontType;

    memeTexto.innerText = `${mensaje}\n\nCreado por: ${creador}`;

    memeContenedor.classList.remove('hidden');
  });
});
