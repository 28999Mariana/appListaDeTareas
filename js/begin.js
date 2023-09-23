//Lista de tareas TASK=TAREA

//capto el doc. html y ejecuto el evento cuando se carga
document.addEventListener('DOMContentLoaded', function() {
  // Defino variables
  const taskInput = document.getElementById('taskInput'); // tomo el campo de entrada para las tareas
  const addButton = document.getElementById('addButton'); // tomo el botón de agregar tarea
  const taskList = document.getElementById('taskList'); // tomo la lista donde se mostrarán las tareas
  
  // Función para agregar una tarea
  function addTask() {
      const taskText = taskInput.value.trim(); // Obtengo el texto de la tarea y elimino espacios en blanco al inicio y al final

      if (taskText !== '') { // Verifico que el texto de la tarea no esté vacío
          const newTask = document.createElement('li'); // Creo un nuevo elemento de lista

          const checkbox = document.createElement('input'); // Creo un elemento de entrada (checkbox)
          checkbox.type = 'checkbox'; // Hago que el input sea tipo checkbox
          newTask.appendChild(checkbox); // Agrego el checkbox como hijo del elemento de lista

          const label = document.createElement('label'); // Creo un elemento de etiqueta
          label.textContent = taskText; // Hago que el texto de la etiqueta sea el texto de la tarea
          newTask.appendChild(label); // Agrego la etiqueta como hijo del elemento de lista

          const deleteButton = document.createElement('button'); // Creo un elemento botón
          deleteButton.textContent = 'Eliminar'; // hago que el texto del botón sea "Eliminar"
          deleteButton.addEventListener('click', function() {
              newTask.remove(); // Agrego un evento clic al botón que eliminará la tarea al hacer clic en él
          });
          newTask.appendChild(deleteButton); // Agrego el botón como hijo del elemento de lista

          taskList.appendChild(newTask); // Agrego la nueva tarea a la lista
          taskInput.value = ''; // hago que el campo de entrada vuelva a quedar vacío
      }
  }

  addButton.addEventListener('click', addTask); // Agrego un evento clic al botón de agregar que ejecutará la función addTask cuando se haga clic
});






