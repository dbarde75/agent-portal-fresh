// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DocumentCode2,
     OceanProtocol,
    Level,
    ShieldCross, 
    InfoCircle, 
    I24Support, 
    Driving,
    KyberNetwork,
    Messages2,
    Calendar1,
    Kanban,
    Profile2User,
    Bill,
    UserSquare,
    ShoppingBag,
    HomeTrendUp,
    Receipt2
    
    } from 'iconsax-react';

// icons
const icons = {
  samplePage: DocumentCode2,
  menuLevel: OceanProtocol,
  menuLevelSubtitle: Level,
  disabledMenu: ShieldCross,
  chipMenu: InfoCircle,
  documentation: I24Support,
  roadmap: Driving,
  applications: KyberNetwork,
  chat: Messages2,
  calendar: Calendar1,
  kanban: Kanban,
  customer: Profile2User,
  invoice: Bill,
  profile: UserSquare,
  ecommerce: ShoppingBag,
  dashboard: HomeTrendUp,
  vendor:Receipt2
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const itemSidebar = {
  id: 'group-applications',
  // title: <FormattedMessage id="applications" />,
  icon: icons.applications,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.dashboard,
      breadcrumbs: false
    },
    {
      id: 'Vendor',
      title: <FormattedMessage id="Vendor" />,
      type: 'collapse',
      icon: icons.vendor,
      children: [
        {
          id: 'vendor-list',
          title: <FormattedMessage id="Vendor list" />,
          type: 'item',
          url: '/vendor/vendor-list'
        }
      ]
    },
    {
      id: 'Products',
      title: <FormattedMessage id="Products" />,
      type: 'collapse',
      icon: icons.ecommerce,
      children: [
        {
          id: 'products',
          title: <FormattedMessage id="products" />,
          type: 'item',
          url: '/products/products',
          
        },
        {
          id: 'product-details',
          title: <FormattedMessage id="product-details" />,
          type: 'item',
          url: '/apps/e-commerce/product-details/1',
        },
        {
          id: 'product-list',
          title: <FormattedMessage id="product-list" />,
          type: 'item',
          url: '/products/product-list',
        },
        {
          id: 'add-new-product',
          title: <FormattedMessage id="add-new-product" />,
          type: 'item',
          url: '/products/add-new-product'
        }
      ]
    },
    {
      id: 'Agent',
      title: <FormattedMessage id="Agent" />,
      type: 'collapse',
      icon: icons.customer,
      children: [
        {
          id: 'agent-list',
          title: <FormattedMessage id="Agent List" />,
          type: 'item',
          url: '/agent/agent-list'
        },
      ]
    },
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      url: '/apps/chat',
      icon: icons.chat,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/apps/calendar',
      icon: icons.calendar
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.profile,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          url: '/profile/user',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          url: '/profile/account',
        }
      ]
    },

 
  ]
};

export default itemSidebar;
