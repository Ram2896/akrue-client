import { AfterViewInit, Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
import { ApiServService } from "src/app/service/api-serv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { JsontocsvService } from "src/app/service/jsontocsv.service";
import { FormBuilder } from "@angular/forms";
import { element } from 'protractor';
import { formatDate } from '@angular/common';

@Component({
  selector: "app-waitlist-list",
  templateUrl: "./waitlist-list.component.html",
  styleUrls: ["./waitlist-list.component.scss"],
})
export class WaitlistListComponent implements OnInit {

  wList: any = [];
  filteredwList: any = [];
  userId: any;
  subWlist: boolean = false;
  dateHide: boolean = false;

  constructor(
    private _helper: HelperService,
    private _api: ApiServService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _jtocsv: JsontocsvService,
    public fb: FormBuilder
  ) {
    this.wList = [];
    this.filteredwList= [];
  }

  ngOnInit(): void {
    this._activeRoute.data.subscribe((data) => console.log(""));
    this.userId = this._activeRoute.snapshot.paramMap.get("userId");
    this.getWaitlist(this.userId);

    setTimeout(() => {
      this.getWaitlist(this.userId);
    }, 2000);
    this.wList = [
      {
        firstName: "Akrue",
        lastName: "sports",
        university: "OXFORD",
        graduatingYear: "2021",
        sport: "Shuttle",
        gender: "Male",
        instaUserName: "@akrue",
        refererEmail: "akrue@gmail.com",
        email: "akrueadmin@gmail.com",
      },
    ];
    this._helper.addComponentname("userlist");
  }

  adminForm = this.fb.group({
    type: ["All"],
    from: [new Date()],
    to: [new Date()],
  });

  onSubmit() {
    // alert(JSON.stringify(this.adminForm.value));
  }

  hidedate() {
    let from = new Date(this.adminForm.value.from);
    let to = new Date(this.adminForm.value.to);
    this.filteredwList = this.wList;
    if (this.adminForm.value.type === "select") {
      this.dateHide = true;
      // if (from != new Date()  && to instanceof Date) {
        // this.filterWlist();
      // }
    } else {
      this.dateHide = false;
      this.filteredwList = this.wList;
    }
  }

  // reset(){
  //   this.adminForm.reset();
  //   this.adminForm.value.type ="All"
  // }
  getWaitlist(userid) {
    this.subWlist = true;
    this._api.getWaitList(userid).subscribe(
      (data) => {
        // console.log("inside",data);
        this.wList = data;

        this.filteredwList = this.wList;
        this.subWlist = true;
        // debugger;
      },
      (error) => {
        this.subWlist = false;
      }
    );
    // console.log(this.filteredwList);
  }


  filterWlist() {
    let from = new Date(this.adminForm.value.from);
    from.setHours(0);
    let to = new Date(this.adminForm.value.to);
to.setHours(24);
    if (this.adminForm.value.type != "All") {
      this.filteredwList = [];
      this.filteredwList = this.wList.filter((element) => {
        let created = new Date(element.createdAt);
        // console.log("from", from);
        // console.log("To", to);
        // console.log("Created", created);
        // console.log(created >= from && created <= to);
        if (created >= from && created <= to) {
          return element;
        }
      });
      // console.log("fWlist", this.filteredwList);
    }
  }

  logout() {
    this._api.logout();
    this._router.navigate(["/admin/login"]);
  }
  download() {
    this.filteredwList = this.filteredwList.filter((element)=>{
      element.createdAt = formatDate(element.createdAt, 'yyyy/MM/dd', 'en');
      return element;
      // element.createdAt = element.createdAt()
    })
    // console.log(this.filteredwList);
    this._jtocsv.downloadFile(this.filteredwList, "Waitlist");
  }
}
