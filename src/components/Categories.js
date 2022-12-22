import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Three from './three';
import CloseIcon from '@mui/icons-material/Close'


const Categories = ({ categories, filterItems }) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [open, setOpen] = React.useState(false)
  function handleClose() {
    setOpen(false)
  }

  function handleToggle() {
    setOpen(!open)
  }

  let selectedModel

  const card = (
    <React.Fragment>
      <CardWrapper id="style-3">
        <div className="closeOverlay">
          <CloseIcon onClick={handleClose}></CloseIcon>
        </div>
        <Three status="full" model={selectedModel} />
      </CardWrapper>
    </React.Fragment>
  )

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map((category, index) => (
          <ListItem key={category} disablePadding>
            <ListItemButton
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </Box>
  );

  return (
    <Wrapper>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon style={{ cursor: 'pointer' }} onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {/* <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div> */}
    </Wrapper>



  )
}
const Wrapper = styled.div`

position: absolute;
z-index: 1;
top: 15%;
left: 5%;
 
`
const CardWrapper = styled.section`
 @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
 display: grid;
 align-items: center;
 justify-content: center;
 width: 80%;
 height: 80%;
 position: absolute;
 top: 10%;
 left: 10%;
 background-color: white;
 border-radius: 20px;

 .closeOverlay {
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 10px;
  cursor: pointer;
  z-index: 1;
 }

 @media (max-width: 600px) {
  grid-template-columns: 1fr 1fr;
  display: inline-block;
 }
`

export default Categories
