import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InViewPortService } from '../in-view-port.service';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  changeImg = false;

  constructor(
    public navigation: NavigationService,
    public inviewport: InViewPortService
  ) {}

  navOpened = false;

  ngOnInit(): void {}
  
 toggleNav(event) {
      console.log(event);
      this.navOpened = !this.navOpened;
    }

}
