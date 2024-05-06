import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  // Divider,
  // FormControl,
  // FormControlLabel,
  FormLabel,
  Grid,
  // FormHelperText,
  // InputLabel,
  // ListItemText,
  // MenuItem,
  // OutlinedInput,
  // Select,
  Stack,
  // Switch,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project-imports
import AlertVendorDelete from './AlertVendorDelete';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { ThemeMode } from 'config';

// assets
import { Camera, Trash } from 'iconsax-react';

const avatarImage = require.context('assets/images/users', true);

// constant
const getInitialValues = (customer) => {
  const newCustomer = {
    name: '',
    email: '',
    lastname: '',
    address: ''
  };

  if (customer) {
    newCustomer.name = customer.fatherName;
    newCustomer.location = customer.address;
    return _.merge({}, newCustomer, customer);
  }

  return newCustomer;
};

// const allStatus = ['Complicated', 'Single', 'Relationship'];

// ==============================|| CUSTOMER - ADD / EDIT ||============================== //

const AddCustomer = ({ customer, onCancel }) => {
  const theme = useTheme();
  const isCreating = !customer;

  const [selectedImage, setSelectedImage] = useState(undefined);
  const [avatar, setAvatar] = useState(avatarImage(`./avatar-${isCreating && !customer?.avatar ? 1 : customer.avatar}.png`));

  useEffect(() => {
    if (selectedImage) {
      setAvatar(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const CustomerSchema = Yup.object().shape({
    name: Yup.string().max(255).required('Name is required'),
    lastname: Yup.string().max(255).required('last name is required'),
    email: Yup.string().max(255).required('Email is required').email('Must be a valid email'),
    address: Yup.string().max(255).required('address is required')
  });

  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(!openAlert);
    onCancel();
  };

  const formik = useFormik({
    initialValues: getInitialValues(customer),
    validationSchema: CustomerSchema,
    onSubmit: (values, { setSubmitting }) => {
      try {
        // const newCustomer = {
        //   name: values.name,
        //   email: values.email,
        //   location: values.location,
        //   orderStatus: values.orderStatus
        // };

        if (customer) {
          // dispatch(updateCustomer(customer.id, newCustomer)); - update
          dispatch(
            openSnackbar({
              open: true,
              message: 'Customer update successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          // dispatch(createCustomer(newCustomer)); - add
          dispatch(
            openSnackbar({
              open: true,
              message: 'Customer added successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }

        setSubmitting(false);
        onCancel();
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik; //, setFieldValue

  return (
    <>
      <FormikProvider value={formik}>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <Form autoComplete="off" noValidate onSubmit={handleSubmit} >
            <DialogTitle>{customer ? 'Edit Vendor' : 'New Vendor'}</DialogTitle>
            {/* <Divider /> */}
            <DialogContent sx={{ p: 2.5}}>
              <Grid container spacing={3} >
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                    <FormLabel
                      htmlFor="change-avtar"
                      sx={{
                        position: 'relative',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        '&:hover .MuiBox-root': { opacity: 1 },
                        cursor: 'pointer'
                      }}
                    >
                      <Avatar alt="Avatar 1" src={avatar} sx={{ width: 72, height: 72, border: '1px dashed' }} />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Stack spacing={0.5} alignItems="center">
                          <Camera style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
                          <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
                        </Stack>
                      </Box>
                    </FormLabel>
                    <TextField
                      type="file"
                      id="change-avtar"
                      placeholder="Outlined"
                      variant="outlined"
                      sx={{ display: 'none' }}
                      onChange={(e) => setSelectedImage(e.target.files?.[0])}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={1}>
                <hr style={{width: '1px', height: '100%', backgroundColor: 'gray', border: 'none'}} />
                  </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    <Grid item lg={6}>
                      <Stack spacing={1.25}>
                        {/* <InputLabel htmlFor="vendor-name">Name</InputLabel> */}
                        <TextField
                          halfWidth
                          id="vendor-name"
                          placeholder="First Name"
                          halfwidth
                          variant="standard"
                          {...getFieldProps('name')}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Stack>
                    </Grid>
                    <Grid item lg={6}>
                      <Stack spacing={1.25}>
                        {/* <InputLabel htmlFor="vendor-lastname">Last Name</InputLabel> */}
                        <TextField
                          halfWidth
                          id="vendor-lastname"
                          placeholder="Last Name"
                          variant="standard"
                          {...getFieldProps('lastname')}
                          error={Boolean(touched.lastname && errors.lastname)}
                          helperText={touched.lastname && errors.lastname}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        {/* <InputLabel htmlFor="vendor-email">Email</InputLabel> */}
                        <TextField
                          fullWidth
                          id="vendor-email"
                          placeholder="Email"
                          variant="standard"
                          {...getFieldProps('email')}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        {/* <InputLabel htmlFor="vendor-address">Address</InputLabel> */}
                        <TextField
                          fullWidth
                          id="vendor-address"
                          placeholder="Address"
                          variant="standard"
                          {...getFieldProps('address')}
                          error={Boolean(touched.address && errors.address)}
                          helperText={touched.address && errors.address}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            {/* <Divider /> */}
            <DialogActions sx={{ p: 2.5 }}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  {!isCreating && (
                    <Tooltip title="Delete Customer" placement="top">
                      <IconButton onClick={() => setOpenAlert(true)} size="large" color="error">
                        <Trash variant="Bold" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Button color="error" onClick={onCancel}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                      {customer ? 'Edit' : 'Add'}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </DialogActions>
          </Form>
        </LocalizationProvider>
      </FormikProvider>
      {!isCreating && <AlertVendorDelete title={customer.fatherName} open={openAlert} handleClose={handleAlertClose} />}
    </>
  );
};

AddCustomer.propTypes = {
  customer: PropTypes.any,
  onCancel: PropTypes.func
};

export default AddCustomer;
