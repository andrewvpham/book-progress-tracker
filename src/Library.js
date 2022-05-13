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
import Modal from '@mui/material/Modal';
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
//Contents on each card:
//Title
//Genre (dropdown)
//Color selection

 /* 
  const DynamicCard = () => {
    const [inputList, setInputList] = useState([]);
  
    const onAddBtnClick = event => {
      setInputList(inputList.concat(
            <Grid item>
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

  */

  class Library extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          open: false,
          booktitle: '',
          genre: 'fiction'
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeGenre = this.handleChangeGenre.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleOpen() {
        this.setState({ open: true });
      };

      handleClose() {
        this.setState({ open: false });
      };

      handleSubmit(event) {
        alert('Title was submitted: ' + this.state.booktitle + ' and the genre is ' + this.state.genre);
        event.preventDefault();
      }

      handleChange(event) {
        this.setState({booktitle: event.target.value});
      }

      handleChangeGenre(event) {
        this.setState({genre: event.target.value});
      }
    
  //Change state with open and onClose
    render() {
      return (
          <div>
            <IconButton sx={{color: 'white'}} onClick={this.handleOpen}>
                <AddIcon />
            </IconButton>
            <Modal style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={this.state.open}
            onClose={this.handleClose}  
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Grid container spacing={5} 
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item sm={6}>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <p >Add a new book to your library</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Book title
                        <input type="text" value={this.state.booktitle} onChange={this.handleChange} />
                        </label>
                        <label>
                        <br></br>
                        Genre
                        <select value={this.state.genre} onChange={this.handleChangeGenre}>
                            <option selected value="fiction">Fiction</option>
                            <option value="myth">Myth</option>
                            <option value="romance">Romance</option>
                            <option value="novel">Novel</option>
                            <option value="biography">Biography</option>
                            <option value="fairytale">Fairy-Tale</option>
                            <option value="drama">Drama</option>
                            <option value="history">History</option>
                            <option value="poems">Poems</option>
                            <option value="nonfiction">Non-fiction</option>
                        </select>
                        </label>
                        <label>
                        <br></br>
                        Select color for card
                        <select>
                            <option selected value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                        </select>
                        </label>
                        <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                        </CardContent>

                </Card>
          </Grid>      
                </Grid>
                
        </Modal>
          </div>

        
        
      );
    }
  }
  

  export default Library;