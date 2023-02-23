import * as ac from "./actioncreator";
import { Reducer } from "./reducer";

describe("Given the phoneReducer", () => {
  const dialedmock = {
    type: ac.dialedCreator,
    payload: "1",
  };
  const callmock = {
    type: ac.callCreator,
  };

  const deleteMock = {
    type: ac.deleteCreator,
  };

  const state = {
    number: "1",
    isCalling: false,
  };

  describe("When action is call", () => {
    test("Then it should return deleted num and change isCalling ", () => {
      const result = Reducer(state, dialedmock);
      expect(result).toEqual({ ...state, number: "", isCalling: true });
    });
  });

  describe("When dialed action is called", () => {
    test("Then a number should be added", () => {
      const result = Reducer(state, dialedmock);
      expect(result).toEqual({ ...state, number: "11" });
    });
  });
});
