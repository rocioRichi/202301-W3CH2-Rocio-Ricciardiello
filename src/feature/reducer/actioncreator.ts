import { createAction } from "@reduxjs/toolkit";
import { actions } from "./actions";
export const callCreator = createAction(actions.call);

export const dialedCreator = createAction<string>(actions.dialedNumber);

export const deleteCreator = createAction(actions.deleteNumber);
