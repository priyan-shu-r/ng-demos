// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(value: any, searchTerm:any): any {

//     if(value.length === 0){
//       return value;
//     }
//     return value.filter(function(search:any){
//       return search.class9.toLowerCase.indexOf(searchTerm.toLowerCase()) > -1;
//     })
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({

  name: 'filter'

})

export class FilterPipe implements PipeTransform {



  transform(value: any, searchTerm: any): any {

    if(value.length === 0){

      return value;

    }

    return value.filter(function(search:any){

      return search.class9.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      return search.class10.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

    });

  }



}