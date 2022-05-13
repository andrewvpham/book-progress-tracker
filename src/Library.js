import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
//this will display dynamically added cards displaying books you read; will have blank card always right-most that says add book to collection

//Theme for card
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

//Dyanmically added card
const Input = () => {
    return <input placeholder="Your input here" />;
  };
  
  const DynamicCard = () => {
    const [inputList, setInputList] = useState([]);
  
    const onAddBtnClick = event => {
      setInputList(inputList.concat(
            <Grid item sm={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                </Card>
                <DynamicCard />
            </Grid>      
      ));
    };
  
    return (
      <Grid item sm={4}>
        <IconButton onClick={onAddBtnClick}>
            <AddIcon />
        </IconButton>
        {inputList}
      </Grid>
    );
  };

function Library() {
    return (
        <Container style={{ color: "white"}}>
          <h2>Manage your collections in the library</h2>
          <p>You can do this, I believe in you.</p>
          <Grid container spacing={5}>
            <Grid item sm={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                </Card>
                <DynamicCard />
            </Grid>
          </Grid>        
        </Container>
    );
  }

  export default Library;