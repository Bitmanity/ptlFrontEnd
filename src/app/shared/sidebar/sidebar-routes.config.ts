import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Master Data', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/setupCompany', title: 'Create Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/charts-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/unit-of-measurement', title: 'Unit of Measurement', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/raw-product', title: 'Raw Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/finished-product', title: 'Finished Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/charges-master', title: 'Charges Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/branch-master', title: 'Branch Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/bank-master', title: 'Bank Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/godown-master', title: 'Godown Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/dashboard/bill-of-material', title: 'Bill of Material', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            // {
            //     path: '/inventory-master/stock-item-master', title: 'S', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            // },
            
        ]
    },
    {
        path: '', title: 'Inventory Master', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/inventory-master/stock-item-master', title: 'Stock Item Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },

   
];
