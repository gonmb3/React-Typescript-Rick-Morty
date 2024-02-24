import { useNotification } from '../context/NotificationContext'
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { LoginVlidate } from '../utils/validateForm';
import { useFormik } from 'formik';

type LoginType = {
  name:string
  password:string
}

const Login: React.FC<{}> = () => {
  const { getSuccess} = useNotification();
  
  const formik = useFormik<LoginType>({
    initialValues: {
      name:"",
      password:""
    },
    validationSchema: LoginVlidate,
    onSubmit:(values) => {
      getSuccess(JSON.stringify(values))
    }
  })
  

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesión
            </Typography>
            {/* FORM BOX */}
            <Box
              onSubmit={formik.handleSubmit}
             component="form">
              <TextField
              name="name"
                margin="normal"
                fullWidth
                label="Email..."
                sx={{ mt: 2, mb: 2 }}
               value={formik.values.name}
               onChange={formik.handleChange}
               error={formik.touched.name && Boolean(formik.errors.name)}
               helperText={formik.touched.name && formik.errors.name}
              />{" "}
              <br />
              <TextField
              type="password"
              name="password"
                margin="normal"
                fullWidth
                label="Password..."
                sx={{ mb: 2 }}
                value={formik.values.password}
               onChange={formik.handleChange}
               error={formik.touched.password && Boolean(formik.errors.password)}
               helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
                fullWidth
                type="submit"
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};


export default Login