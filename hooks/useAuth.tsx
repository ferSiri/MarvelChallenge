import { getItemAsync } from 'expo-secure-store';
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [session,setSession] = useState<string|null>('loading');

    useEffect(()=>{
        const getAuth = async () =>{
            const session = await getItemAsync('session');
            setSession(session);
        }
        if(!session){
            getAuth();
        }
    },[session])
    
    return session;
}

export default useAuth;