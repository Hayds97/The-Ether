import {ReactNode, createContext, useContext, useEffect, useState} from 'react';


type User = {
    name: String
    email:String
}

type UserAuth = {
    isLoggedin: boolean; 
    user: User | null;
    login:(email:string, password:string)=>Promise<void>;
    Signup:(name:string, email:string, password:string)=>Promise<void>;
    logout:()=>Promise<void>; 
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({children}:{children: ReactNode}) => {
    const [user, setUser] =useState<User|null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
//
    useEffect(() => {
            //fetch if the user's cookies are valid then skip login
    }, []);
    const login = async (email:string, password:string) => {};
    const Signup = async (name:string, email:string, password:string) => {};
    const logout = async () => {};

    const value = {
        user, 
        isLoggedIn,
        isLoggedin: isLoggedIn, // Add the missing property 'isLoggedin'
        login,
        logout,
        Signup,
    };
    return <AuthContext.Provider value = {value} >{children}</AuthContext.Provider>;
}; 

export const UserAuth = () => useContext(AuthContext);