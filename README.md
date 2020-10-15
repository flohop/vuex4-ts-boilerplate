# vuex4-ts-boilerplate
Create your Vuex4 stores with TypeScript faster, by copy pasting boilerplate code

<p>All these files should be inside a "store" folder</p>
<ul>
  <li>state.ts     => Declare the types of your state, and give initial values to it</li>
  <li>getters.ts   => Declare the function types of your getters and implement them</li>
  <li>mutations.ts => Declare the names of your mutations, their function types and implement them</li>
  <li>actions.ts   => Declare the names of your actiosn, their function types and implement them</li>
  <li>index.ts     => This is pretty much only boilerplate code.</li>
 </ul>
 
 ## How to use the typed store
  
  In your main.ts file, where you create your App, import the store from index.ts
  
  <span>main.ts should look somewhat like this:</span>
```
import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store"; // automaticall selects index.ts

createApp(App)
  .use(store)
  .mount("#app");
``` 
  Create your typed store:
  ```
  import { useStore } from "@/store";
  
  setup() {
    const store = useStore();
  }
  ```
  Access state:
  ```
  store.state.myValue
  ```
  
  Use getters: 
  ```
  const myLength = computed(() => store.getters.valueLength);
  ```
  
  Use mutations:
  ```
  import { MutationType } from "@/store/mutations";

  store.commit(MutationType.changeValue, newValue);
  
  ```
  
  Use actions:
  ```
  import { ActionTypes } from "@/store/actions";
  
  store.dispatch(ActionTypes.GetServerValue))
  
  ```
  
#### Congratulations, your Vuex Store is now type safe!
  
  

 # Warning
 If you change any of the type names, you will have to change every appearance of it. Your IDE should point that out for you.

