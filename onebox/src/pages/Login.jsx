import React from 'react';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const {  isAuthenticated } = useAuth0();

  function handleclick(){
       if(isAuthenticated){
           toast.success("Log in successfull");
       }
  }

  return (
    <div className='bg-black max-w-[1440px] h-screen m-auto text-white flex flex-col justify-between'>
      <div className="w-full h-16 flex justify-center items-center border border-slate-800">
        <img src="/reachinbox.png" alt="reachinbox-logo" className="h-16" style={{cursor:'pointer'}}/>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='m-auto w-[460px] h-auto md:h-[312px] bg-[#111214] rounded-2xl border border-gray-700 py-6 px-10'>
          <div className='w-[380px] m-auto'>
            <p className='text-xl mb-6 ml-24'>Create new account</p>
            <div
              className='rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12 cursor-pointer'
            >
              <img src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg" alt="" className='bg-black rounded-full h-5 mt-0.5'/>
              <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://one-box-reactinbox.vercel.app/home" className='text-sm text-gray-400 cursor-pointer' onClick={handleclick}>
                Sign Up with Google
              </Link>

            </div>
            <p className='w-[195px] h-12 bg-[#3d65ea] rounded m-auto text-center pt-2.5 mb-6 cursor-pointer'>
              Create an account
            </p>
            <p className='text-base text-gray-500 ml-20'>
              Already have an account? <span style={{cursor:'pointer'}}>Sign In</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-8 flex justify-center items-center border border-slate-800">
        <p className='h-5 text-gray-600 text-xs'>©️ 2024 Reachinbox All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Login;
