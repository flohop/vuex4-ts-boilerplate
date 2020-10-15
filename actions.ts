import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations"; // import the types in mutations
import { State } from "./state"; // import your State type

export enum ActionTypes {}
/* 
    as in mutations, create k-v Pair of all actions.
    k: The name of the action you call
    v: The internal name of the action that Vuex uses

    GetText = "GET_TEXT"
  */

// boilerplate type, to make actions work with TypeScript. Don't change anything here
type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  /*
    Similar to mutations, declare the action types of all your actions. The param always stays the same.

    [ActionTypes.GetText](context: ActionAugments): void;
  */
};

export const actions: ActionTree<State, State> & Actions = {
  /* Similar to mutations, implement all your action types here.

    async [ActionTypes.GetText]({ commit }) {
        // content of the action
        // call mutations like his:
        // commit(MutationType.SetText, "MyNewText");
    },
  */
};
