import { MutationTree } from "vuex";
import { State } from "./state"; // import all types from state (State type)

export enum MutationType {}
/*
  Create k-v pair of all mutation.
  k: The name of the mutation you call
  v: The internal name of the mutation that Vuex uses

  SetText = "SET_TEXT",
  SetId = "SET_ID"
  */

export type Mutations = {
  /* declare the mutation types. Meaning say, what Mutation gets what type of parameters

    [MutationType].SetName](state: State, newText: string):void;
    [MutationType].SetId](state: State, newId: number): void;
    */
};

export const mutations: MutationTree<State> & Mutations = {
  /* implement the Mutations you declared earlier.
   You have to implement all the function types you declared

    [MutationType.SetText](state, newText) {
        state.text = newText;
    },
    [MutationType.SetId](state, newId) {
        state.id = newId;
    },
    */
};
