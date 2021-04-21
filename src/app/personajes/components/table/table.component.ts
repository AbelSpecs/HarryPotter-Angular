import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import { IPersona } from '../../interfaces/personajes.interface';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  /* personajes recibidos desde otro componente */
  @Input() personajes!: IPersona;

  /* columnas a mostrase en la tabla */
  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  /* data de la tabla */
  dataSource: MatTableDataSource<IPersona>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* hook que pertenece al ciclo de vida del componente carga la data en la variable al inicializarse */
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.personajes[0]);
  }

  /* Metodo que filtra la data segun se especifique*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
