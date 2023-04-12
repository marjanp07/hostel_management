export interface InConfiguration {
  layout: {
    themeClass: 'theme-light' | 'theme-dark';
    theme: 'light' | 'dark';
    skins: 'default' | 'bordered';
    colorTheme: ColorTheme;
    sidebar: {
      state: Partial<SidebarState>;
      semiDarkMenu: boolean;
    };
  };
  lang: {
    language: 'EN' | 'AR';
    textDirection: 'rtl' | 'ltr';
  };
}

export interface SidebarState {
  closed: boolean;
  mobileView: boolean;
  pinned: boolean;
  menuBtnClosed: boolean;
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
}
