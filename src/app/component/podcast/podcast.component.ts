import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/service/helper.service";

@Component({
  selector: "app-podcast",
  templateUrl: "./podcast.component.html",
  styleUrls: ["./podcast.component.scss"],
})
export class PodcastComponent implements OnInit {
  constructor(private _helper: HelperService) {}

  ngOnInit(): void {
    this._helper.addComponentname("podcast");
  }
}
