import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

//This will display percentage complete of 4 books closest to completion, most read genres, and small view of book deadlines coming up
import { LineChart, PieChart, Pie, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

function Overview() {

    const [open, setOpen] = React.useState(true);

    return (
        <Container align="left" style={{ color: "white"}}>
          <h2 >Overview of all your reading material</h2>
          <Grid container spacing={5}>
            <Grid item sm={8}>
            <p >Book 1 completion: </p>
            <LinearProgress variant="determinate" value={50} />
            <p >Book 2 completion: </p>
            <LinearProgress variant="determinate" value={30} />
            <p >Book 3 completion: </p>
            <LinearProgress variant="determinate" value={65} />
            <p >Book 4 completion: </p>
            <LinearProgress variant="determinate" value={82} />
            </Grid>
            <Grid align="left" item sm={4} >
            <p>These are your most read genres</p>
            <PieChart width={250} height={250}>
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </Grid>
            <Grid item sm={12}>
            <p>Deadlines and notifications</p>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >
                    Book 1 deadline is approaching! Finish Book 1 by September 15, 2022.
                    </Alert>
                </Collapse>
            </Box>
            </Grid>
            </Grid>
        </Container>
    );
  }

export default Overview;