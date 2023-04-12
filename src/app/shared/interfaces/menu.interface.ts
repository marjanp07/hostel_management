// Sidebar menu model
export interface RouteInfo {
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string;
  taget: boolean;
  badgeClass: string;
  SubMenus: RouteInfo[];
}

export class GroupMenuItems {
  PrivileageID: string;
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string;
  target: boolean;
  badgeClass: string;
  SubMenus: SubMenuItems[];
  constructor(
    grp_id: string,
    grp_name: string,
    url: string,
    path: string = ''
  ) {
    this.PrivileageID = grp_id;
    this.title = grp_name;
    this.icon = url;
    this.groupTitle = false;
    this.iconType = 'material-icons-two-tone';
    this.badge = '';
    this.badgeClass = '';
    this.path = path;
    this.target = false;
    this.class = 'menu-toggle';
    this.SubMenus = [];
  }
}
export class SubMenuItems extends GroupMenuItems {}

export interface SidebarMenuModel {
  PrivileageID: string;
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  badge: string;
  target: boolean;
  badgeClass: string;
  SubMenus: SidebarSubMenuModel[];
}

export interface SidebarSubMenuModel {
  PrivileageID: string;
  path: string;
  title: string;
  iconType: string;
  icon: string;
  class: string;
  groupTitle: boolean;
  target: boolean;
  badge: string;
  badgeClass: string;
  SubMenus: RouteInfo[];
  permissions: number[];
}
