import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: colors.primary[500] }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Sec-Auth
          </Typography>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="inherit" variant="outlined" sx={{ borderColor: colors.grey[100], color: "white" }}>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Signup Form */}
      <Container maxWidth="sm">
        <Box my={6}>
          <Paper elevation={6} sx={{ p: 6, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
            <Typography variant="h4" gutterBottom fontWeight="bold" color={colors.greenAccent[500]}>
              Create an Account
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <TextField
                fullWidth
                margin="normal"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ input: { color: colors.grey[100] } }}
              />
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
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, backgroundColor: colors.greenAccent[500], color: colors.grey[900] }}
                >
                  Sign Up
                </Button>
              </Link>
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color: colors.grey[100] }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: colors.greenAccent[500], textDecoration: "none", fontWeight: "bold" }}>
                Login here
              </Link>
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
