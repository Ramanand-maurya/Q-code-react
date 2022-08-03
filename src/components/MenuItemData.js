const MenuItemData = [
    {
        SubMenu: false,
        MegaMenu: false,
        MenuItemName:"Home",
        MenuItemLink:"/",
        ChildMenu:[],
    },
    {
        SubMenu:false,
        MegaMenu:false,
        MenuItemName:"About us",
        MenuItemLink:"/about",
        ChildMenu:[
            {
                SubMenu: false,
                MenuItemName: "About1",
                MenuItemLInk: "/about",
              },
              {
                SubMenu: false,
                MenuItemName: "About2",
                MenuItemLInk: "/about",
              },
              {
                SubMenu: false,
                MenuItemName: "About3",
                MenuItemLInk: "/about",
              },
        ],
    },
    {
        SubMenu:false,
        MegaMenu:true,
        MenuItemName:"Services",
        MenuItemLink:"",
        ChildMenu:[
            {
                SubMenu:true,
                MenuItemName:"Company",
                MenuItemLink:"/",
                ChildMenuInner:[
                    {
                        SubMenu:false,
                        MenuItemName:"About",
                        MenuItemLink:"about",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Mission",
                        MenuItemLink:"/mission",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Community",
                        MenuItemLink:"/community",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Help",
                        MenuItemLink:"/help",
                    },
                ],
            },
            {
                SubMenu:true,
                MenuItemName:"Media",
                MenuItemLink:"/",
                ChildMenuInner:[
                    {
                        SubMenu:false,
                        MenuItemName:"News",
                        MenuItemLink:"/news",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Events",
                        MenuItemLink:"/events",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Blog",
                        MenuItemLink:"/blog",
                    },
                ],
            },
            {
                SubMenu:true,
                MenuItemName:"Careers",
                MenuItemLink:"/",
                ChildMenuInner:[
                    {
                        SubMenu:false,
                        MenuItemName:"New Opportunities",
                        MenuItemLink:"/opportunities",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Life @ Company",
                        MenuItemLink:"/lifeCompany",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Why Join Us?",
                        MenuItemLink:"/whyJoinUs",
                    },
                ],
            },
            {
                SubMenu:true,
                MenuItemName:"Information",
                MenuItemLink:"/",
                ChildMenuInner:[
                    {
                        SubMenu:false,
                        MenuItemName:"Return Policy",
                        MenuItemLink:"/returnPolicy",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Privecy Policy",
                        MenuItemLink:"/privecyPolicy",
                    },
                    {
                        SubMenu:false,
                        MenuItemName:"Terms & Conditions",
                        MenuItemLink:"/termsConditions",
                    },
                ],
            },
        ],
    },
    {
        SubMenu:false,
        MegaMenu:false,
        MenuItemName:"Contact us",
        MenuItemLink:"contact",
        ChildMenu:[],
    }
];
export default MenuItemData;