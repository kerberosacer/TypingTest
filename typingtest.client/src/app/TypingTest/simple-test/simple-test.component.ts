import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrl: './simple-test.component.css'
})
export class SimpleTestComponent implements OnInit {
    currentDuration: number = 1;
  constructor() { }
  ngOnInit(): void {

  }
}
