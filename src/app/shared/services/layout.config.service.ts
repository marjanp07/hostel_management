import { Injectable } from '@angular/core';
import {
  InConfiguration,
  SidebarState,
} from '../interfaces/layout.config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public configData: Partial<InConfiguration> = {
    lang: { language: 'EN', textDirection: 'ltr' },
    layout: {
      theme: 'light',
      themeClass: 'theme-light',
      colorTheme: {
        primary: '',
        accent: '',
        secondary: '',
      },
      skins: 'bordered',
      sidebar: {
        semiDarkMenu: false,
        state: {
          closed: false,
          mobileView: false,
          pinned: false,
          menuBtnClosed: false,
        },
      },
    },
  };

  // Sidebar
  public get SidebarState(): Partial<SidebarState> {
    return this.configData.layout!.sidebar.state;
  }

  public set SidebarStateSetter(State: Partial<SidebarState>) {
    this.configData.layout!.sidebar.state = State;
  }

  // Theme
  public get CurrentTheme(): 'theme-light' | 'theme-dark' {
    return this.configData.layout!.themeClass;
  }

  public set CurrentThemeSetter(themeClass: 'theme-light' | 'theme-dark') {
    this.configData.layout!.themeClass = themeClass;
  }

  setConfigData() {}
}
