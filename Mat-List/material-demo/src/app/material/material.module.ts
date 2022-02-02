import { NgModule } from '@angular/core';
//for implementing data table 
import { MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';

const MaterialComponent = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
