import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./actioncreator";

type state = {
  number: string;
  isCalling: boolean;
};

const state: state = { number: "", isCalling: false };

export const Reducer = createReducer(state, (builder) => {
  builder.addCase(ac.dialedCreator, (state, { payload }) => {
    const addedNum = state.number + payload;
    return { ...state, number: addedNum };
  });
  builder.addCase(ac.callCreator, (state, { payload }) => {
    const call = !state.isCalling;

    return { ...state, isCalling: call, number: "" };
  });

  builder.addCase(ac.deleteCreator, (state, { payload }) => ({
    ...state,
    number: "",
  }));
  builder.addDefaultCase((state) => state);
});
