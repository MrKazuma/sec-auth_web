import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

const SecAuthLanding = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: colors.primary[500] }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Sec-Auth
          </Typography>
          <Link to="/login" style={{ textDecoration: "none" }}>
             <Button color="inherit" variant="outlined" sx={{ borderColor: colors.grey[100], color:"white" }}>
                Login
             </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Box my={6}>
          <Paper elevation={6} sx={{ p: 6, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
            <Typography variant="h3" gutterBottom fontWeight="bold" color={colors.greenAccent[500]}>
              Welcome to Sec-Auth
            </Typography>
            <Typography variant="h6" gutterBottom color={colors.grey[100]}>
              Your trusted portal for secure hospital patient information.
            </Typography>
            <Typography variant="body1" color={colors.grey[200]} paragraph>
              Access and manage patient records with top-tier security and privacy.
              Our platform ensures that healthcare providers can retrieve and update
              patient information seamlessly while maintaining compliance with the
              highest data protection standards.
            </Typography>
          </Paper>
        </Box>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
              <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[500]}>Secure Access</Typography>
              <Typography variant="body2" color={colors.grey[200]}>
                Advanced encryption ensures patient data is protected at all times.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
              <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[500]}>User-Friendly Interface</Typography>
              <Typography variant="body2" color={colors.grey[200]}>
                Designed for efficiency, making patient record management easier.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{ p: 4, textAlign: "center", borderRadius: 2, backgroundColor: colors.primary[400] }}>
              <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[500]}>24/7 Support</Typography>
              <Typography variant="body2" color={colors.grey[200]}>
                Our team is available around the clock to assist with any issues.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SecAuthLanding;

