import { RouteInfo } from 'src/app/shared/interfaces/menu.interface';

export const StudentRoute: RouteInfo[] = [
  {
    path: '',
    title: 'Master',
    iconType: 'material-icons-two-tone',
    icon: 'application',
    class: '',
    groupTitle: false,
    badge: '',
    taget: true,
    badgeClass: '',
    SubMenus: [
      {
        path: 'https://ariu.edu.qa/about-ariu/admission-requirements/',
        title: 'Add room/Block',
        iconType: 'material-icons-two-tone',
        icon: 'admission',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
      {
        path: 'https://ariu.edu.qa/',
        title: 'Assets',
        iconType: 'material-icons-two-tone',
        icon: 'application',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
      
    ],
  },
{

  path: '',
    title: 'Admission',
    iconType: 'material-icons-two-tone',
    icon: 'application',
    class: '',
    groupTitle: false,
    badge: '',
    taget: true,
    badgeClass: '',
    SubMenus: [
      {
        path: 'hostel/admissionEntry',
        title: 'Student registration',
        iconType: 'material-icons-two-tone',
        icon: 'admission',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
      {
        path: 'hostel/hi',
        title: 'Room vacate',
        iconType: 'material-icons-two-tone',
        icon: 'application',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
      {
        path: 'https://ariu.edu.qa/',
        title: 'Student details',
        iconType: 'material-icons-two-tone',
        icon: 'about',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
    ],
  },


  {

    path: '',
      title: 'Student',
      iconType: 'material-icons-two-tone',
      icon: 'application',
      class: '',
      groupTitle: false,
      badge: '',
      taget: true,
      badgeClass: '',
      SubMenus: [
        {
          path: 'hostel/attendance',
          title: 'Student attendance',
          iconType: 'material-icons-two-tone',
          icon: 'admission',
          class: '',
          groupTitle: false,
          badge: '',
          taget: true,
          badgeClass: '',
          SubMenus: [],
        },
        {
          path: 'hostel/outpass',
          title: 'Outpass',
          iconType: 'material-icons-two-tone',
          icon: 'application',
          class: '',
          groupTitle: false,
          badge: '',
          taget: true,
          badgeClass: '',
          SubMenus: [],
        },
        {
          path: 'hostel/leave',
          title: 'Leave',
          iconType: 'material-icons-two-tone',
          icon: 'about',
          class: '',
          groupTitle: false,
          badge: '',
          taget: true,
          badgeClass: '',
          SubMenus: [],
        },
      ],
    },
  


    {

      path: '',
        title: 'Fee management',
        iconType: 'material-icons-two-tone',
        icon: 'application',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [
          {
            path: 'https://ariu.edu.qa/about-ariu/admission-requirements/',
            title: 'Mess fee',
            iconType: 'material-icons-two-tone',
            icon: 'admission',
            class: '',
            groupTitle: false,
            badge: '',
            taget: true,
            badgeClass: '',
            SubMenus: [],
          },
          {
            path: 'https://ariu.edu.qa/',
            title: 'Hostel fee',
            iconType: 'material-icons-two-tone',
            icon: 'application',
            class: '',
            groupTitle: false,
            badge: '',
            taget: true,
            badgeClass: '',
            SubMenus: [],
          },
          {
            path: 'https://ariu.edu.qa/',
            title: 'Fee reduction',
            iconType: 'material-icons-two-tone',
            icon: 'about',
            class: '',
            groupTitle: false,
            badge: '',
            taget: true,
            badgeClass: '',
            SubMenus: [],
          },
        ],
      },
    

      {

        path: '',
          title: 'Bill generation',
          iconType: 'material-icons-two-tone',
          icon: 'application',
          class: '',
          groupTitle: false,
          badge: '',
          taget: true,
          badgeClass: '',
          SubMenus: [
            {
              path: 'https://ariu.edu.qa/about-ariu/admission-requirements/',
              title: 'Genarate total bill',
              iconType: 'material-icons-two-tone',
              icon: 'admission',
              class: '',
              groupTitle: false,
              badge: '',
              taget: true,
              badgeClass: '',
              SubMenus: [],
            },
            
            
          ],
        },
      







];
