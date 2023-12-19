const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
import axios from 'axios';
import Cookies from 'js-cookie'
export const UserLoginSuccess = `${BACKEND_URL}/auth/login/success`

export const handleGoogleLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    window.open(`${BACKEND_URL}/auth/google`,"_self" );
 };
      
export const handleGithubLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`${BACKEND_URL}/auth/github/callback`,"_self");
}

export const MagicLinkRequestApi = async(data:string)=>{
    try{
        const res =  await axios.post(`${BACKEND_URL}/auth/magiclogin`,{email:data});
        return res
     }catch(err:any){
      console.log('Error in Making OverallAnalitics Request')
      return err?.message
     }
}

export const logOut = () => {
    Cookies.remove('token');
    window.open(`${BACKEND_URL}/auth/logout`, "_self");
};
