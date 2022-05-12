import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";

import { createTheme } from '@mui/material/styles';





const data = [
  {
    name: "Overview",
    icon: <HomeOutlined />,
  },
  { name: "Library", icon: <InboxOutlined /> },
  { name: "View Progress", icon: <CheckBoxOutlineBlankOutlined /> },
  { name: "Settings", icon: <MailOutline /> },

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

  

  const getList = () => (
    <div style={{ width: 250}} onClick={() => setOpen(false)} >
      {data.map((item, index) => (
        <ListItem button key={index} >
          <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
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
    </div>
  );
}

export default App;
