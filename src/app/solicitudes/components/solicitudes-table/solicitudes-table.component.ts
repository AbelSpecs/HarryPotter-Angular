import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { Solicitud } from '../../interfaces/solicitud.interface';

@Component({
  selector: 'app-solicitudes-table',
  templateUrl: './solicitudes-table.component.html',
  styleUrls: ['./solicitudes-table.component.css']
})
export class SolicitudesTableComponent implements OnInit, AfterViewInit, OnChanges  {

  /* solicitudes recibidas desde otro componente */
  @Input() solicitudes!: Solicitud;
  bool: boolean;

  /* columnas a mostrase en la tabla */
  displayedColumns: string[] = ['name', 'gender', 'species', 'age'];
  /* data de la tabla */
  dataSource: MatTableDataSource<Solicitud>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* hook del ciclo de vida del componente que registra los cambios en la data de la tabla */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.solicitudes.currentValue);
    this.dataSource = new MatTableDataSource(changes.solicitudes.currentValue[0]);
  }

  /* hook que pertenece al ciclo de vida del componente carga la data en la variable al inicializarse */
  ngOnInit(): void {
    console.log(this.solicitudes[0]);
    this.dataSource = new MatTableDataSource(this.solicitudes[0]);
    console.log(this.dataSource);
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
