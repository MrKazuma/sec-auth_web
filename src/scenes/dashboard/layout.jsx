import { Outlet } from "react-router-dom";
// import Topbar from "../global/Topbar";
import Sidebar from "../global/sidebar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box width={"100%"}>
                {/* <Topbar /> */}
                <Outlet />
            </Box>
        </Box>
    )
}

export default DashboardLayout;