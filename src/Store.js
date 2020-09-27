import React, { createContext, useReducer } from "react";

export const CTX = createContext();

const initialState = {
  general: [
    { from: "Aaron", msg: "hello" },
    { from: "Shaho", msg: "hello 2" },
    { from: "Ahmaw", msg: "hello 3" },
  ],
  topic2: [
    { from: "Aaron 2", msg: "hello22" },
    { from: "Shaho2", msg: "hello 22" },
    { from: "Ahmaw2", msg: "hello 23" },
  ],
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg,
          },
        ],
      };

    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = useReducer(reducer, initialState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
