import ReactDOM from 'react-dom';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];

  //this will display data visualization of your book progress which you can filter by  genre, year, etc
function Progress() {

    return (
        <main style={{ color: "white"}}>
          <h2>Welcome to the Progress Page</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        
    );
  }

export default Progress;