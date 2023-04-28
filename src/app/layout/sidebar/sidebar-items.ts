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
        path: 'hostel/room',
        title: ' room',
        iconType: 'material-icons-two-tone',
        icon: 'admission',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [],
      },
      // {


      //   path: 'hostel/room/add_room',
      //   title: 'Add room/Block',
      //   iconType: 'material-icons-two-tone',
      //   icon: 'admission',
      //   class: '',
      //   groupTitle: false,
      //   badge: '',
      //   taget: true,
      //   badgeClass: '',
      //   SubMenus: [],
      // },
      {
        path: 'hostel/assets',
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
    icon: 'admission',
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
        SubMenus: [
        {
          path: 'hostel/admissionEntry/allot_room',
          title: 'Allot Room',
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

      {
        path: 'hostel/room_allot',
        title: 'Room Allot',
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
        path: 'hostel/roomvacate',
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
        path: 'hostel/studentdetails',
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
      icon: 'students',
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
        icon: 'report',
        class: '',
        groupTitle: false,
        badge: '',
        taget: true,
        badgeClass: '',
        SubMenus: [
          {
            path: 'hostel/messfee',
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
            path: 'hostel/hostel_fee',
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
            path: 'hostel/fee_reduction',
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
          icon: 'transaction',
          class: '',
          groupTitle: false,
          badge: '',
          taget: true,
          badgeClass: '',
          SubMenus: [
            {
              path: 'hostel/total_bill',
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
