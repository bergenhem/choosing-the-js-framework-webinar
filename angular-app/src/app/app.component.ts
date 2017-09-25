import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  listItems = [
    { id: 0, text: 'Desks' },
    { id: 1, text: 'Chairs' },
    { id: 2, text: 'Coffee Cup'}
  ];
  addItem(newItem: string) {
    if(newItem) {
      let newArray = this.listItems;
      let newId = newArray[newArray.length - 1].id;
      this.listItems.push({ id: newId + 1, text: newItem });
    }
  }
}
