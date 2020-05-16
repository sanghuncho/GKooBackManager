import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
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
    <PinnedSubheaderList>
    
    </PinnedSubheaderList>
    </div>
  );
}

export default App;


const useStylesList = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 150,
    backgroundColor: theme.palette.background.paper,
  },
}));

function PinnedSubheaderList() {
  const classes = useStylesList();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="shipping service folder">
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText primary="배송대행" />
        </ListItem>
        
      </List>
      <Divider />
      <List component="nav" aria-label="buying service folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="구매대행" />
        </ListItem>
        
      </List>

      </div>
  );
}