import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidebarIconConstant } from 'src/app/shared/constants/sidebarIcons.constants';
import {
  GroupMenuItems,
  RouteInfo,
  SidebarMenuModel,
  SubMenuItems,
} from 'src/app/shared/interfaces/menu.interface';
import { StudentRoute } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [],
})
export class SidebarComponent implements AfterViewInit {
  constructor(
    public sanitizer: DomSanitizer,
    public changeDetectorRef: ChangeDetectorRef
  ) {}
  list: any;
  sidebar: HTMLElement | null = null;
  menuBtn: HTMLElement | null = null;
  sidebarList: SidebarMenuModel[] & RouteInfo[] = [];
  sidebarIcons: any = SidebarIconConstant;
  hostelManagementRoutes = StudentRoute;

  ngAfterViewInit(): void {
    this.list = document.querySelector('.list') as any;
    this.sidebar = <HTMLElement>document.querySelector('.sidebar');
    this.menuBtn = <HTMLElement>document.querySelector('#menu-btn');
    this.GetmenuLoaderByUser();
  }

  GetmenuLoaderByUser() {
    console.log(StudentRoute);

    let menu: SidebarMenuModel[] & RouteInfo[] = [];
    StudentRoute.forEach((item) => {
      let mainMenu = new GroupMenuItems('0', item.title, item.icon);

      item.SubMenus.forEach((subItem) => {
        let subMenu = new SubMenuItems(
          '0',
          subItem.title,
          subItem.path,
          subItem.icon
        );
        mainMenu.SubMenus.push(subMenu);
      });
      menu.push(mainMenu as any);
      this.sidebarList = <SidebarMenuModel[] & RouteInfo[]>(
        menu.filter((sidebarItem) => sidebarItem)
      );
      console.log(this.sidebarList);
    });
    this.changeDetectorRef.detectChanges();
    this.sidebarClassConfigSetup(this.sidebarList);
  }

  /* Sidebar Class and submenu layout config handler method */
  sidebarClassConfigSetup(sidebarList: SidebarMenuModel[] & RouteInfo[]) {
    sidebarList.forEach((item, index) => {
      if (item) {
        this.list!.children[index].children[1].dataset.maxheight =
          this.list.children[index].children[1].getBoundingClientRect().height;
        this.list.children[index].children[1].style.maxHeight = '0px';
      }
    });
  }
  ListItemClickHandler(e: any) {
    this.SidebarSubItemToggler(e);
    if (e.target.classList.value != 'list-item active') {
      for (let i = 0; i < this.list.childElementCount; i++) {
        i != Number(e.target.dataset.index)
          ? (this.list?.children[i].children[0].classList.remove('active'),
            (this.list.children[i].children[0].children[0].style.cssText =
              'fill: var(--sidebar-secondary-color);'),
            (this.list.children[i].children[1].dataset.expanded = 'false'),
            (this.list.children[i].children[1].style.maxHeight = '0px'))
          : (this.list.children[i].children[0].classList.add('active'),
            (this.list.children[i].children[0].children[0].style.cssText =
              'fill: var(--white);'));
      }
    }
  }
  // Sidebar Implementation Help Functions
  SidebarSubItemToggler(e: any) {
    console.log(e.target.nextSibling.dataset);

    if (this.sidebar!.dataset['closed'] == 'false') {
      if (e.target.nextSibling.dataset.expanded === 'true') {
        e.target.nextSibling.dataset.expanded = 'false';
        e.target.nextSibling.style.maxHeight = `0px`;
      } else {
        e.target.nextSibling.dataset.expanded = 'true';
        e.target.nextSibling.style.maxHeight = `${e.target.nextSibling.dataset.maxheight}px`;
      }
    }
  }

  SidebarSubItemClickHandler(
    itemIndex: number,
    subItemIndex: number,
    title: string
  ) {
    for (let i = 0; i < this.list.children?.length; i++) {
      for (
        let j = 0;
        j < this.list.children[i].children[1]?.children.length;
        j++
      ) {
        i == itemIndex && j == subItemIndex
          ? this.list.children[i].children[1]?.children[j].classList?.add(
              'active'
            )
          : this.list.children[i].children[1]?.children[j].classList?.remove(
              'active'
            );
      }
    }
  }
}
