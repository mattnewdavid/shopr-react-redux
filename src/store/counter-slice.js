// Redux Toolkit Store
import {  createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState:{ counter: 0 },
  reducers: {
      increment(state, action) {
          state.counter ++;
    },
      decrement(state, action) {
          state.counter--;
    },
      addby(state, action) {
          state.counter += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice



// Redux Store
// import { createStore } from 'redux'


// const reducer = (state = { counter: 0 }, action) => {
//     if (action.type === 'INC') {
//         return {counter: state.counter + 1}
//     }
//       if (action.type === "DNC") {
//         return { counter: state.counter - 1 };
//     }
//     if (action.type === "ADDBY") {
//         return { counter: state.counter + action.payload };
//     }
//     return state
// }

// const store = createStore(reducer);
// export default store;