import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private _helper:HelperService
  ) { }

  ngOnInit(): void {
  this._helper.addComponentname("aboutus"); 

  }

}
