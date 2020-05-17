import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Button, AppBar, Toolbar, IconButton, Typography, Container  } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BuyingService from './management/BuyingService'
import ShippingService from './management/ShippingService'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // content: {
  //   flexGrow: 1,
  //   height: '100vh',
  //   overflow: 'auto',
  // },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
}));

function App() {
  const classes = useStyles();
  return (
    <div >
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          GKoo
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    {/* <div className={classes.root}> */}
    
    <AppMenu/>

    {/* <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <BuyingService/>
        </Container>
    </main> */}
    {/* </div> */}
    </div>
  );
}

export default App;


const useStylesList = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  listMenu: {
    width: '100%',
    maxWidth: 130,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function AppMenu() {
  const classes = useStylesList();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  //const appMenu = selectedIndex;
  let content
  if (selectedIndex == 1) {
    content = <BuyingService/>
  } else {
    content = <ShippingService/>
  }
  return (
    <div className={classes.root}>
    <div className={classes.listMenu}>
      <List component="nav" aria-label="shipping service folder">
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="배송대행" />
        </ListItem>
        
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="구매대행" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Q & A" />
        </ListItem>
        
      </List>
      </div>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {content}
        </Container>
      </main>
     
      </div>
  );
}