import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HelperService } from 'src/app/service/helper.service';
import * as AOS from 'aos';

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder,
    private _helper:HelperService

    ) {}

  ngOnInit(): void {
    AOS.init();
    this.contactForm = this._formBuilder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl("", [Validators.required]),
    });
  this._helper.addComponentname("contactus"); 

  }

  get c() {
    return this.contactForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.contactForm.value, null, 4)
    );
  }
}
