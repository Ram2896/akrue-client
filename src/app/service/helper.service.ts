import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  // componentName: string = "";
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  addComponentname(name : string) {
    localStorage.setItem("name",name);
  }

  getComponentname() {
    let componentName=localStorage.getItem("name");
    if(componentName === "login"){
      return true;
    }
  }
  //   addComponentClass(name: string) {

  //     this.componentName = "name";
  //   }
}
