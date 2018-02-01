import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-hyb-list',
  templateUrl: './hyb-list.component.html',
  styleUrls: ['./hyb-list.component.css']
})
export class HybListComponent implements OnInit {

  constructor(private _login :LoginService) { }

  ngOnInit() {
  }

}
