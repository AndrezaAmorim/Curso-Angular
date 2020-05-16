import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // title = 'Seja Bem Vindo!';

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
