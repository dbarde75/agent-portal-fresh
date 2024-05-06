import { lazy } from 'react';

// project-imports
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
// import AuthGuard from 'utils/route-guard/AuthGuard';

import Dashboard from 'menu-items/dashboard';

const AppVendorList = Loadable(lazy(() => import('pages/vendor/list')));
const AppVendorCard = Loadable(lazy(() => import('pages/vendor/card')));

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
// const Dashboard = Loadable(lazy(() => import('menu-items/dashboard/Dashboard')));

//Products
const Products = Loadable(lazy(() => import('pages/products/product')));
// const ProductDetails = Loadable(lazy(() => import('pages/products/product-details')));
const ProductList = Loadable(lazy(() => import('pages/products/products-list')));
// const Checkout = Loadable(lazy(() => import('pages/products/checkout')));
const AddProduct = Loadable(lazy(() => import('pages/products/add-product')));

//agents
const AgentList = Loadable(lazy(() => import('pages/agent/list')));

//profile
const Profile = Loadable(lazy(() => import('pages/profiles/user')));
//acount
const AccountProfile = Loadable(lazy(() => import('pages/profiles/account')));
const AccountTabProfile = Loadable(lazy(() => import('sections/apps/profiles/account/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/account/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('sections/apps/profiles/account/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('sections/apps/profiles/account/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('sections/apps/profiles/account/TabRole')));
const AccountTabSettings = Loadable(lazy(() => import('sections/apps/profiles/account/TabSettings')));

// ==============================|| MAIN ROUTES ||=====================s========= //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        // <AuthGuard>
        <MainLayout />
        // </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'vendor',
          children: [
            {
              path: 'vendor-list',
              element: <AppVendorList />
            },
            {
              path: 'vendor-card',
              element: <AppVendorCard />
            }
          ]
        },
        {
          path: 'products',
          children: [
            {
              path: 'products',
              element: <Products />
            },
            // {
            //   path: 'product-details/:id',
            //   element: <ProductDetails />
            // },
            {
              path: 'product-list',
              element: <ProductList />
            },
            {
              path: 'add-new-product',
              element: <AddProduct />
            },
            // {
            //   path: 'checkout',
            //   element: <Checkout />
            // }
          ]
        },
        {
          path: 'agent',
          children: [
            {
              path: 'agent-list',
              element: <AgentList />
            }
          ]
        },
        {
          path: 'profile',
          children: [
            {
              path: 'user',
              element: <Profile />
            },
            {
              path: 'account',
              element: <AccountProfile />,
              children: [
                {
                  path: 'basic',
                  element: <AccountTabProfile />
                },
                {
                  path: 'personal',
                  element: <AccountTabPersonal />
                },
                {
                  path: 'my-account',
                  element: <AccountTabAccount />
                },
                {
                  path: 'password',
                  element: <AccountTabPassword />
                },
                {
                  path: 'role',
                  element: <AccountTabRole />
                },
                {
                  path: 'settings',
                  element: <AccountTabSettings />
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};

export default MainRoutes;
