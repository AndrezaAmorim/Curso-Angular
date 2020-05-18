import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  // title = 'Seja Bem Vindo!';

  @Input() title: string;

  constructor() {
    console.log('construtor');
  }

  ngOnChanges(){
    console.log('ngOnChenges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(){
    console.log('AfterViewInit');
  }

  ngOnDestroy(){
    console.log('OnDestroy');
  }
}
