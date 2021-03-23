import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { AiOutlinePicture } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  updateDriverFormRoot: {
    marginTop: theme.spacing(3),
    opacity: 0.8,
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'purple',
  },
  formContainerPaper: {
    padding: theme.spacing(4, 2),
  },
  centerStyle: {
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(1),
    fontSize: '13px',
    color: theme.palette.primary.dark,
  },
  formTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
  formPaperInner: {
    marginBottom: theme.spacing(2),
  },
  fileUploadBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  fileUploadDiv: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '99%',
    height: '170px',
    borderRadius: '4px',
    border: `2px solid ${theme.palette.grey[600]}`,
    borderSpacing: `7px `,
    zIndex: 30,
  },

  iconButton: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    zIndex: 40,
    transition: 'all 0.7s ease-out',
    '&:hover': {
      transform: 'scale(0.8)',
    },
  },

  halfWidth: {
    width: '50%',
  },
  certificate: {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
    overflow: 'hidden',
    zIndex: 1,
  },
  //   grow: {
  //     flexGrow: 1,
  //   },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[50],
    fontWeight: 600,
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    transition: 'backgroundColor 1s ease-in',
    '&:hover': {
      backgroundColor: theme.palette.green.main,
    },
  },
}));

const initialValues = {
  fullName: '',
  phoneNumber: '',
  gender: '',
  email: '',
  address: '',
  passport: '',
  driverLicenseNum: '',
  licenseIssueDate: '',
  licenseExpiryDate: '',
  driverLicense: '',
  plateNumber: '',
  plateNumberIssueDate: '',
  vehicleType: '',
  plateNumberExpiryDate: '',
  vehicleLicenseNumber: '',
  vehicleLicenseImage: '',
  vehicleImage: '',
  bankName: '',
  accountNumber: '',
  accountName: '',
  accountType: '',
};
const driverSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'fullname is too short!')
    .max(50, 'fullname is too Long!')
    .required('Full name is a required field'),
  phoneNumber: Yup.string().required('Gender'),
  gender: Yup.string().required('Gender is a required field'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is a required field'),
  address: Yup.string()
    .min(2, 'Address is too Short!')
    .max(100, 'Address is too Long!')
    .required('Address is a required field '),
  passport: Yup.string().required('Address is a required field '),
  driverLicenseNum: Yup.string().required(
    "Driver's License Number is a required field",
  ),
  licenseIssueDate: Yup.string().required().label('License issued date'),
  licenseExpiryDate: Yup.string().required().label('Business phone number'),
  driverLicense: Yup.string().required().label("Driver's License "),
  plateNumber: Yup.string().required().label('Plate Number'),
  plateNumberIssueDate: Yup.string()
    .required()
    .label('Plate Number Issued Date'),
  vehicleType: Yup.string().required().label('Type of vehicle'),
  plateNumberExpiryDate: Yup.string()
    .required()
    .label('Plate Number Expiry Date'),
  vehicleLicenseNumber: Yup.string().required().label('Vehicle license number'),
  vehicleLicenseImage: Yup.string().required().label('Vehicle license '),
  vehicleImage: Yup.string().required().label('Vehicle Image'),

  bankName: Yup.string().required().label('Bank'),
  accountNumber: Yup.string().required().label('Bank account number'),
  accountName: Yup.string().required().label('Name of account'),
  accountType: Yup.string().required().label('Type of account'),
});

function UpdateDriverDetailsForm() {
  const [vehicleLicenseImageDisplay, setvehicleLicenseImageDisplay] = useState(
    null,
  );
  const [vehicleImageDisplay, setVehicleImageDisplay] = useState(null);
  const [passportImage, setPassportImage] = useState(null);
  const [driverLicenseImage, setDriverLicenseImage] = useState(null);

  const vehicleLicenseRef = useRef();
  const vehicleImageRef = useRef();
  const passportRef = useRef();
  const driverLicenseRef = useRef();

  const handlePassportChange = () => {
    if (passportRef && passportRef.current) {
      passportRef.current.click();
    }
  };
  const handleDriverLicenceChange = () => {
    if (driverLicenseRef && driverLicenseRef.current) {
      driverLicenseRef.current.click();
    }
  };
  const handleVehicleLicenseChange = () => {
    if (vehicleLicenseRef && vehicleLicenseRef.current) {
      vehicleLicenseRef.current.click();
    }
  };

  const handleVehicleImage = () => {
    if (vehicleImageRef && vehicleImageRef.current) {
      vehicleImageRef.current.click();
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.updateDriverFormRoot}>
      <Paper elevation={0} className={classes.formContainerPaper}>
        <Formik
          initialValues={initialValues}
          validationSchema={driverSchema}
          validateOnBlur={true}
          validateOnChange={true}
          onSubmit={(values, helpers) => console.log(values)}
        >
          {({ errors, touched, handleBlur, handleChange, setFieldValue }) => (
            <Form>
              <Paper elevation={0} className={classes.formPaperInner}>
                <Box p={2}>
                  {' '}
                  <Typography className={classes.formTitle} variant="h6">
                    Personal Information
                  </Typography>
                </Box>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        error={errors.fullName}
                        className={classes.label}
                        htmlFor="fullName"
                      >
                        Full Name
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.fullName && errors.fullName}
                        helperText={errors.fullName}
                        id="fullName"
                        variant="outlined"
                        fullWidth
                        name="fullName"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <InputLabel
                          error={errors.phoneNumber}
                          className={classes.label}
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </InputLabel>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.phoneNumber && touched.phoneNumber}
                          helperText={errors.phoneNumber}
                          id="phoneNumber"
                          variant="outlined"
                          fullWidth
                          name="phoneNumber"
                          type="tel"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="gender">
                          Gender
                        </label>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.gender && touched.gender}
                          helperText={errors.gender}
                          id="gender"
                          variant="outlined"
                          fullWidth
                          name="gender"
                          type="text"
                          required
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <label className={classes.label} htmlFor="email">
                        Email Address
                      </label>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email && touched.email}
                        helperText={errors.email}
                        id="email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        type="email"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <label className={classes.label} htmlFor="address">
                        Address
                      </label>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.address && touched.address}
                        helperText={errors.address}
                        id="address"
                        variant="outlined"
                        fullWidth
                        name="address"
                        type="address"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid xs={6} item>
                    <Box p={2}>
                      <input
                        style={{ display: 'none' }}
                        type="file"
                        ref={passportRef}
                        onChange={(e) => {
                          setFieldValue('passport', e.target.files[0]);
                          setPassportImage(e.target.files[0]);
                        }}
                        name="passport"
                        id="passport"
                        accept="image*"
                      />{' '}
                      <label className={classes.label}>Passport</label>
                      <div
                        className={clsx(
                          classes.fileUploadDiv,
                          classes.halfWidth,
                        )}
                        htmlFor="passport"
                      >
                        <IconButton
                          className={classes.iconButton}
                          aria-label="add picture"
                          onClick={handlePassportChange}
                        >
                          {' '}
                          <FaEdit />{' '}
                        </IconButton>
                        {passportImage ? (
                          <>
                            <img
                              src={URL.createObjectURL(passportImage)}
                              alt="passport"
                              className={classes.certificate}
                            />
                            <Typography variant="caption">
                              {passportImage && passportImage.name}
                            </Typography>
                          </>
                        ) : (
                          <div className={classes.centerStyle}>
                            <Typography>
                              {' '}
                              <AiOutlinePicture size={80} />
                            </Typography>
                          </div>
                        )}
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <br />

              <Paper elevation={0} className={classes.formPaperInner}>
                <Box p={2}>
                  {' '}
                  <Typography className={classes.formTitle} variant="h6">
                    Driver's License
                  </Typography>
                </Box>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        required
                        className={classes.label}
                        htmlFor="driverLicenseNum"
                      >
                        Driver's license number
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.driverLicenseNum && touched.driverLicenseNum
                        }
                        helperText={errors.driverLicenseNum}
                        id="driverLicenseNum"
                        variant="outlined"
                        fullWidth
                        name="driverLicenseNum"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        className={classes.label}
                        htmlFor="licenseIssueDate"
                      >
                        Issue Date
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.licenseIssueDate && touched.licenseIssueDate
                        }
                        helperText={errors.licenseIssueDate}
                        id="licenseIssueDate"
                        variant="outlined"
                        fullWidth
                        name="licenseIssueDate"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid xs={6} item>
                    <Box p={2}>
                      <input
                        style={{ display: 'none' }}
                        type="file"
                        ref={driverLicenseRef}
                        onChange={(e) => {
                          setFieldValue('driverLicense', e.target.files[0]);
                          setDriverLicenseImage(e.target.files[0]);
                        }}
                        name="passport"
                        id="passport"
                        accept="image*"
                      />{' '}
                      <label className={classes.label}>Driver's license</label>
                      <div
                        className={clsx(
                          classes.fileUploadDiv,
                          classes.halfWidth,
                        )}
                        htmlFor="passport"
                      >
                        <IconButton
                          className={classes.iconButton}
                          aria-label="add picture"
                          onClick={handleDriverLicenceChange}
                        >
                          {' '}
                          <FaEdit />{' '}
                        </IconButton>
                        {driverLicenseImage ? (
                          <>
                            <img
                              src={URL.createObjectURL(driverLicenseImage)}
                              alt="driver's license"
                              className={classes.certificate}
                            />
                            <Typography variant="caption">
                              {driverLicenseImage && driverLicenseImage.name}
                            </Typography>
                          </>
                        ) : (
                          <div className={classes.centerStyle}>
                            <Typography>
                              {' '}
                              <AiOutlinePicture size={80} />
                            </Typography>
                          </div>
                        )}
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <label
                        className={classes.label}
                        htmlFor="licenseExpiryDate"
                      >
                        Expiry Date
                      </label>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.licenseExpiryDate && touched.licenseExpiryDate
                        }
                        helperText={errors.licenseExpiryDate}
                        id="licenseExpiryDate"
                        variant="outlined"
                        fullWidth
                        name="licenseExpiryDate"
                        type="licenseExpiryDate"
                        required
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <br />
              <Paper elevation={0} className={classes.formPaperInner}>
                <Box p={2}>
                  {' '}
                  <Typography className={classes.formTitle} variant="h6">
                    Vehicle Information &amp; License
                  </Typography>
                </Box>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        required
                        error={touched.plateNumber && errors.plateNumber}
                        className={classes.label}
                        htmlFor="plateNumber"
                      >
                        Plate Number
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.plateNumber && touched.plateNumber}
                        helperText={errors.plateNumber}
                        id="plateNumber"
                        variant="outlined"
                        fullWidth
                        name="plateNumber"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        required
                        error={
                          touched.plateNumberIssueDate &&
                          errors.plateNumberIssueDate
                        }
                        className={classes.label}
                        htmlFor="plateNumberIssueDate"
                      >
                        Issue Date
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.plateNumberIssueDate &&
                          touched.plateNumberIssueDate
                        }
                        helperText={errors.plateNumberIssueDate}
                        id="plateNumberIssueDate"
                        variant="outlined"
                        fullWidth
                        name="plateNumberIssueDate"
                        required
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        required
                        error={touched.vehicleType && errors.vehicleType}
                        className={classes.label}
                        htmlFor="vehicleType"
                      >
                        Vehicle Type
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.vehicleType && touched.vehicleType}
                        helperText={errors.vehicleType}
                        id="vehicleType"
                        variant="outlined"
                        fullWidth
                        name="vehicleType"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box p={2}>
                      <InputLabel
                        required
                        error={
                          touched.plateNumberExpiryDate &&
                          errors.plateNumberExpiryDate
                        }
                        className={classes.label}
                        htmlFor="plateNumberExpiryDate"
                      >
                        Expiry Date
                      </InputLabel>
                      <Field
                        as={TextField}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.plateNumberExpiryDate &&
                          touched.plateNumberExpiryDate
                        }
                        helperText={errors.plateNumberExpiryDate}
                        id="plateNumberExpiryDate"
                        variant="outlined"
                        fullWidth
                        name="plateNumberExpiryDate"
                        required
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid container item xs={12} sm={6}>
                    <Grid item xs={12} sm={12}>
                      <Box p={2}>
                        <InputLabel
                          required
                          error={
                            touched.vehicleLicenseNumber &&
                            errors.vehicleLicenseNumber
                          }
                          className={classes.label}
                          htmlFor="vehicleLicenseNumber"
                        >
                          Vehicle license number
                        </InputLabel>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.vehicleLicenseNumber &&
                            touched.vehicleLicenseNumber
                          }
                          helperText={errors.vehicleLicenseNumber}
                          id="vehicleLicenseNumber"
                          variant="outlined"
                          fullWidth
                          name="vehicleLicenseNumber"
                          required
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container item xs={12} sm={6}>
                    <Grid xs={6} item>
                      <Box p={2}>
                        <input
                          style={{ display: 'none' }}
                          type="file"
                          ref={vehicleLicenseRef}
                          onChange={(e) => {
                            setFieldValue(
                              'vehicleLicenseImage',
                              e.target.files[0],
                            );
                            setvehicleLicenseImageDisplay(e.target.files[0]);
                          }}
                          name="vehicleLicenseImage"
                          id="vehicleLicenseImage"
                          accept="image*"
                        />{' '}
                        <label className={classes.label}>Vehicle license</label>
                        <div
                          className={classes.fileUploadDiv}
                          htmlFor="vehicleLicenseImage"
                        >
                          <IconButton
                            className={classes.iconButton}
                            aria-label="add picture"
                            onClick={handleVehicleLicenseChange}
                          >
                            {' '}
                            <FaEdit />{' '}
                          </IconButton>
                          {vehicleLicenseImageDisplay ? (
                            <>
                              <img
                                src={URL.createObjectURL(
                                  vehicleLicenseImageDisplay,
                                )}
                                alt="vehicle's license"
                                className={classes.certificate}
                              />
                              <Typography variant="caption">
                                {vehicleLicenseImageDisplay &&
                                  vehicleLicenseImageDisplay.name}
                              </Typography>
                            </>
                          ) : (
                            <div className={classes.centerStyle}>
                              <Typography>
                                {' '}
                                <AiOutlinePicture size={80} />
                              </Typography>
                            </div>
                          )}
                        </div>
                      </Box>
                    </Grid>
                    <Grid xs={6} item>
                      <Box p={2}>
                        <input
                          style={{ display: 'none' }}
                          type="file"
                          ref={vehicleImageRef}
                          onChange={(e) => {
                            setFieldValue('vehicleImage', e.target.files[0]);
                            setVehicleImageDisplay(e.target.files[0]);
                          }}
                          name="vehicleImage"
                          id="vehicleImage"
                          accept="image*"
                        />{' '}
                        <label className={classes.label}>Vehicle Image</label>
                        <div
                          className={classes.fileUploadDiv}
                          htmlFor="vehicleImage"
                        >
                          <IconButton
                            className={classes.iconButton}
                            aria-label="add picture"
                            onClick={handleVehicleImage}
                          >
                            {' '}
                            <FaEdit />{' '}
                          </IconButton>
                          {vehicleImageDisplay ? (
                            <>
                              <img
                                src={URL.createObjectURL(vehicleImageDisplay)}
                                alt="vehicle "
                                className={classes.certificate}
                              />
                              <Typography variant="caption">
                                {vehicleImageDisplay &&
                                  vehicleImageDisplay.name}
                              </Typography>
                            </>
                          ) : (
                            <div className={classes.centerStyle}>
                              <Typography>
                                {' '}
                                <AiOutlinePicture size={80} />
                              </Typography>
                            </div>
                          )}
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                {/* End of vehicle information an licenses section */}
                {/* Begining of Bank account information */}

                <Paper elevation={0} className={classes.formPaperInner}>
                  <Box p={2}>
                    {' '}
                    <Typography className={classes.formTitle} variant="h6">
                      Bank Account Information
                    </Typography>
                  </Box>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="bankName">
                          Bank Name
                        </label>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.bankName && touched.bankName}
                          helperText={errors.bankName}
                          id="bankName"
                          variant="outlined"
                          fullWidth
                          name="bankName"
                          required
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label
                          className={classes.label}
                          htmlFor="accountNumber"
                        >
                          Account Number
                        </label>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.accountNumber && touched.accountNumber}
                          helperText={errors.accountNumber}
                          id="accountNumber"
                          variant="outlined"
                          fullWidth
                          name="accountNumber"
                          type="number"
                          required
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="accountName">
                          Account Name
                        </label>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.accountName && touched.accountName}
                          helperText={errors.accountName}
                          id="accountName"
                          variant="outlined"
                          fullWidth
                          name="accountName"
                          type="text"
                          required
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <InputLabel
                          error={errors.accountType}
                          className={classes.label}
                          htmlFor="accountType"
                        >
                          Account Type
                        </InputLabel>
                        <Field
                          as={TextField}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.accountType && touched.accountType}
                          helperText={errors.accountType}
                          id="accountType"
                          variant="outlined"
                          fullWidth
                          name="accountType"
                          type="accountType"
                          required
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
                <br />

                <Box className={classes.buttonBox} p={2} mt={2} mb={3}>
                  <Button type="submit" size="large" className={classes.button}>
                    Update Driver
                  </Button>
                </Box>
              </Paper>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
}

export default UpdateDriverDetailsForm;
