// import { useMemo } from 'react';

// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project-imports
// import Search from './Search';
// import Message from './Message';
import Profile from './Profile';
// import Localization from './Localization';
// import Notification from './Notification';
import MobileSection from './MobileSection';
// import MegaMenuSection from './MegaMenuSection';

import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';
import { MenuOrientation } from 'config';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { menuOrientation } = useConfig();//i18n,

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const localization = useMemo(() => <Localization />, [i18n]);

  // const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
        {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
        {/* {!downLG && <Search />} */}
        {/* {!downLG && megaMenu} */}
        {/* {!downLG && localization} */}
        {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <Box display="flex" justifyContent="flex-end" width="100%">
        {/* <Notification /> */}
        {/* <Message /> */}
        {!downLG && <Profile />}
        {downLG && <MobileSection />}
      </Box >
    </>
  );
};

export default HeaderContent;
