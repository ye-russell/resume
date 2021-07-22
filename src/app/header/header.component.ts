import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  public isMenu?: boolean;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 575px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMenu = true;
      } else {
        this.isMenu = false;
      }
    });
  }

  handleCollapse() {
    this.isMenuCollapsed = !this.isMenuCollapsed
  }
}
