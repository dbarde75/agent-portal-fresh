// third-party
import { FormattedMessage } from 'react-intl';

// project-imports
import { useSelector } from 'store';

// assets
import { Home3, HomeTrendUp, Box1 } from 'iconsax-react';
import ButtonComponent from '../components/button/Index'

// import { Stack } from '@mui/material';///////
import { PopupTransition } from 'components/@extended/Transitions';

import AddVendor from 'sections/apps/vendor/AddVendor';

const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  components: Box1
};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
  const { menu } = useSelector((state) => state.menu);

  // const SubChildrenLis = (SubChildrenLis) => {
  //   return SubChildrenLis?.map((subList) => {
  //     return {
  //       ...subList,
  //       title: <FormattedMessage id={`${subList.title}`} />,
  //       // @ts-ignore
  //       icon: icons[subList.icon]
  //     };
  //   });
  // };

  const itemList = (subList) => {
    let list = {
      ...subList,
      title: <FormattedMessage id={`${subList.title}`} />,
      // @ts-ignore
      icon: icons[subList.icon]
    };

    if (subList.type === 'collapse' && subList.id !== 'dashboard') {
      list.children = SubChildrenLis(subList.children);
    }
    return list;
  };

  // const withoutMenu = menu?.children?.filter((item) => item.id !== 'no-menu');
  // const ChildrenList = withoutMenu?.map((subList) => {
  //   return itemList(subList);
  // });

  const dashboardMenu = menu?.children?.filter((item) => item.id === 'dashboard');
  const ChildrenList = dashboardMenu?.map((subList) => {
    return itemList(subList);
  });

  const menuList = {
    ...menu,
    title: <FormattedMessage id={`${menu.title}`} />,
    icon: icons[menu.icon],
    children: ChildrenList
  };

  return menuList;
};


import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,  Grid, TextField, SpeedDial, Tooltip } from '@mui/material';//Card, CardContent, Typography, Modal, Box,
import AddIcon from '@mui/icons-material/Add';
import CardComponent from '../components/cards/blog'
import { makeStyles } from '@mui/styles';
// import { add } from 'lodash';

const useStyles = makeStyles({
  button: {
    marginBottom: '16px',
  },
});


export default function Dashboard() {
  // const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  // const [vendorName, setVendorName] = useState('');
  // const [vendorLastName, setVendorLastName] = useState('');
  // const [vendorEmail, setVendorEmail] = useState('');
  // const [vendorCompany, setVendorCompany] = useState('');
  // const [vendorAddress, setVendorAddress] = useState('');
  // const [nameError, setNameError] = useState(false);
  // const [lastNameError, setLastNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [companyError, setCompanyError] = useState(false);
  // const [addressError, setAddressError] = useState(false);
  const [add, setAdd] = useState(false);
  const [customer, setCustomer] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    // Fetch folders or any other initialization
  }, []);

  const handleAdd = () => {
    setAdd(!add);
    if (customer && !add) setCustomer(null);
  };

  // const handleFolderClicks = () => {
  //   setVendorName('');
  //   setVendorEmail('');
  //   setIsEdit(false);
  //   setModalOpen(!modalOpen);
  // };

  // const handleNameChange = (event) => {
  //   setVendorName(event.target.value);
  //   setNameError(event.target.value === '');
  // };

  // const handleLastNameChange = (event) => {
  //   setVendorLastName(event.target.value);
  //   setLastNameError(event.target.value === '');
  // };

  // const handleEmailChange = (event) => {
  //   setVendorEmail(event.target.value);
  //   const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/;
  //   setEmailError(!event.target.value.match(emailRegex));
  // };

  // const handleCompanyNameChange = (event) => {
  //   setVendorCompany(event.target.value);
  //   setCompanyError(event.target.value === '');
  // };

  // const handleAddressChange = (event) => {
  //   setVendorAddress(event.target.value);
  //   setAddressError(event.target.value === '');
  // };

  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };

  // const handleModalSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   setNameError(vendorName === '');
  //   setLastNameError(vendorLastName === '');
  //   setEmailError(vendorEmail === '');
  //   setCompanyError(vendorCompany === '');
  //   setAddressError(vendorAddress === '');
  // };

  return (
    <>
      <Grid item className={classes.button}>
        <ButtonComponent variant="contained" color="primary" onClick={handleAdd}  >
          <AddIcon />
          Create Vendor
        </ButtonComponent>
      </Grid>
      <Grid container spacing={2}>
        {[...Array(6)].map((_, i) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
            <CardComponent title="  A day in the of a professional fashion designer"
              content="Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
              author='Joen Doe' lastUpdated='Today'
              imgSrc='https://source.unsplash.com/random/1920x1080/?electronic-product' />
          </Grid>
        ))}
      </Grid>
      <Tooltip title="Add New Blog">
        <SpeedDial
          ariaLabel="Add Blog"
          sx={{ display: 'inline-flex', alignSelf: 'end', position: 'sticky', bottom: 24, left: '100%', transform: 'translate(-50%, -50% )' }}
          icon={<AddIcon />}
          onClick={() => setOpen(true)}
        />
      </Tooltip>
      <Dialog
        maxWidth="sm"
        TransitionComponent={PopupTransition}
        keepMounted
        fullWidth
        onClose={handleAdd}
        open={add}
        sx={{ '& .MuiDialog-paper': { p: 0 }, transition: 'transform 225ms' }}
        aria-describedby="alert-dialog-slide-description"
      >
        <AddVendor customer={customer} onCancel={handleAdd} />
      </Dialog>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Blog Title" fullWidth />
          <TextField margin="dense" label="Blog Content" fullWidth multiline rows={4} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => {
            // Handle blog creation here
            setOpen(false);
          }}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
