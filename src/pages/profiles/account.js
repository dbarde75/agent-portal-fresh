import { useState } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { DocumentText, Lock, Profile, Profile2User, Setting3, TableDocument } from 'iconsax-react';

// ==============================|| PROFILE - ACCOUNT ||============================== //

const AccountProfile = () => {
  const { pathname } = useLocation();

  let selectedTab = 0;
  switch (pathname) {
    case '/profile/account/personal':
      selectedTab = 1;
      break;
    case '/profile/account/my-account':
      selectedTab = 2;
      break;
    case '/profile/account/password':
      selectedTab = 3;
      break;
    case '/profile/account/role':
      selectedTab = 4;
      break;
    case '/profile/account/settings':
      selectedTab = 5;
      break;
    case '/profile/account/basic':
    default:
      selectedTab = 0;
  }

  const [value, setValue] = useState(selectedTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <MainCard border={false}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
          <Tab label="Profile" component={Link} to="/profile/account/basic" icon={<Profile />} iconPosition="start" />
          <Tab label="Personal" component={Link} to="/profile/account/personal" icon={<DocumentText />} iconPosition="start" />
          <Tab label="My Account" component={Link} to="/profile/account/my-account" icon={<TableDocument />} iconPosition="start" />
          <Tab label="Change Password" component={Link} to="/profile/account/password" icon={<Lock />} iconPosition="start" />
          <Tab label="Role" component={Link} to="/profile/account/role" icon={<Profile2User />} iconPosition="start" />
          <Tab label="Settings" component={Link} to="/profile/account/settings" icon={<Setting3 />} iconPosition="start" />
        </Tabs>
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <Outlet />
      </Box>
    </MainCard>
  );
};

export default AccountProfile;
