<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" class="k-textbox" v-model="newItem" />
    <button type="button" class="k-button k-primary" v-on:click="addItem">Add item</button>
    <ul>
      <li v-for="item in listItems">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'Vue.js App',
      newItem: '',
      listItems: [
        { id: 0, text: 'Desks' },
        { id: 1, text: 'Chairs' },
        { id: 2, text: 'Coffee Cup' }
      ]
    }
  },
  methods: {
    addItem() {
      if(this.newItem) {
        let newArray = this.listItems;
        let newId = parseInt(newArray[newArray.length - 1].id, 10);
        newArray.push({ id: newId + 1, text: this.newItem });
        this.listItems = newArray;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
