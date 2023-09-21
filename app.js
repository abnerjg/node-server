function crearTarea(nuevaTarea) {
  return new Promise((resolve, reject) => {
    // ... Lógica para crear la tarea ...

    // Si todo está bien, resolvemos la promesa
    resolve('Tarea creada exitosamente');
    // Si hay un error, rechazamos la promesa
    // reject('Hubo un error al crear la tarea');
  });
}

async function main() {
  try {
    const resultado = await crearTarea('Nueva tarea');
    console.log(resultado);
  } catch (error) {
    console.error('Error:', error);
  }
}

function main() {
  crearTarea('Nueva tarea')
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

main();

main();