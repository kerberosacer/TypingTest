import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  sideNavStatus: boolean = true;

  constructor() { }

  ngOnInit() {

  }
  menuButtonClicked() {
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggled.emit(this.sideNavStatus);
  }
}
