/**
 * App.js - Gerenciador de Tarefas Profissional
 * Estrutura modular, organizada e seguindo boas práticas.
 */

(() => {
    'use strict';
  
    // -----------------------------
    // 1. Seletores DOM
    // -----------------------------
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const categorySelect = document.getElementById('category');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const todoList = document.getElementById('todo-list');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeToggle = document.getElementById('theme-toggle');
  
    // -----------------------------
    // 2. Estado e Constantes
    // -----------------------------
    let todos = [];
  
    const STORAGE_KEY = 'todos';
  
    // -----------------------------
    // 3. Inicialização
    // -----------------------------
    const init = () => {
      loadTodosFromStorage();
      renderTodos(getActiveFilter());
      attachEventListeners();
      updateThemeToggleIcon();
    };
  
    // -----------------------------
    // 4. Utilitários de Storage
    // -----------------------------
    const loadTodosFromStorage = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        todos = stored ? JSON.parse(stored) : [];
      } catch (error) {
        console.error('Erro ao carregar todos do localStorage:', error);
        todos = [];
      }
    };
  
    const saveTodosToStorage = () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error('Erro ao salvar todos no localStorage:', error);
      }
    };
  
    // -----------------------------
    // 5. Criação de Elementos
    // -----------------------------
    const createTodoItemElement = (todo) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.setAttribute('draggable', 'true');
      li.dataset.id = todo.id;
      if (todo.completed) li.classList.add('completed');
  
      // Texto da tarefa
      const textSpan = document.createElement('span');
      textSpan.className = 'text';
      textSpan.textContent = todo.text;
  
      // Categoria
      const categorySpan = document.createElement('span');
      categorySpan.className = 'category';
      categorySpan.textContent = todo.category;
  
      // Data de vencimento
      const dueDateSpan = document.createElement('span');
      dueDateSpan.className = 'due-date';
      dueDateSpan.textContent = todo.dueDate || 'Sem data';
  
      // Prioridade (atributo data-priority para estilização CSS)
      const prioritySpan = document.createElement('span');
      prioritySpan.className = 'priority';
      prioritySpan.textContent = todo.priority;
      prioritySpan.setAttribute('data-priority', todo.priority);
  
      // Botões de ação: Editar, Concluir, Excluir
      const editBtn = document.createElement('button');
      editBtn.className = 'edit';
      editBtn.setAttribute('aria-label', 'Editar tarefa');
      editBtn.innerHTML = '✏';
  
      const completeBtn = document.createElement('button');
      completeBtn.className = 'complete';
      completeBtn.setAttribute('aria-label', 'Concluir tarefa');
      completeBtn.innerHTML = '✔';
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete';
      deleteBtn.setAttribute('aria-label', 'Excluir tarefa');
      deleteBtn.innerHTML = '✖';
  
      // Agrupa elementos
      li.append(
        textSpan,
        categorySpan,
        dueDateSpan,
        prioritySpan,
        editBtn,
        completeBtn,
        deleteBtn
      );
  
      // Anexar eventos específicos ao item
      attachTodoItemEvents(li, todo);
  
      return li;
    };
  
    // -----------------------------
    // 6. Funções de Renderização
    // -----------------------------
    const renderTodos = (filter) => {
      // Limpa lista existente
      todoList.innerHTML = '';
  
      // Filtra tarefas conforme filtro ativo
      const filteredTodos = todos.filter((todo) => {
        switch (filter) {
          case 'active': return !todo.completed;
          case 'completed': return todo.completed;
          default: return true;
        }
      });
  
      // Cria e insere elementos
      filteredTodos.forEach((todo) => {
        const itemEl = createTodoItemElement(todo);
        todoList.appendChild(itemEl);
      });
    };
  
    // -----------------------------
    // 7. Eventos de Item
    // -----------------------------
    const attachTodoItemEvents = (li, todo) => {
      const editBtn = li.querySelector('button.edit');
      const completeBtn = li.querySelector('button.complete');
      const deleteBtn = li.querySelector('button.delete');
  
      // Editar tarefa
      editBtn.addEventListener('click', () => {
        const newText = prompt('Edite sua tarefa:', todo.text);
        if (newText && newText.trim()) {
          todo.text = newText.trim();
          saveTodosToStorage();
          renderTodos(getActiveFilter());
        }
      });
  
      // Concluir tarefa
      completeBtn.addEventListener('click', () => {
        todo.completed = !todo.completed;
        saveTodosToStorage();
        renderTodos(getActiveFilter());
      });
  
      // Excluir tarefa
      deleteBtn.addEventListener('click', () => {
        todos = todos.filter((t) => t.id !== todo.id);
        saveTodosToStorage();
        renderTodos(getActiveFilter());
      });
  
      // Drag & Drop
      li.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', todo.id);
      });
  
      li.addEventListener('dragover', (e) => {
        e.preventDefault();
        li.classList.add('drag-over');
      });
  
      li.addEventListener('dragleave', () => {
        li.classList.remove('drag-over');
      });
  
      li.addEventListener('drop', (e) => {
        e.preventDefault();
        li.classList.remove('drag-over');
  
        const draggedId = e.dataTransfer.getData('text/plain');
        const targetId = todo.id;
  
        const draggedIndex = todos.findIndex((t) => t.id === draggedId);
        const targetIndex = todos.findIndex((t) => t.id === targetId);
  
        if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
          const [movedTodo] = todos.splice(draggedIndex, 1);
          todos.splice(targetIndex, 0, movedTodo);
          saveTodosToStorage();
          renderTodos(getActiveFilter());
        }
      });
    };
  
    // -----------------------------
    // 8. Função de Adicionar Tarefa
    // -----------------------------
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const text = todoInput.value.trim();
      const category = categorySelect.value;
      const dueDate = dueDateInput.value;
      const priority = prioritySelect.value;
  
      if (!text) return;
  
      const newTodo = {
        id: Date.now().toString(),
        text,
        category,
        dueDate: dueDate || null,
        priority,
        completed: false
      };
  
      todos.push(newTodo);
      saveTodosToStorage();
      renderTodos(getActiveFilter());
  
      todoForm.reset();
      todoInput.focus();
    };
  
    // -----------------------------
    // 9. Filtros de Tarefas
    // -----------------------------
    const attachFilterEvents = () => {
      filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          renderTodos(btn.dataset.filter);
        });
      });
    };
  
    const getActiveFilter = () => {
      const activeBtn = document.querySelector('.filter-btn.active');
      return activeBtn ? activeBtn.dataset.filter : 'all';
    };
  
    // -----------------------------
    // 10. Alternar Tema (claro/escuro)
    // -----------------------------
    const toggleTheme = () => {
      document.body.classList.toggle('dark-mode');
      updateThemeToggleIcon();
      // Poderia persistir preferência no localStorage
    };
  
    const updateThemeToggleIcon = () => {
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
    };
  
    // -----------------------------
    // 11. Registro de Eventos Globais
    // -----------------------------
    const attachEventListeners = () => {
      // Submissão de formulário
      todoForm.addEventListener('submit', handleFormSubmit);
  
      // Filtrar tarefas
      attachFilterEvents();
  
      // Alternar tema
      themeToggle.addEventListener('click', toggleTheme);
    };
  
    // -----------------------------
    // 12. Inicializa App
    // -----------------------------
    init();
  })();
  