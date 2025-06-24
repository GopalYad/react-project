import { MyList } from "../../styles/appbar"
import { ListItemButton,ListItemIcon } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
export default function Actions(){
    return(
        <MyList type="row">
        <ListItemButton>
               <ListItemIcon>
                <ShoppingCart/>
               </ListItemIcon>
        </ListItemButton>
        </MyList>
    )
}