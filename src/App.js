import { Route,Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./scenes/main/login";
import Signup from "./scenes/main/signup";
import Landing from "./scenes/main/landing";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import DashboardLayout from "./scenes/dashboard/layout";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";


function App() {

  const [  theme,colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar /> */}
          <main className="content">
            {/* <Topbar /> */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="bar" element={<Bar />} />
                <Route path="form" element={<Form />} />
                <Route path="line" element={<Line />} />
                <Route path="pie" element={<Pie />} />
                <Route path="faq" element={<FAQ />} />
              </Route>
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;

// import { Routes, Route} from 'react-router-dom';
// import { ColorModeContext, useMode } from './theme';
// import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import Landing from "./scenes/main/landing";
// import Login from "./scenes/main/login";
// import Signup from "./scenes/main/signup";
// import Dashboard from "./scenes/dashboard";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/sidebar";

// function App() {
//   const [theme, colorMode] = useMode();

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route
//               path="/dashboard"
//               element={
//                 <>
//                   <Sidebar />
//                   <div className="content">
//                     <Topbar />
//                     <Dashboard />
//                   </div>
//                 </>
//               }
//             />
//           </Routes>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default App;