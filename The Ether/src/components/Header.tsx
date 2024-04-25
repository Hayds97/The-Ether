import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { UserAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {


    const auth = UserAuth(); 
    return (
        <AppBar 
            sx={{bgcolor: "#B4B4B4", position: "static", boxShadow: "none"}}
        >
            <Toolbar sx={{ display: "flex"}}>
                <Logo />
                <div> 
                    {auth?.isLoggedin ? 
                        <>
                            <NavigationLink bg="linear-gradient(90deg,#0000fffc, #33ff00" to="/chat" text="Go To Chat" textColor="black" /> 
                            <NavigationLink bg="#33FF00" textColor="white" to="/" text="logout" onClick={auth.logout}/> 
                        </>
                        : (
                            <>
                                <NavigationLink bg="#000fffc" to="/login" text="Login" textColor="black" /> 
                                <NavigationLink bg="#33FF00" textColor="white" to="/signup" text="Signup" /> 
                            </>
                        )
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
