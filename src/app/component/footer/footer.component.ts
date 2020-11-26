import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private _helper:HelperService
  ) { }

  ngOnInit(): void {
    AOS.init({
      once: true,
      duration: 300,
      offset: 200,
      easing: "linear",
    });
    // this._helper.addComponentname("footer"); 
  }

}
