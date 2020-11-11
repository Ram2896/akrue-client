import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/helper.service';

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
    this._helper.addComponentname("footer"); 
  }

}
