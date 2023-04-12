import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  SIDEBAR_INITIAL_WIDTH,
  SIDEBAR_MAX_WIDTH,
} from 'src/app/shared/constants/layout.constants';
import { ConfigService } from 'src/app/shared/services/layout.config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor(public ConfigServe: ConfigService) {}
  sidebar: HTMLElement | null = null;
  list: any;
  SIDEBAR_WIDTH_KEY: string = '--sidebar-width';
  SECTION_OFFSET: string = '--section-offset';
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.sidebar = document.querySelector('.sidebar');
    this.list = document.querySelector('.list');
  }

  toggleSidebar() {
    (<HTMLElement>document.querySelector('#menu-btn')).classList.toggle('open');
    console.log(this.sidebar);

    if (this.sidebar!.dataset['closed'] === 'true') {
      this.sidebar!.dataset['closed'] = 'false';
      this.ConfigServe.SidebarStateSetter = {
        ...this.ConfigServe.SidebarState,
        closed: false,
        menuBtnClosed: true,
        pinned: true,
      };
      this.changeRootVariable(this.SIDEBAR_WIDTH_KEY, SIDEBAR_MAX_WIDTH);
      this.changeRootVariable(
        this.SECTION_OFFSET,
        this.ConfigServe.SidebarState.mobileView ? 0 : SIDEBAR_MAX_WIDTH
      );
      this.sidebar!.style.width = `${SIDEBAR_MAX_WIDTH}px`;
      this.sidebar!.classList.add('pinned');
      // this.GetPreviousSubmenuOpen();
    } else {
      this.sidebar!.dataset['closed'] = 'true';

      this.sidebar!.style.width = `${
        this.ConfigServe.SidebarState.mobileView ? 0 : SIDEBAR_INITIAL_WIDTH
      }px`;
      this.sidebar!.classList.remove('pinned');
      this.changeRootVariable(
        this.SIDEBAR_WIDTH_KEY,
        this.ConfigServe.SidebarState.mobileView ? 0 : SIDEBAR_INITIAL_WIDTH
      );
      this.changeRootVariable(
        this.SECTION_OFFSET,
        this.ConfigServe.SidebarState.mobileView ? 0 : SIDEBAR_INITIAL_WIDTH
      );
      for (let i = 0; i < this.list.children.length; i++) {
        this.list.children[i].children[1].style.maxHeight = '0px';
      }
      this.ConfigServe.SidebarStateSetter = {
        ...this.ConfigServe.SidebarState,
        closed: true,
        menuBtnClosed: false,
        pinned: false,
      };
    }
  }

  changeRootVariable(key: string, value: any) {
    (<HTMLElement>document.querySelector('body')).style.setProperty(
      key,
      `${value}px`
    );
  }
  getRootVariableValue(key: string) {
    getComputedStyle(document.querySelector('body')!).getPropertyValue(key);
  }

  userDefaultImage(event: any) {
    event.target.src = 'assets/svg/avatar/defaultUser.svg';
  }
}
