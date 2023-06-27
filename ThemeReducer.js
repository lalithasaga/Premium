// themeReducer.js

// Define the initial state for the theme
const initialState = {
    isDarkMode: false,
  };
  
  // Define the reducer function for the theme
  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          isDarkMode: !state.isDarkMode,
        };
      default:
        return state;
    }
  };
  
  export { initialState, themeReducer };
  