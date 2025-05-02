import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Done'},
  {position: 2, name: 'In progress'},
  {position: 3, name: 'Pending'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabla-lost',
  templateUrl: './tabla-lost.component.html',
  styleUrls: ['./tabla-lost.component.css'],
})
export class TablaLostComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}


