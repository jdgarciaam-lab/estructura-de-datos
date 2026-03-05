// Selección de elementos
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');

// Inicialización del contador de tareas
let count = 0;

// Función para actualizar el contador de tareas pendientes
function updateTaskCount() {
  taskCount.textContent = `Tareas pendientes: ${count}`;
}

// Función para eliminar una tarea
function deleteTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
  count--;
  updateTaskCount();
}

// Función para agregar una tarea
function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Crear elemento <li>
  const li = document.createElement('li');
  li.textContent = taskText;

  // Crear botón "Eliminar"
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener('click', deleteTask);

  // Añadir botón al <li>
  li.appendChild(deleteBtn);

  // Agregar <li> a la lista
  taskList.appendChild(li);

  // Limpiar input y actualizar contador
  taskInput.value = "";
  count++;
  updateTaskCount();
}

// Escuchar el envío del formulario
taskForm.addEventListener('submit', addTask);