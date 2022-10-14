import { defineStore } from 'pinia'

export const useContactsStore = defineStore({  
  id: 'countContacts',
  state: () => (
    { friends: [
      {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
      {
        id: "julie",
        name: "Julie Jones",
        phone: "09876 543 221",
        email: "julie@localhost.com",
      },
    ],
      count: 0, operation: null }
  ),
  getters: {

    lastOperation: (state) => state.operation
  },
  actions: {

    add() {
      this.count++;
      this.operation = 'add';
    },
    remove() {
      this.count--;
      this.operation = 'remove';
    },
    random() {
      this.count = Math.floor(Math.random() * 101);
      this.operation = 'random';
    }
  }
})