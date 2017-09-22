import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  listItems = ['Desks', 'Chairs', 'Coffee Cup'];
  addItem(newItem: string) {
    if(newItem) {
      this.listItems.push(newItem);
    }
  }

}
