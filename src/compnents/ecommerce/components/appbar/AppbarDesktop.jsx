import React from 'react'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appbar'
import { ListItemText } from '@mui/material'
import {ListItemButton,ListItemIcon} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

import Actions from './actions';
const AppbarDesktop = ({matches}) => {
  return (
    < AppBarContainer>
      <AppBarHeader>
        My Bags
      </AppBarHeader>
      <MyList type ="row">
        <ListItemText primary="Home"/>
        <ListItemText primary="Categories"/>
        <ListItemText primary="Products"/>
        <ListItemText primary="Contact Us"/>
        <ListItemButton>
            <ListItemIcon>
                <SearchIcon/>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <FavoriteIcon/>
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PersonIcon/>
            </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions/>
    </ AppBarContainer>
  )
}

export default AppbarDesktop
