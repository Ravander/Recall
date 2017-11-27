import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu = function() {
    this.isMenu = !this.isMenu;
  }

}
