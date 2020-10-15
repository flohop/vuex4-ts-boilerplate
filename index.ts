import {
  createStore,
  createLogger,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from "vuex";

import { State, state } from "./state"; // State = state type, state = actual data holder
import { Mutations, mutations } from "./mutations"; // Mutations = types, mutations = implementation
import { Actions, actions } from "./actions"; // Actions = types, mutations = implementation
import { Getters, getters } from "./getters"; // Getters = types, getters = implementation

export const store = createStore<State>({
  // register all the different part in one Store
  state,
  mutations,
  actions,
  getters,
});

// overwrite the useStore() function, to use our custom Store
export function useStore() {
  return store as Store;
}

// create our custom store. This is pure boilerplate and you can copy and paste it.
export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
