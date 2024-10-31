import React, { useReducer, createContext, useContext, useState } from 'react';
import { Trash2, Edit, Check, X, Plus, Clock, Tag } from 'lucide-react';

// Action Types
const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  SET_PRIORITY: 'SET_PRIORITY',
  ADD_TAG: 'ADD_TAG',
  REMOVE_TAG: 'REMOVE_TAG',
  SET_DUE_DATE: 'SET_DUE_DATE'
};

// Initial State
const initialState = {
  tasks: [],
  tags: ['work', 'personal', 'urgent'],
  statistics: {
    total: 0,
    completed: 0,
    pending: 0
  }
};

// Reducer Function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        priority: 'medium',
        tags: [],
        dueDate: null,
        createdAt: new Date()
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        statistics: {
          ...state.statistics,
          total: state.statistics.total + 1,
          pending: state.statistics.pending + 1
        }
      };

    case ACTIONS.DELETE_TASK:
      const taskToDelete = state.tasks.find(task => task.id === action.payload.id);
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
        statistics: {
          ...state.statistics,
          total: state.statistics.total - 1,
          completed: taskToDelete.completed ? state.statistics.completed - 1 : state.statistics.completed,
          pending: !taskToDelete.completed ? state.statistics.pending - 1 : state.statistics.pending
        }
      };

    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
        statistics: {
          ...state.statistics,
          completed: action.payload.completed ? state.statistics.completed - 1 : state.statistics.completed + 1,
          pending: action.payload.completed ? state.statistics.pending + 1 : state.statistics.pending - 1
        }
      };

    case ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        )
      };

    case ACTIONS.SET_PRIORITY:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        )
      };

    case ACTIONS.ADD_TAG:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id && !task.tags.includes(action.payload.tag)
            ? { ...task, tags: [...task.tags, action.payload.tag] }
            : task
        )
      };

    case ACTIONS.REMOVE_TAG:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, tags: task.tags.filter(tag => tag !== action.payload.tag) }
            : task
        )
      };

    case ACTIONS.SET_DUE_DATE:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, dueDate: action.payload.date }
            : task
        )
      };

    default:
      return state;
  }
};

// Context
const TaskContext = createContext(null);

// Custom CSS classes for styling
const styles = {
  container: 'max-w-4xl mx-auto p-6',
  title: 'text-3xl font-bold mb-8',
  statsContainer: 'grid grid-cols-3 gap-4 mb-6',
  statCard: 'p-4 rounded shadow',
  form: 'mb-6',
  input: 'w-full p-2 border rounded',
  button: {
    primary: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600',
    success: 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600',
    danger: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600',
    icon: 'p-2 rounded hover:bg-gray-100'
  },
  taskItem: 'border p-4 rounded mb-4 shadow-sm',
  taskTitle: 'text-lg font-medium',
  metadata: 'mt-2 text-sm text-gray-600',
  checkbox: 'mr-3 w-4 h-4',
  tag: 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2',
  emptyState: 'text-center p-8 bg-gray-50 rounded'
};

// Task Management Component
const TaskManager = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      dispatch({ type: ACTIONS.ADD_TASK, payload: { title: newTaskTitle } });
      setNewTaskTitle('');
    }
  };

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditText(title);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch({ type: ACTIONS.UPDATE_TASK, payload: { id, title: editText } });
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Task Management System</h1>

        {/* Statistics */}
        <div className={styles.statsContainer}>
          <div className={`${styles.statCard} bg-blue-50`}>
            <h3 className="font-semibold">Total Tasks</h3>
            <p className="text-2xl">{state.statistics.total}</p>
          </div>
          <div className={`${styles.statCard} bg-green-50`}>
            <h3 className="font-semibold">Completed</h3>
            <p className="text-2xl">{state.statistics.completed}</p>
          </div>
          <div className={`${styles.statCard} bg-yellow-50`}>
            <h3 className="font-semibold">Pending</h3>
            <p className="text-2xl">{state.statistics.pending}</p>
          </div>
        </div>

        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className={styles.form}>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Add a new task..."
              className={styles.input}
            />
            <button type="submit" className={styles.button.primary}>
              <Plus size={20} />
            </button>
          </div>
        </form>

        {/* Task List */}
        <div>
          {state.tasks.map(task => (
            <div
              key={task.id}
              className={`${styles.taskItem} ${task.completed ? 'bg-gray-50' : 'bg-white'}`}
            >
              {editingId === task.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className={styles.input}
                  />
                  <button
                    onClick={() => saveEdit(task.id)}
                    className={styles.button.success}
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className={styles.button.danger}
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        dispatch({
                          type: ACTIONS.TOGGLE_TASK,
                          payload: { id: task.id, completed: task.completed }
                        })
                      }
                      className={styles.checkbox}
                    />
                    <span className={`${styles.taskTitle} ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(task.id, task.title)}
                      className={styles.button.icon}
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() =>
                        dispatch({
                          type: ACTIONS.DELETE_TASK,
                          payload: { id: task.id }
                        })
                      }
                      className={styles.button.icon}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Task Metadata */}
              <div className={styles.metadata}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>
                      {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString()
                        : 'No due date'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={16} />
                    <span>{task.tags.length > 0 ? task.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    )) : 'No tags'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {state.tasks.length === 0 && (
          <div className={styles.emptyState}>
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        )}
      </div>
    </TaskContext.Provider>
  );
};

export default TaskManager;