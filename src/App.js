import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createTheme } from '@mui/material/styles';
import { Routes, Route, Link } from "react-router-dom";
import Progress from './Progress';
import Overview from './Overview';
import Library from './Library';
import Settings from './Settings';

//MUI imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
//useState import
import { useState } from "react";


const data = [
  {
    name: "Overview", icon: <HomeOutlined />, linksrc: "/"},
  { name: "Library", icon: <LibraryBooksIcon />, linksrc: "library"},
  { name: "View Progress", icon: <TimelineIcon />,  linksrc: "progress" },
  { name: "Settings", icon: <SettingsIcon />,  linksrc: "settings" },

];

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#202124",
          color: "white",
        }
      }
    }
  }
});




function App() {
  const [open, setOpen] = useState(false);

  
// How to link listitem button seen below
  const getList = () => (
    <div style={{ width: 250}} onClick={() => setOpen(false)} >
      {data.map((item, index) => (
        <ListItem button key={index} component={Link} to={item.linksrc}>
          <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    //Navigation bar and drawer
    <div className="App" >
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()} 
      </Drawer>
      <AppBar position="relative">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" color="inherit" component="div">
          Book Progress Tracker
        </Typography>
      </Toolbar>
      
    </AppBar>
  
  {/* Routes defined here, link to these: */}
    <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="library" element={<Library />} />
        <Route path="progress" element={<Progress />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
