import { useMediaQuery, useTheme } from "@mui/material"
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

 export const AppBar=()=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <div>
        {matches?<AppbarMobile matches={matches} />:<AppbarDesktop/>}
        </div>
    )
}
export default AppBar

