import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const AuthPage = ({ isSignup }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: colors.primary[500] }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Sec-Auth
          </Typography>
          <Link to={isSignup ? "/login" : "/signup"} style={{ textDecoration: "none" }}>
            <Button color="inherit" variant="outlined" sx={{ borderColor: colors.grey[100], color: "white" }}>
              {isSignup ? "Login" : "Sign Up"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box my={6}>
          <Paper elevation={6} sx={{ p: 6, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" color={colors.greenAccent[500]}>
              {isSignup ? "Create an Account" : "Login to Sec-Auth"}
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <TextField
                fullWidth
                margin="normal"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ input: { color: colors.grey[100] } }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ input: { color: colors.grey[100] } }}
              />
              {isSignup && (
                <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  sx={{ input: { color: colors.grey[100] } }}
                />
              )}
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, backgroundColor: colors.greenAccent[500], color: colors.grey[900] }}
                >
                  {isSignup ? "Sign Up" : "Login"}
                </Button>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default AuthPage;
