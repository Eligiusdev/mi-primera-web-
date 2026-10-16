// ==========================================================================
// MOTOR DE INTERACTIVIDAD ASTRONÓMICA PARA EL PROYECTO UNIVERSO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const universo = document.querySelector('.universo-3d');
  const nucleo = document.querySelector('.nucleo');
  const consola = document.getElementById('consola-espacial');
  const tarjetas = document.querySelectorAll('.tarjeta');
  const capaPrincipal = document.querySelector('.capa-estrellas.principales');
  const capaExterna = document.querySelector('.capa-estrellas.externas');

  // 1. Evento de exploración al hacer Click en la Galaxia
  universo.addEventListener('click', () => {
    // Generar datos simulados aleatorios del espacio profundo
    const aniosLuz = Math.floor(Math.random() * (25000 - 1000 + 1)) + 1000;
    const estrellasDetectadas = (Math.random() * (4.5 - 1.2) + 1.2).toFixed(2);
    
    // Imprimir reporte en nuestra consola en pantalla
    consola.innerHTML = `☄️ <strong>Escaner de Núcleo:</strong> ¡Sagitario A* Activo! Distancia al punto de impacto: ~${aniosLuz} años luz. Densidad calculada: ${estrellasDetectadas}B de estrellas.`;
    
    // Efecto visual instantáneo: Sobrecarga lumínica del núcleo
    nucleo.style.boxShadow = `
      0 0 50px 30px #ffffff,
      0 0 90px 45px #a855f7,
      0 0 200px 100px #3b82f6
    `;
    
    // Activar clase CSS temporal para distorsionar la galaxia
    universo.classList.add('hipervelocidad');
    
    // Restaurar los parámetros físicos a los 600ms
    setTimeout(() => {
      nucleo.style.boxShadow = '';
      universo.classList.remove('hipervelocidad');
    }, 600);
  });

  // 2. Evento dinámico al pasar el cursor (Mousemove) sobre el plano galáctico
  universo.addEventListener('mousemove', (e) => {
    // Calcular coordenadas relativas para simular distorsión por gravedad
    const rect = universo.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    
    consola.innerText = `🌌 Leyendo cuadrante espacial X: ${x}u | Y: ${y}u. Fuerza de atracción gravitatoria estable.`;
  });

  // Limpiar la consola cuando el mouse sale de la galaxia
  universo.addEventListener('mouseleave', () => {
    consola.innerText = "📡 Sistema de Monitoreo: Buscando anomalías cósmicas...";
  });

  // 3. Evento para las Tarjetas del Grid Inferior
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      const tipoGalaxia = tarjeta.getAttribute('data-tipo');
      
      if (tipoGalaxia === 'espiral') {
        consola.innerHTML = "🌀 <strong>Modo Espiral:</strong> Velocidad de rotación normalizada en los brazos dinámicos.";
        capaPrincipal.style.animationDuration = '25s';
        capaExterna.style.animationDuration = '45s';
      } else if (tipoGalaxia === 'eliptica') {
        consola.innerHTML = "🛑 <strong>Modo Elíptico:</strong> Colapsando brazos. Fricción alta. Las órbitas se ralentizan en un 300%.";
        capaPrincipal.style.animationDuration = '90s';
        capaExterna.style.animationDuration = '150s';
      } else if (tipoGalaxia === 'irregular') {
        consola.innerHTML = "⚡ <strong>Modo Irregular:</strong> Caos gravitacional detectado. Velocidad hiper-acelerada por colisión.";
        capaPrincipal.style.animationDuration = '5s';
        capaExterna.style.animationDuration = '10s';
      }
    });
  });
});
