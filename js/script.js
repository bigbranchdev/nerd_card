document.addEventListener('DOMContentLoaded', () => {
    console.log('El sitio web estilo código ha cargado.');

    // Ejemplo de interactividad:
    // Podrías añadir un evento click a los "traffic-lights"
    const trafficLights = document.querySelector('.traffic-lights');
    if (trafficLights) {
        trafficLights.addEventListener('click', () => {
            alert("don't touch, why do you touch?");
        });
    }

    // Si quieres que los números de línea se generen automáticamente
    // (en lugar de escribirlos manualmente en el HTML como en el ejemplo)
    // Esto es un poco más avanzado pero sería más robusto.
    // Para el ejemplo actual, los números están en el HTML.
});