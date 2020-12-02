import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
import { ApiServService } from "src/app/service/api-serv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { JsontocsvService } from 'src/app/service/jsontocsv.service';

@Component({
  selector: "app-waitlist-list",
  templateUrl: "./waitlist-list.component.html",
  styleUrls: ["./waitlist-list.component.scss"],
})
export class WaitlistListComponent implements OnInit {
  constructor(
    private _helper: HelperService,
    private _api: ApiServService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _jtocsv: JsontocsvService
  ) {}

  wList: any = [];
  userId: any;
  subWlist : boolean = false;
  ngOnInit(): void {
    this.userId = this._activeRoute.snapshot.paramMap.get("userId");
    console.log(this.userId, this.wList)
    this.getWaitlist(this.userId);


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

  getWaitlist(userid) {
    this._api.getWaitList(userid).subscribe((data) => {
      this.wList = data;
      console.log(this.wList)
      this.subWlist = true;
    },
    error=>{
      this.subWlist = false;
    });
  }
  logout(){
    this._api.logout();
    this._router.navigate(["/admin/login"])
  }
  download(){
    this._jtocsv.downloadFile(this.wList, 'Waitlist');
  }
}
