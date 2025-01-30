import Box  from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Question - 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          How do I add a new patient to the system?
          Go to the Patients section, click "Add New Patient", and enter the required details, including medical history and contact information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Question - 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Can I update or edit a patient’s medical records?
          Yes, you can update patient records by navigating to their profile and clicking "Edit" to modify diagnoses, prescriptions, and notes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Question - 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Is patient data securely stored?
          Absolutely! The system follows HIPAA/GDPR compliance and uses encryption to protect patient data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Question - 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Can I access the web app on multiple devices?
          Yes, the app is accessible on desktop, tablet, and mobile, ensuring seamless access to patient records from anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
             Question - 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          How do I generate reports or analytics for my patients?
          You can generate reports by selecting the Reports section and filtering data based on patient history, treatment plans, or billing.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;