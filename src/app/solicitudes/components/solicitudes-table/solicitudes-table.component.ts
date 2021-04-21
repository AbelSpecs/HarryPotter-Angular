import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Solicitud } from '../../interfaces/solicitud.interface';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit, AfterViewInit  {

  /* solicitudes recibidas desde otro componente */
  @Input() solicitudes!: Solicitud;

  /* columnas a mostrase en la tabla */
  displayedColumns: string[] = ['name', 'gender', 'species', 'age'];
  /* data de la tabla */
  dataSource: MatTableDataSource<Solicitud>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* hook que pertenece al ciclo de vida del componente carga la data en la variable al inicializarse */
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.solicitudes[0]);
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
