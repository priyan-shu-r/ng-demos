import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

// import { MatInputModule } from '.angular/material/input';
// import { FormsModule } from '.angular/forms';

const MaterialComponent = [
  MatSliderModule,
  MatTableModule,
  MatSortModule
  // MatTableDataSource,
  // MatInputModule,
  // FormsModule
  
  

];

@NgModule({
  
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
