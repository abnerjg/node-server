const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Descripción de la tarea: ', (description) => {
    tasks.push({ description, completed: false });
    console.log('Tarea añadida.');
    showMenu();
  });
}

  function deleteTask() {
    rl.question('Índice de la tarea a eliminar: ', (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Tarea eliminada.');
      } else {
        console.log('Índice no válido. No se eliminó ninguna tarea.');
      }
      showMenu();
    });
  }
  function completeTask() {
    rl.question('Índice de la tarea completada: ', (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log('Tarea marcada como completada.');
      } else {
        console.log('Índice no válido. No se marcó ninguna tarea como completada.');
      }
      showMenu();
    });
  }
  
  function showTasks() {
    console.log('\n======= Lista de Tareas =======');
    tasks.forEach((task, index) => {
      const status = task.completed ? '[X]' : '[ ]';
      console.log(`${index}. ${status} ${task.description}`);
    });
    showMenu();
  }

  function showMenu() {
    console.log('\n======= Menú =======');
    console.log('1. Añadir Tarea');
    console.log('2. Eliminar Tarea');
    console.log('3. Completar Tarea');
    console.log('4. Mostrar Tareas');
    console.log('5. Salir');
    rl.question('Seleccione una opción: ', (option) => {
      switch (option) {
        case '1':
          addTask();
          break;
        case '2':
          deleteTask();
          break;
        case '3':
          completeTask();
          break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Intente de nuevo.');
        showMenu();
    }
  });
}

showMenu();