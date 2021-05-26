import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function CreateUser() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    confirm: '',
    showConfirm: '',
    first_name: '',
    last_name: '',
    email: '',
    username: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirm = () => {
    setValues({ ...values, showConfirm: !values.showConfirm });
  };

  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography name="formBox" component="div" style={{ height: '100vh' }}>
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            onChange={handleChange(`first_name`)}
            value={values.first_name}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            onChange={handleChange(`last_name`)}
            value={values.last_name}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            name="email"
            required
            onChange={handleChange(`email`)}
            value={values.email}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Username"
            name="userName"
            variant="outlined"
            required
            onChange={handleChange(`username`)}
            value={values.username}
            margin="normal"
          />
          <br />
          <FormControl className={clsx(classes.margin, classes.textField)}variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-basic"
            name="password"
            label="Password"
            variant="outlined"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
            <br />
            <br />
          <FormControl>
          <InputLabel htmlFor="outlined-adornment-confirm">Confirm</InputLabel>
          <OutlinedInput
            style={{labelWidth: "center"}}
            id="outlined-basic"
            label="Confirm"
            variant="outlined"
            required
            type={values.showConfirm ? 'text' : 'confirm'}
            value={values.confirm}
            onChange={handleChange('confirm')}
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownConfirm}
                  edge="end"
                >
                  {values.showConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <br />
          <br />
          <Button
            margin="normal"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.create}
          >
            Create Account
          </Button>
        </Typography>

      </Container>
    </React.Fragment>
  );
}