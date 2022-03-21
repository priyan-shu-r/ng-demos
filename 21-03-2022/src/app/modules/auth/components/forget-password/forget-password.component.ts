import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfirmedValidator } from './custom-validators';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  passwordInfo = ['An uppercase character', 'A lowercase character', 'A number', 'A special character'];

  show = true;

  showBtn = true;

  infoData = ['An uppercase character','A lowercase character','A number','A special character'];

  form : FormGroup = new FormGroup({});

  constructor(private FB:FormBuilder){
    this.form = FB.group({
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{9,64})')]],
      reTypePassword: ['',[Validators.required]],
      check :['']
    },
    {
      validator: ConfirmedValidator('password','reTypePassword'),
    })

  }

  ngOnInit(): void {
    
  }

  logData() {
    console.log(this.form.value);
  }

  get f(){
    return this.form.controls;
  }
  get password(){
    return this.form.get('password');
  }

}
