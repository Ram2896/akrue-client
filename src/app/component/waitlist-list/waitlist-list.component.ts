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
  ngOnInit(): void {
    this.userId = this._activeRoute.snapshot.paramMap.get("userId");
    this.getWaitlist(this.userId);

    this.wList = [
      {
        firstName: "Ram",
        lastName: "Chari",
        university: "PMU",
        graduatingYear: "2021",
        sport: "Shuttle",
        gender: "Male",
        instaUserName: "@ram96",
        refererEmail: "haris@gmail.com",
        email: "ram96@gmail.com",
      },
    ];
    this._helper.addComponentname("userlist");
  }

  getWaitlist(userid) {
    this._api.getWaitList(userid).subscribe((data) => {
      this.wList = data;
    });
  }
  logout(){
    this._api.logout();
    this._router.navigate(["/admin/login"])
  }
  download(){
    this._jtocsv.downloadFile(this.wList, 'jsontocsv');
  }
}
