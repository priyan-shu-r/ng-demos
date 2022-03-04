import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit 
{
 
  //  firstFormGroup:any = FormGroup;
  //  secondFormGroup:any = FormGroup;
  //  thirdFormGroup:any = FormGroup;
  //  fourthFormGroup:any = FormGroup;
 
  // stepper: any;
  // form: any;
  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  firstFormGroup = this._formBuilder.group({
    first1Ctrl: ['', Validators.required],
    first2Ctrl: ['', Validators.required],
    first3Ctrl: ['', Validators.required],
    first4Ctrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    second1Ctrl: ['', Validators.required],
    second2Ctrl: ['', Validators.required],
    second3Ctrl: ['', Validators.required],
    second4Ctrl: ['', Validators.required],
    second5Ctrl: ['', Validators.required],
    second6Ctrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    third1Ctrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    
    fourth1Ctrl: [this.firstFormGroup.value.first1Ctrl],
    fourth2Ctrl: [this.firstFormGroup.value.first2Ctrl],
    fourth3Ctrl: [this.firstFormGroup.value.first3Ctrl],
    fourth4Ctrl: [this.firstFormGroup.value.first4Ctrl],
    fourth5Ctrl: [this.secondFormGroup.value.second1Ctrl],
    fourth6Ctrl: [this.secondFormGroup.value.second2Ctrl],
    fourth7Ctrl: [this.secondFormGroup.value.second3Ctrl],
    fourth8Ctrl: [this.secondFormGroup.value.second4Ctrl],
    fourth9Ctrl: [this.secondFormGroup.value.second5Ctrl],
    fourth10Ctrl:[this.secondFormGroup.value.second6Ctrl],

  });
  

  ngOnInit(): void { }
  


  // showdata() { console.log(this.firstFormGroup);}
  
  
  // initls()
  // {

  //   this.fourthFormGroup = this.firstFormGroup,
  //   this.fourthFormGroup.value.fourth2Ctrl= this.firstFormGroup.value.first2Ctrl,
  //   this.fourthFormGroup.value.fourth3Ctrl= this.firstFormGroup.value.first3Ctrl,
  //   this.fourthFormGroup.value.fourth4Ctrl= this.firstFormGroup.value.first4Ctrl,
  //   this.fourthFormGroup.value.fourth5Ctrl= this.secondFormGroup.value.second1Ctrl,
  //   this.fourthFormGroup.value.fourth6Ctrl= this.secondFormGroup.value.second2Ctrl,
  //   this.fourthFormGroup.value.fourth7Ctrl= this.secondFormGroup.value.second3Ctrl,
  //   this.fourthFormGroup.value.fourth8Ctrl= this.secondFormGroup.value.second4Ctrl,
  //   this.fourthFormGroup.value.fourth9Ctrl= this.secondFormGroup.value.second5Ctrl,
  //   this.fourthFormGroup.value.fourth10Ctrl= this.secondFormGroup.value.second6Ctrl
  //   console.log( this.fourthFormGroup);

  // }

}


