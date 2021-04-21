import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(fecha: string): number {

    console.log(fecha);
    const year = fecha.substr(6, 4);
    const date = new Date(year).getFullYear();
    const actualDate = new Date().getUTCFullYear();
    const age = actualDate - date;

    return age;
  }

}
