import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
import { ApiServService } from "src/app/service/api-serv.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _helper: HelperService,
    private _api: ApiServService
  ) {}
  subBtnText: string = "Submit";
  ngOnInit(): void {
    this.welcome();
    this.contactForm = this._formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      message: new FormControl("", [Validators.required]),
    });
    this._helper.addComponentname("contactus");
  }

  get c() {
    return this.contactForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.subBtnText = "Loading...";
    // console.log(this.contactForm.value)

    this._api.contactUsMail(this.contactForm.value).subscribe(
      (data) => {
        this.subBtnText = "Sent";
        this.contactForm.reset();
        this.submitted = false;
      },
      (error) => {
        // console.log(error);
        this.submitted = false;
        this.subBtnText = "Try Again";
      }
    );

    // display form values on success
    // alert(
    //   "SUCCESS!! :-)\n\n" + JSON.stringify(this.contactForm.value, null, 4)
    // );
  }
  welcome() {
    this._api.welcome().subscribe((data) => {
      console.log(data);
    });
  }
}
