import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    create: {
      margin: theme.spacing(3, 0, 2),
      width: '25ch',
    }
  },
}));

export default function CreateUser() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
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

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"

          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            onChange={handleChange('password')}
            value={""}
            margin="normal"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.create}
          >      Create Account
    </Button>
        </Typography>

      </Container>
    </React.Fragment>
  );
}