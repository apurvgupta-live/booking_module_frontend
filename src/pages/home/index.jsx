import * as React from "react";
import logo from "../assets/readPro_logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";
import InfoCard from "./components/info-card";

const drawerList = [
  "Stage Remarks",
  "Associate Details",
  "Sales Registration Form",
  "Applicant Details",
  "Inventory Details",
  "Costing Details",
  "Unit PLC Details",
  "Meter/Power Backup",
  "Car Parking",
  "Other Charges",
  "Debit Note",
  "Incentive/scheme",
  "Brokerage Details",
  "Instrument Details",
  "Payment Schedule",
];

const data = [
  {
    title: "Stage Remarks",
    list: [
      "Inverntory Accepted Remarks",
      "Submitted Booking",
      "Query Raised by So Remark",
      "Sent to developer Remark",
      "Query Raised by Developer",
      "Booking Cancelled Remark",
      "Sent to Developer Remark",
      "Login At Developer Remarks",
      "Query Raised by Developer Remarks",
      "Booking cancelled Remarks",
      "BBa Uploaded Remarks",
    ],
  },
  {
    title: "Associate Details",
    list: [
      "Booking Owner Name",
      "Booking Owner Email",
      "Reporting Head Name",
      "Reporting Head Email",
      "Vertical Head Name",
      "Vertical Head Email",
      "Team",
      "Branch",
      "Booking Done By",
      "Reporting Head Name BDB",
      "Reporting Head Email BDB",
      "Vertical Head Name BDB",
      "Vertical Head Email BDB",
    ],
  },
  {
    title: "Sales Registration Form",
    list: [
      "Booking Form ID",
      "Booking Name",
      "Developer",
      "Property Type",
      "Source Of Fund",
      "Date Of Booking",
      "Month Of Booking",
      "Year Of Booking",
      "Revenue",
    ],
  },
  {
    title: "Applicant Details",
    list: [
      "Client Name",
      "Address",
      "State",
      "Pincode",
      "Occupation",
      "Company Name",
      "Designation",
      "Company Adderss",
      "Company State",
      "Company Pin Code",
      "Pan No",
      "Aadhar No",
      "Date Of Birth",
      "Date Of Anniversary",
      "Gender",
      "Marital Status",
      "Contact 1",
      "Contact 2",
      "Email Id 1",
      "Email_Id 2",
      "Net Monthly Income",
      "Self",
      "Family",
    ],
  },
  {
    title: "Inventory Details",
    list: [
      "Developer Name",
      "Building",
      "Floor No",
      "Area",
      "Area UOM",
      "Developer Spoc Person",
      "Developer Spoc Contact No",
      "Developer Spoc Designation",
      "Developer Address",
    ],
  },
  {
    title: "Costing Details",
    list: [
      "Basic Selling Price",
      "Inaugural Discount",
      "On Form Discount",
      "GST",
      "Bsp After Discount",
      "Bsp Without GST",
      "Total Bsp With GST",
    ],
  },
  {
    title: "Unit PLC Details",
    list: ["Plc Type", "Plc Charge", "Plc Amount", "Plc GST", "Plc Total"],
  },
  {
    title: "Meter/Power Backup",
    list: [
      "Type",
      "Kw Kva",
      "Per Kw Kva Charge",
      "Meter Backup Amount",
      "Meter Backup GST",
      "Meter Backup Total",
    ],
  },
  {
    title: "Car Parking",
    list: [
      "Car Parking Type",
      "No Of Car Parking",
      "Car Parking Cost",
      "Net Parking Amount",
      "Car Parking Amount",
      "Car Parking GST",
      "Car Parking Total",
    ],
  },
  {
    title: "Other Charges",
    list: [
      "Other Charge Type",
      "Measure",
      "Other Charge Value",
      "GST",
      "Amount Without Gst",
      "Amount With Gst",
      "Other Charges Amount",
      "Other Charges GST",
      "Other Charges Total",
      "Gross Property Value",
      "Total GST",
      "Net Property Value",
    ],
  },
  {
    title: "Debit Note",
    list: [
      "Credit Note",
      "Credit Note Amount",
      "Debit Note",
      "Debit Note Amount",
    ],
  },
  {
    title: "Incentive/scheme",
    list: [
      "Customer Scheme",
      "Associate Incentive",
      "Incentive",
      "Incentive Amount",
    ],
  },
  {
    title: "Brokerage Details",
    list: ["Brokerage", "Brokerage Amount"],
  },
  {
    title: "Instrument Details",
    list: [
      "Payment Source",
      "Payment Reference No",
      "Payment Date",
      "Amount",
      "Bank Name",
      "Clearance Status",
      "Clearance Date",
      "Attachment",
    ],
  },
  {
    title: "Payment Schedule",
    list: [
      "Payment Particular",
      "Payment",
      "Payment Amount",
      "Payment Due Date",
    ],
  },
  {
    title: "Kyc Details And Verifications",
    list: [
      "Kyc Status",
      "Kyc Ok Remarks",
      "Kyc Not Ok Remarks",
      "Kyc Pending Remarks",
      "Source Of Fund",
      "Kyc Call Done",
      "Kyc Mail Sent",
      "Kyc Done By",
      "Kyc Done By Email Id",
    ],
  },
  {
    title: "Notes",
    list: ["Created Date And Time", "Created By", "Note"],
  },
  {
    title: "Attachments",
    list: [
      "Attachments Name",
      "Attachments Type",
      "Created Date And Time",
      "Created By",
    ],
  },
];

//drawer width
const drawerWidth = 240;

export default HomePage;

function HomePage(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img src={logo} style={{ width: "70%", height: "35px" }} />
      </Toolbar>
      <Divider />
      <ListItem>
        <h3
          style={{
            textDecoration: "underline",
            textDecorationColor: "#279f9f",
            textDecorationWidth: "5px",
            fontSize: "1.5rem",
          }}
        >
          Booking List
        </h3>
      </ListItem>
      <List>
        {drawerList.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "white", display: "flex" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <button className={styles.logout_button}>Logout</button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className={styles.header}>
          <button className={styles.edit_button}>Edit</button>
        </div>
        <div className={styles.button_2_container}>
          <button
            className={styles.button_2}
            style={{
              border: "2px solid blue",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            SO Query
          </button>
          <button
            className={styles.button_2}
            style={{
              border: "2px solid green",
              color: "green",
              fontWeight: "bold",
            }}
          >
            SO Accept
          </button>
          <button
            className={styles.button_2}
            style={{
              border: "2px solid red",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {" "}
            Reject Booking
          </button>
        </div>

        <div>
          {data?.map((item) => (
            <InfoCard data={item} />
          ))}
        </div>

        {/* <div>
          {data?.map((item) => (
            <InfoCard data={item} />
          ))}
        </div>

        <div>
          {data?.map((item) => (
            <InfoCard data={item} />
          ))}
        </div>

        <div>
          {data?.map((item) => (
            <InfoCard data={item} />
          ))}
        </div>

        <div>
          {data?.map((item) => (
            <InfoCard data={item} />
          ))}
        </div> */}
      </Box>
    </Box>
  );
}
