import { useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// material-ui
import { Button, Grid, Stack, TextField, Typography, Box } from '@mui/material';// MenuItem, InputLabel,

// project-imports
import MainCard from 'components/MainCard';

// assets
import { DocumentUpload } from 'iconsax-react';
// import { width } from '@mui/system';



// constant
// const prices = [
//   {
//     value: '1',
//     label: '$ 100'
//   },
//   {
//     value: '2',
//     label: '$ 200'
//   },
//   {
//     value: '3',
//     label: '$ 300'
//   },
//   {
//     value: '4',
//     label: '$ 400'
//   }
// ];

// const quantities = [
//   {
//     value: 'one',
//     label: '1'
//   },
//   {
//     value: 'two',
//     label: '2'
//   },
//   {
//     value: 'three',
//     label: '3'
//   }
// ];

// const statuss = [
//   {
//     value: 'in stock',
//     label: 'In Stock'
//   },
//   {
//     value: 'out of stock',
//     label: 'Out of Stock'
//   }
// ];

// ==============================|| ECOMMERCE - ADD PRODUCT ||============================== //

function AddNewProduct({ onCancel }) {
  // const history = useNavigate();
  const fileInput = useRef(null);

  // const [quantity, setQuantity] = useState('one');
  // const [price, setPrice] = useState('1');
  // const [status, setStatus] = useState('in stock');
  const [uploadBtntext, setUploadBtntext] = useState('Click to Upload');

  // const handlePrice = (event) => {
  //   setPrice(event.target.value);
  // };

  // const handleQuantity = (event) => {
  //   setQuantity(event.target.value);
  // };

  // const handleStatus = (event) => {
  //   setStatus(event.target.value);
  // };

  // const handleCancel = () => {
  //   history(`/products/product-list`);
  // };

  const handleButtonClick = () => {
    fileInput.current.click();
  };
  const handleFileChange = (event) => {
    console.log(event.target.files[0]); // Do something with the selected file
    setUploadBtntext('File Uploaded');
  };

  const addNewProduct = () => {
    console.log('Add new product');
  }

  return (
    <>
      <MainCard sx={{ border: 'none' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MainCard sx={{ border: 'none' }}>
              <Grid container spacing={3} direction="column">
                <Grid item xs={12}>
                  {/* <InputLabel sx={{ mb: 1 }}>Product Name</InputLabel> */}
                  <TextField
                    placeholder="Enter product name"
                    fullWidth
                    variant='standard' />
                </Grid>
                <Grid item xs={12}>
                  {/* <InputLabel sx={{ mb: 1 }}>Product Description</InputLabel> */}
                  <TextField
                    placeholder="Enter product description"
                    fullWidth
                    variant='standard' />
                </Grid>
                {/* <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Document Name</InputLabel>
                  <TextField placeholder="Enter Document Name" fullWidth />
                </Grid> */}
                <Grid item xs={12}>
                  {/* <InputLabel sx={{ mb: 1 }}>Document Description</InputLabel> */}
                  <TextField
                    mb={2}
                    placeholder="Enter Document Description"
                    fullWidth
                    variant='standard'>

                  </TextField>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={1}>
            <hr style={{ width: '1px', height: '100%', backgroundColor: 'gray', border: 'none' }} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <MainCard sx={{ border: 'none' }}>
              <Grid container direction="column" spacing={2}>
                {/* <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Qty</InputLabel>
                  <TextField placeholder="Select quantity" fullWidth select value={quantity} onChange={handleQuantity}>
                    {quantities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Status</InputLabel>
                  <TextField placeholder="Select status" fullWidth select value={status} onChange={handleStatus}>
                    {statuss.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid> */}
                <Grid item xs={12}>
                  <Grid item >
                    <Box display="flex">
                      <Box mr={2}>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<DocumentUpload />}
                          onClick={handleButtonClick}
                          sx={{ mt: 1, textTransform: 'none', height: '100px', width: '100px' }}
                        >
                          <input
                            type="file"
                            ref={fileInput}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                          />
                          {uploadBtntext}
                        </Button>
                      </Box>
                      {/* <Box mr={2}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          startIcon={<DocumentUpload />}
                          onClick={handleButtonClick}
                          sx={{ mt: 1, textTransform: 'none', height: '100px', width: '100px' }}
                        >
                          <input
                            type="file"
                            ref={fileInput}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                          />
                          {uploadBtntext}
                        </Button>
                      </Box> */}
                    </Box>
                  </Grid>
                  <Typography color="error.main">
                    *{' '}
                    {/* <Typography component="span" color="textSecondary">
                      Recommended resolution is 640*640 with file size
                    </Typography> */}
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>

          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="right" alignItems="center" sx={{ mt: 6 }}>
              <Button  color="error" onClick={onCancel}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ textTransform: 'none' }} onClick={addNewProduct}>
                Add new Product
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
}

export default AddNewProduct;
