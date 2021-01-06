import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ApiServService } from 'src/app/service/api-serv.service';
import { HelperService } from "src/app/service/helper.service";
@Component({
  selector: "app-login-component",
  templateUrl: "./login-component.component.html",
  styleUrls: ["./login-component.component.scss"],
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalidLogin =true;
  user: any ={};
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _helper: HelperService,
    private _api :ApiServService
  ) {}

  ngOnInit(): void {
    this.loginPage = "login";
    this.loginForm = this._formBuilder.group({
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      password: new FormControl("", [Validators.required]),
    });
    this._helper.addComponentname("login");
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

    this.user = {email :this.loginForm.value.email, password : this.loginForm.value.password };
    this._api.login(this.user).subscribe(
      data=>{
        sessionStorage.setItem("TOKEN", `Bearer ${data.token}`);
        sessionStorage.setItem("USER", JSON.stringify(data.user));
        this._router.navigate([]).then(result => {  window.open(`/#/admin/waitlist/${data.user._id}`, '_self');
        location.reload();
      });
        // debugger;
        // console.log(data);
        this.invalidLogin = false;
      }, error=>{
        console.log(error);
        this.invalidLogin = true;
      }
    )
    
     
   
    // display form values on success
  }
}
