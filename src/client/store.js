import { writable } from 'svelte/store';

class Store {
  data = writable({});
}

export default new Store();
