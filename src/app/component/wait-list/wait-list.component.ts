import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
import { ApiServService } from 'src/app/service/api-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-wait-list",
  templateUrl: "./wait-list.component.html",
  styleUrls: ["./wait-list.component.scss"],
})
export class WaitListComponent implements OnInit {
  waitListForm: FormGroup;
  submitted = false;
  wlsbText = "Submit";
  constructor(
    private _formBuilder: FormBuilder,
    private _helper: HelperService,
    private _api : ApiServService,
    private _router: Router,
  ) {}

  waitList : any ={};
  ngOnInit(): void {
    this.waitListForm = this._formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        university: ["", Validators.required],
        graduatingYear: ["", Validators.required],
        sport: ["", Validators.required],
        gender: ["", Validators.required],
        instaUsername: ["", Validators.required],
        refererEmail: ["", [Validators.required, Validators.email]],
        userEmail: ["", [Validators.required, Validators.email]],
        confirmEmail: ["", [Validators.required, Validators.email]],
      },
      {
        validator: this._helper.MustMatch("userEmail", "confirmEmail"),
      }
    );
    this._helper.addComponentname("waitlist");
  }

  get f() {
    return this.waitListForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.waitListForm.invalid) {
      return;
    }
    this.wlsbText = "Loading..."

    this.waitList= this.waitListForm.value;
    // display form values on success
    console.log(this.waitList);
    this._api.createWaitList(this.waitList).subscribe(
      data=> {
        console.log("success",data);
        this.onReset();
        this._router.navigate([`success`]);

      }, 
      error =>{
        console.log(error);
      }
    )
    // alert(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.waitListForm.value, null, 4)
    // );
  }

  onReset() {
    this.submitted = false;
    this.waitListForm.reset();
  }
}
