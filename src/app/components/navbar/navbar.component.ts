import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = true;

  rutas: Object[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Team',
      path: '/team',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
