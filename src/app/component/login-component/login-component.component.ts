import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder, private _router: Router,private _helper:HelperService) {}

  ngOnInit(): void {
    this.loginPage = "login";
    this.loginForm = this._formBuilder.group({
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      password: new FormControl("", [Validators.required]),
    });
  //  this._helper.componentName = "login"; 
  }

  
  loginPage: string = "";

  get l() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if(this.loginForm.value.email ==="admin@gmail.com" && this.loginForm.value.password ==="Admin" ){
      this._router.navigate(['/admin/waitlist'])
      // alert(
      //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.loginForm.value, null, 4)
      // );
    }
    // display form values on success
  }

}
