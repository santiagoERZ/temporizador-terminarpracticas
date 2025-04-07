const fechaObjetivo = new Date("2025-07-15T17:00:00");

function actualizarTemporizador() {
    const tiempoActual = new Date()
    const diferenciaTiempo = fechaObjetivo - tiempoActual;

    if (diferenciaTiempo <= 0) {
        document.getElementById("temporizador").innerText("Ahora eres libre nuevamente, Santiago.")
    }

    const segundosTotales = Math.floor( diferenciaTiempo / 1000);
    const segundos = segundosTotales % 60;
    const minutosTotales = Math.floor(segundosTotales / 60);
    const minutos = minutosTotales % 60
    const horasTotales = Math.floor(minutosTotales / 60);
    const horas = horasTotales % 24;
    const diasTotales = Math.floor(horasTotales / 24)
    const semanas = Math.floor(diasTotales / 7);
    const meses = Math.floor(diasTotales / 30);

    document.getElementById("temporizador").innerText = `${meses} meses, ${semanas} semanas, ${diasTotales % 30} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos.`
}

setInterval(actualizarTemporizador, 900);
actualizarTemporizador();