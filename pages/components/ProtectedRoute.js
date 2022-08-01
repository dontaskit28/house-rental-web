
import { useAuth } from './../../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute =({children}) =>{
    const {user} = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if(!user){
            router.push('/login')
        }
    },[router,user])

    return <>{user?children:null}</>
}

export default ProtectedRoute;

export const SignedIn = ({children} )=>{
    const {user} = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if(user){
            router.push('/')
        }
    },[router,user])
    return <>{user?null:children}</>
}
