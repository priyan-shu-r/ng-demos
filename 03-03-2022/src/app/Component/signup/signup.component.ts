import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
   firstFormGroup:any = FormGroup;
   secondFormGroup:any = FormGroup;
   thirdFormGroup:any = FormGroup;
   fourthFormGroup:any = FormGroup;
 
  stepper: any;
  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      first1Ctrl: ['', Validators.required],
      first2Ctrl: ['', Validators.required],
      first3Ctrl: ['', Validators.required],
      first4Ctrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      second1Ctrl: ['', Validators.required],
      second2Ctrl: ['', Validators.required],
      second3Ctrl: ['', Validators.required],
      second4Ctrl: ['', Validators.required],
      second5Ctrl: ['', Validators.required],
      second6Ctrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      third1Ctrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourth1Ctrl: ['', Validators.required],
    });
  }

  sign()
    {
      console.log(this.firstFormGroup.value);
    }

}
