import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
//Dark mode and light mode

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Settings() {
    return (
        <Container align="left" style={{ color: "white"}}>
          <h2>Settings</h2>
          <Divider sx={{ bgcolor: "white" }}/>
          <p>Enable or disable dark mode</p>
          <Switch {...label} defaultChecked />
      
        </Container>
    );
  }

  export default Settings;