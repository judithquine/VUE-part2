<script>
import FriendContact from "./FriendContact.vue";
import { useContactsStore } from '../store/useContactsStore'; 
export default {
  setup() {
    const contactsStore = useContactsStore()

    return { contactsStore }
  },

  computed: {
    quadrupleCounter() {
      return this.counterStore.doubleCount *2
    },

    listar() {
      return this.contactsStore.friends
    }
  },

  components: {
    FriendContact,
  },
};
</script>

<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <ul>
        <friend-contact
          v-for="friend in listar"
          :key="friend.id"
          :friend="friend"
        >
          Click me!
        </friend-contact>

        <h1>Textarea input</h1>
  <p>My message is: {{ textarea }}</p>
  <textarea v-model="textarea" placeholder="Multiline message"></textarea>
      </ul>
    </section>
  </div>
</template>