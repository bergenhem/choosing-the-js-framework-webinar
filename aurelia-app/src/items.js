//import {computedFrom} from 'aurelia-framework';

export class Items {
  title = 'Aurelia App';
  itemValue = '';
  listItems = [
    { id: 0, text: 'Desks' },
    { id: 1, text: 'Chairs' },
    { id: 2, text: 'Coffee Cup' }
  ];
  addItem() {
    if (this.itemValue !== '') {
      let newArray = this.listItems;
      let newId = parseInt(newArray[newArray.length - 1].id, 10);
      this.listItems.push({ id: newId + 1, text: this.itemValue });
    }
  }
}
