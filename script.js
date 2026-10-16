// ==========================================================================
// MOTOR HOLOGRÁFICO DE ZOOM Y CONTROL GRAVITATORIO (ESTILO JARVIS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const galaxia = document.getElementById('galaxia-contenedor');
  const consola = document.getElementById('consola-espacial');
  const tarjetas = document.querySelectorAll('.tarjeta');
  const capaPrincipal = document.querySelector('.capa-estrellas.principales');
  const capaExterna = document.querySelector('.capa-estrellas.externas');

  // Parámetros físicos por defecto
  let scaleVal = 1;
  const minScale = 0.5;
  const maxScale = 2.5;

  // 1. CONTROL DE ZOOM MATEMÁTICO MEDIANTE LA RUEDA DEL RATÓN (SCROLL)
  const escena = document.querySelector('.escena-galaxia');
  
  escena.addEventListener('wheel', (e) => {
    e.preventDefault(); // Previene que la página web entera suba o baje

    // Detectar la dirección del scroll para sumar o restar escala
    if (e.deltaY < 0) {
      scaleVal += 0.12; // Zoom In
    } else {
      scaleVal -= 0.12; // Zoom Out
    }

    // Restringir el zoom dentro de límites limpios para evitar deformaciones rotacionales
    scaleVal = Math.max(minScale, Math.min(maxScale, scaleVal));

    // Aplicar la matriz de transformación conservando la inclinación cinemática de Jarvis
    galaxia.style.transform = `rotateX(65deg) rotateY(-15deg) scale(${scaleVal})`;

    // Imprimir porcentaje puro de magnificación en el HUD
    const porcentajeZoom = Math.floor(scaleVal * 100);
    consola.innerHTML = `🔍 <strong>Ajuste Óptico Jarvis:</strong> Zoom telescópico al [ ${porcentajeZoom}% ]. Campo de partículas estabilizado.`;
  });

  // 2. EFECTO PULSO GRAVITATORIO (CLICK)
  galaxia.addEventListener('click', () => {
    consola.innerHTML = `⚡ <strong>Pulso Electromagnético Stark:</strong> Generando aceleración cuántica transitoria en las estrellas periféricas.`;
    
    // Sobrecarga temporal de la rotación acelerando las capas por código
    capaPrincipal.style.animationDuration = '3s';
    capaExterna.style.animationDuration = '6s';

    // Regresar al flujo gravitatorio normal tras 1.5 segundos
    setTimeout(() => {
      capaPrincipal.style.animationDuration = '20s';
      capaExterna.style.animationDuration = '40s';
      consola.innerText = `📡 Sistema de Monitoreo: Órbitas estabilizadas a velocidad angular normalizada.`;
    }, 1500);
  });

  // 3. INTERACTIVIDAD CON EL GRID DE CONTROL INFERIOR
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      const tipoGalaxia = tarjeta.getAttribute('data-tipo');
      
      if (tipoGalaxia === 'espiral') {
        consola.innerHTML = "🌀 <strong>Modo Espiral:</strong> Vía Láctea en estado puro. Estrellas blancas masivas alineadas.";
        capaPrincipal.style.animationDuration = '20s';
        capaExterna.style.animationDuration = '40s';
      } else if (tipoGalaxia === 'eliptica') {
        consola.innerHTML = "🛑 <strong>Modo Elíptico:</strong> Colapsando brazos del sistema. Compresión masiva. Rotación ralentizada.";
        capaPrincipal.style.animationDuration = '80s';
        capaExterna.style.animationDuration = '130s';
      } else if (tipoGalaxia === 'irregular') {
        consola.innerHTML = "💥 <strong>Modo Irregular:</strong> Ruptura de filamentos. Caos en la matriz estelar de Jarvis.";
        capaPrincipal.style.animationDuration = '4s';
        capaExterna.style.animationDuration = '8s';
      }
    });
  });
});
