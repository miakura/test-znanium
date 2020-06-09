import { Component, OnInit } from '@angular/core';

  export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol','weight', 'symbol'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: PeriodicElement[]
  ngOnInit(): void{

    this.dataSource = ELEMENT_DATA;
}

  addColumnw() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    console.log(this.displayedColumns)
  }

  addColumn() {

    this.columnsToDisplay = this.displayedColumns2;
  }
}
