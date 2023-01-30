import { statusFilters } from "./constants";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case "tasks/toggleCompleted":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    default:
      return state;
  }
};