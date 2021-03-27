import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { HiOutlineUpload } from "react-icons/hi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ProfileImage from "../../assets/profile.jpg";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AiOutlineUser } from "react-icons/ai";
import { IoCalculatorOutline, IoBusinessOutline } from "react-icons/io5";
import { RiBankLine } from "react-icons/ri";
import { FiPhone, FiMail } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    opacity: 0.8,
  },
  formContainerPaper: {
    padding: theme.spacing(4, 2),
  },
  settingTitle: {
    color: "#113E82",
    fontWeight: "600",
    margin: "30px 8px 50px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "50px",
    marginLeft: "70px",
  },
  profileText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "40px",
  },
  profileName: {
    color: "#949292",
    fontWeight: "600",
  },
  centerStyle: {
    textAlign: "center",
  },
  label: {
    display: "block",
    marginBottom: theme.spacing(1),
    fontSize: "16px",
    color: "#113E82",
    marginLeft: "10px",
  },
  formTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
  formPaperInner: {
    marginBottom: theme.spacing(2),
  },
  fileUploadBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  fileUploadDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "99%",
    height: "170px",
    cursor: "pointer",
    borderRadius: "3px",
    border: `2px dashed ${theme.palette.primary.main}`,
    borderSpacing: `7px `,
    zIndex: 40,
  },
  certificate: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    overflow: "hidden",
    zIndex: 1,
  },
  //   grow: {
  //     flexGrow: 1,
  //   },
  iconStyles: {
    fontSize: "22px",
    color: "#113E82",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  saveButton: {
    padding: "0 80px !important",
    background: "#113E82",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "300",
    textTransform: "initial",
    transition: "backgroundColor 1s ease-in",
    "&:hover": {
      backgroundColor: "#40D192",
    },
  },
  managePassword: {
    fontSize: "16px",
    color: "#5B85BC",
    fontWeight: "600",
    margin: "20px 30px",
  },
}));

const initialValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  address: "",
  businessName: "",
  businessPhoneNumber: "",
  businessAddress: "",
  cacRegNumber: "",
  cacCertificate: "",
};
const enterpriseSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "fullname is too short!")
    .max(50, "fullname is too Long!")
    .required("Full name is a required field"),
  phoneNumber: Yup.string().required("Phone number is a required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  address: Yup.string()
    .min(2, "Address is too Short!")
    .max(100, "Address is too Long!")
    .required("Address is a required field "),
  businessName: Yup.string().required("Business name is a required field"),
  businessPhoneNumber: Yup.string().required().label("Business phone number"),
  cacRegNumber: Yup.string()
    .required("Required")
    .label("CAC Registration number"),
  cacCertificate: Yup.string().required(),
  cacCertificateOne: Yup.string().required(),
  personalIdFile: Yup.string().required(),
});

function SettingsForm() {
  const [cacCertificateImagePreview, setCacCertificateImagePreview] = useState(
    null
  );
  const [
    cacCertificateImagePreviewTwo,
    setCacCertificateImagePreviewTwo,
  ] = useState(null);
  const [personalIdImage, setPersonalIdImage] = useState(null);

  const personalIdRef = useRef();
  const cacCertificateRef = useRef();
  const cacCertificateRefTwo = useRef();

  const handlePersonalIdChange = () => {
    if (personalIdRef && personalIdRef.current) {
      personalIdRef.current.click();
    }
  };

  const handleCACCertificateChange = () => {
    if (cacCertificateRef && cacCertificateRef.current) {
      cacCertificateRef.current.click();
    }
  };

  const handleCACCertificateChangeTwo = () => {
    if (cacCertificateRefTwo && cacCertificateRefTwo.current) {
      cacCertificateRefTwo.current.click();
    }
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.formContainerPaper}>
          <Typography
            variant="h5"
            gutterBottom
            className={classes.settingTitle}
          >
            Account Settings
          </Typography>
          <Box style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <img
                src={ProfileImage}
                alt="profile"
                className={classes.profileImage}
              />
            </div>
            <div className={classes.profileText}>
              <Typography className={classes.profileName} variant="subtitle1">
                Robin Jenkins
              </Typography>
              <Typography
                className={classes.profilePhoneNumber}
                variant="body2"
              >
                +234 902 823 2471
              </Typography>
              <Typography className={classes.profileEmail} variant="body2">
                Kozimadgaje@gmail.com
              </Typography>
            </div>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={enterpriseSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values, helpers) => console.log(values)}
          >
            {({ errors, touched, handleBlur, handleChange, setFieldValue }) => (
              <Form>
                <Paper elevation={3} className={classes.formPaperInner}>
                  <Box p={2}>
                    {" "}
                    <Typography className={classes.formTitle} variant="h6">
                      Personal Information
                    </Typography>
                  </Box>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="fullName">
                          Full Name
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.fullName && touched.fullName}
                          helperText={touched.fullName && errors.fullName}
                          id="fullName"
                          variant="outlined"
                          fullWidth
                          name="fullName"
                          required
                          placeholder="Robin Jenkins"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AiOutlineUser className={classes.iconStyles} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.phoneNumber && touched.phoneNumber}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          id="phoneNumber"
                          variant="outlined"
                          fullWidth
                          name="phoneNumber"
                          type="tel"
                          required
                          placeholder="+234 09107218147"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FiPhone className={classes.iconStyles} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="email">
                          Email Address
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                          helperText={touched.email && errors.email}
                          id="email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          type="email"
                          required
                          placeholder="robinjenkins@gmail.com"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FiMail className={classes.iconStyles} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="address">
                          Address
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.address && touched.address}
                          helperText={touched.address && errors.address}
                          id="address"
                          variant="outlined"
                          fullWidth
                          name="address"
                          type="address"
                          required
                          placeholder="House Number, Street Name, Area and City"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <TiLocationArrowOutline
                                  className={classes.iconStyles}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Typography
                      className={classes.managePassword}
                      variant="body2"
                    >
                      Manage Password
                    </Typography>
                  </Grid>
                </Paper>
                <br />
                <Paper elevation={3} className={classes.formPaperInner}>
                  <Box p={2}>
                    {" "}
                    <Typography className={classes.formTitle} variant="h6">
                      Business Information
                    </Typography>
                  </Box>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="businessName">
                          Business Name
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.businessName && touched.businessName}
                          helperText={
                            touched.businessName && errors.businessName
                          }
                          id="businessName"
                          variant="outlined"
                          fullWidth
                          name="businessName"
                          required
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label
                          className={classes.label}
                          htmlFor="businessPhoneNumber"
                        >
                          Business Phone Number
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.businessPhoneNumber &&
                            touched.businessPhoneNumber
                          }
                          helperText={
                            touched.businessPhoneNumber &&
                            errors.businessPhoneNumber
                          }
                          id="businessPhoneNumber"
                          variant="outlined"
                          fullWidth
                          name="businessPhoneNumber"
                          type="tel"
                          required
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid container item xs={12} sm={6}>
                      <Grid item xs={12} sm={12}>
                        <Box p={2}>
                          <label
                            className={classes.label}
                            htmlFor="businessAddress"
                          >
                            Business Address
                          </label>
                          <TextField
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              errors.businessAddress && touched.businessAddress
                            }
                            helperText={
                              touched.businessAddress && errors.businessAddress
                            }
                            id="businessAddress"
                            variant="outlined"
                            fullWidth
                            name="businessAddress"
                            required
                          />
                        </Box>
                      </Grid>
                      {/* Begining of upload personal id grid container*/}
                      <Grid container item xs={12}>
                        <Grid xs={6} item>
                          <Box p={2}>
                            <input
                              style={{ display: "none" }}
                              type="file"
                              ref={personalIdRef}
                              onChange={(e) => {
                                setFieldValue(
                                  "personalIdFile",
                                  e.target.files[0]
                                );
                                setPersonalIdImage(e.target.files[0]);
                              }}
                              name="personalIdFile"
                              id="cacCertificate"
                              accept="image*"
                            />{" "}
                            <label className={classes.label}>Personal ID</label>
                            <div
                              className={classes.fileUploadDiv}
                              htmlFor="businessPhoneNumber"
                              onClick={handlePersonalIdChange}
                            >
                              {personalIdImage ? (
                                <>
                                  <img
                                    src={URL.createObjectURL(personalIdImage)}
                                    alt="certificate"
                                    className={classes.certificate}
                                  />
                                  <Typography variant="caption">
                                    {personalIdImage && personalIdImage.name}
                                  </Typography>
                                </>
                              ) : (
                                <div className={classes.centerStyle}>
                                  <Typography>
                                    {" "}
                                    <HiOutlineUpload size={30} />
                                    <Typography align="center" variant="body1">
                                      Upload Personal ID
                                    </Typography>
                                    <Typography
                                      align="center"
                                      variant="caption"
                                    >
                                      image here
                                    </Typography>
                                  </Typography>
                                </div>
                              )}
                            </div>
                          </Box>
                        </Grid>
                        <Grid xs={6} item>
                          <Box mt={2} p={2}>
                            <label
                              className={classes.label}
                              htmlFor="cacRegNumber"
                            >
                              CAC Reg Number
                            </label>
                            <TextField
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                errors.cacRegNumber && touched.cacRegNumber
                              }
                              helperText={
                                touched.cacRegNumber && errors.cacRegNumber
                              }
                              id="cacRegNumber"
                              variant="outlined"
                              fullWidth
                              name="cacRegNumber"
                              type="text"
                              required
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      {/* End of upload personal id information */}
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                      <Grid xs={6} item>
                        <Box p={2}>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            ref={cacCertificateRef}
                            onChange={(e) => {
                              setFieldValue(
                                "cacCertificate",
                                e.target.files[0]
                              );
                              setCacCertificateImagePreview(e.target.files[0]);
                            }}
                            name="cacCertificate"
                            id="cacCertificate"
                            accept="image*"
                          />{" "}
                          <label className={classes.label}>
                            CAC Certificate
                          </label>
                          <div
                            className={classes.fileUploadDiv}
                            htmlFor="businessPhoneNumber"
                            onClick={handleCACCertificateChange}
                          >
                            {cacCertificateImagePreview ? (
                              <>
                                <img
                                  src={URL.createObjectURL(
                                    cacCertificateImagePreview
                                  )}
                                  alt="certificate"
                                  className={classes.certificate}
                                />
                                <Typography variant="caption">
                                  {cacCertificateImagePreview &&
                                    cacCertificateImagePreview.name}
                                </Typography>
                              </>
                            ) : (
                              <div className={classes.centerStyle}>
                                <Typography>
                                  {" "}
                                  <HiOutlineUpload size={30} />
                                  <Typography align="center" variant="body1">
                                    CAC Certificate
                                  </Typography>
                                  <Typography align="center" variant="caption">
                                    image here
                                  </Typography>
                                </Typography>
                              </div>
                            )}
                          </div>
                        </Box>
                      </Grid>
                      <Grid xs={6} item>
                        <Box p={2}>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            ref={cacCertificateRefTwo}
                            onChange={(e) => {
                              setFieldValue(
                                "cacCertificateOne",
                                e.target.files[0]
                              );
                              setCacCertificateImagePreviewTwo(
                                e.target.files[0]
                              );
                            }}
                            name="cacCertificateOne"
                            id="cacCertificateOne"
                            accept="image*"
                          />{" "}
                          <label className={classes.label}>
                            CAC Certificate
                          </label>
                          <div
                            className={classes.fileUploadDiv}
                            onClick={handleCACCertificateChangeTwo}
                          >
                            {cacCertificateImagePreviewTwo ? (
                              <>
                                <img
                                  src={URL.createObjectURL(
                                    cacCertificateImagePreviewTwo
                                  )}
                                  alt="certificate"
                                  className={classes.certificate}
                                />
                                <Typography variant="caption">
                                  {cacCertificateImagePreviewTwo &&
                                    cacCertificateImagePreviewTwo.name}
                                </Typography>
                              </>
                            ) : (
                              <div className={classes.centerStyle}>
                                <Typography>
                                  {" "}
                                  <HiOutlineUpload size={30} />
                                  <Typography align="center" variant="body1">
                                    CAC Certificate
                                  </Typography>
                                  <Typography align="center" variant="caption">
                                    image here
                                  </Typography>
                                </Typography>
                              </div>
                            )}
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
                <br />
                <Paper elevation={3} className={classes.formPaperInner}>
                  <Box p={2}>
                    {" "}
                    <Typography className={classes.formTitle} variant="h6">
                      Account Details
                    </Typography>
                  </Box>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="fullName">
                          Account Name
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.fullName && touched.fullName}
                          helperText={touched.fullName && errors.fullName}
                          id="fullName"
                          variant="outlined"
                          fullWidth
                          name="fullName"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AiOutlineUser className={classes.iconStyles} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="phoneNumber">
                          Account Number
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.phoneNumber && touched.phoneNumber}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          id="phoneNumber"
                          variant="outlined"
                          fullWidth
                          name="phoneNumber"
                          type="tel"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IoCalculatorOutline
                                  className={classes.iconStyles}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="email">
                          Bank Name
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email}
                          helperText={touched.email && errors.email}
                          id="email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          type="email"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IoBusinessOutline
                                  className={classes.iconStyles}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box p={2}>
                        <label className={classes.label} htmlFor="address">
                          Account Type
                        </label>
                        <TextField
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.address && touched.address}
                          helperText={touched.address && errors.address}
                          id="address"
                          variant="outlined"
                          fullWidth
                          name="address"
                          type="address"
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <RiBankLine className={classes.iconStyles} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>
                    <Box className={classes.buttonBox} p={2} mt={2} mb={3}>
                      <Button size="large" className={classes.saveButton}>
                        Save
                      </Button>
                      <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.managePassword}
                      >
                        Manage Password
                      </Typography>
                    </Box>
                  </Grid>
                </Paper>
                <br />
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </>
  );
}

export default SettingsForm;
