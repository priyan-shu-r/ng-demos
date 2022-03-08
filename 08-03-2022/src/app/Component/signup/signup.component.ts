
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
// import { fileURLToPath } from 'url';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // profile: any;
  date: any;

  fileAttr = 'Choose File';


  dataimage: any;

  @ViewChild('fileInput') fileInput: ElementRef | any;
  fileAtt: any = 'Choose File';


  constructor(private _formBuilder: FormBuilder, private router: Router, public getDataService: GetDataService) { }

  firstFormGroup = this._formBuilder.group({
    first1Ctrl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    first2Ctrl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    first3Ctrl: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.\.]+@.[a-z]+.\.[com]+")]],
    firstpass1Ctrl: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
    firstpass2Ctrl: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})")]],
    first4Ctrl: ['', [Validators.required, Validators.pattern("(0/91)?[6-9][0-9]{9}")]],
    first5Ctrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    second1Ctrl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    second2Ctrl: ['', [Validators.required, Validators.pattern("[a-zA-Z]+( [A-Za-z]+)*")]],
    second3Ctrl: ['', Validators.required],
    second4Ctrl: ['', Validators.required],
    second5Ctrl: ['', Validators.required],
    second6Ctrl: ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{2}[0-9]{3}$")]],
  });
  thirdFormGroup = this._formBuilder.group({
    third1Ctrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({

    fourth1Ctrl: [this.firstFormGroup.value.firstfrstCtrl],
    fourth2Ctrl: [this.firstFormGroup.value.firstlstCtrl],
    fourth3Ctrl: [this.firstFormGroup.value.first3Ctrl],
    fourthpass1Ctrl: [this.firstFormGroup.value.firstpass1Ctrl],
    fourthpass2Ctrl: [this.firstFormGroup.value.firstpass2Ctrl],
    fourth4Ctrl: [this.firstFormGroup.value.first4Ctrl],
    fourth5Ctrl: [this.firstFormGroup.value.first5Ctrl],
    fourth6Ctrl: [this.secondFormGroup.value.second1Ctrl],
    fourth7Ctrl: [this.secondFormGroup.value.second2Ctrl],
    fourth8Ctrl: [this.secondFormGroup.value.second3Ctrl],
    fourth9Ctrl: [this.secondFormGroup.value.second4Ctrl],
    fourth10Ctrl: [this.secondFormGroup.value.second5Ctrl],
    fourth11Ctrl: [this.secondFormGroup.value.second6Ctrl],
    fourth12Ctrl: [this.thirdFormGroup.value.third1Ctrl],


  });


  dateName(event: any) {
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = "";
    date = Month[(event.value.getMonth())] + " " + (event.value.getDate()) + ", " + (event.value.getFullYear());
    this.firstFormGroup.value.first5Ctrl = date;
    console.log(date);
  }

  print(arg: string) {
    console.log();
  }

  //function call
  prop(imgFile: any) {
    console.log(imgFile)

    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    }

  }

  ngOnInit(): void {


  }



  get first1Ctrl() {
    return this.firstFormGroup.controls['first1Ctrl'];
  }
  get first2Ctrl() {
    return this.firstFormGroup.controls['first2Ctrl'];
  }
  get first3Ctrl() {
    return this.firstFormGroup.controls['first3Ctrl'];
  }
  get firstpass1Ctrl() {
    return this.firstFormGroup.controls['firstpass1Ctrl'];
  }
  get firstpass2Ctrl() {
    return this.firstFormGroup.controls['firstpass2Ctrl'];
  }
  get first4Ctrl() {
    return this.firstFormGroup.controls['first4Ctrl'];
  }
  get second1Ctrl() {
    return this.secondFormGroup.controls['second1Ctrl'];
  }
  get second2Ctrl() {
    return this.secondFormGroup.controls['second2Ctrl'];
  }
  get second6Ctrl() {
    return this.secondFormGroup.controls['second6Ctrl'];
  }
  get third1Ctrl() {
    return this.thirdFormGroup.controls['third1Ctrl'];
  }



  checkImage() {
    var reader = new FileReader();
    reader.readAsDataURL(this.thirdFormGroup.value.third1Ctrl);
    reader.onload =  () => {
      this.dataimage = reader.result
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    console.log();
  }


}





