import { GetterTree } from "vuex";
import { State } from "./state"; // import State type

export type Getters = {
  /*
    declare the getter types. Since you call the functions directly, you don't need to declare an enum with k-v pairs

    lengthOfText(state: State): number
  */
};

export const getters: GetterTree<State, State> & Getters = {
  /* 
    implement the Getter types you declared earlier

    lengthOfText(state) {
        return state.text.length;
    }
  */
};
