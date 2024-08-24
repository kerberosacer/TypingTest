import { Component, OnInit } from '@angular/core';
import { Navigation } from '../models/models';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  navigationList: Navigation[];
  constructor() {
    this.navigationList = [
      {
        name: 'simple test',
        path: 'simple',
      },
      {
        name: 'advance test',
        path: 'advanced',
      },
      {
        name: 'achievements',
        path: 'achievements',
      },
      {
        name: 'your rank',
        path: 'rank',
      },
      {
        name: 'statistics',
        path: 'statistics',
      },
      {
        name: 'about us',
        path: 'aboutus',
      }
    ]
  }
  ngOnInit(): void { }
}
