import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: "app-wait-list",
  templateUrl: "./wait-list.component.html",
  styleUrls: ["./wait-list.component.scss"],
})
export class WaitListComponent implements OnInit {
  waitListForm: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder , 
    private _helper:HelperService) {}

  ngOnInit(): void {
    this.waitListForm = this._formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        university:["", Validators.required],
        graduatingYear:["", Validators.required],
        sports:["", Validators.required],
        gender:["", Validators.required],
        instaUserName:["", Validators.required],
        refererEmail: ["", [Validators.required, Validators.email]],
        email: ["", [Validators.required, Validators.email]],
        confirmEmail: ["", Validators.required],
      },
      {
        validator: this._helper.MustMatch('email', 'confirmEmail')
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

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.waitListForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.waitListForm.reset();
  }
}
