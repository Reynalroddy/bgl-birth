
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
// import { Divider } from 'primereact/divider';
// import { Carousel } from 'primereact/carousel';
// import { Ripple } from 'primereact/ripple';
import Logo from '../assets/images/72.png'
import Ban  from "../assets/images/bgLogin.jpg"
const Login = () => {
    const [checked2, setChecked2] = useState(false);
  return (
   
    <div className="min-h-screen flex surface-section gap-5">
<div className="hidden lg:block w-6 bg-no-repeat bg-cover" style={{ backgroundImage: 
// `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
`url(${Ban})`
            
        
        }}
            
            >
                
            </div>
        <div className="p-card surface-section w-full md:w-6 p-6 md:p-8 align-self-center text-center">
            <div className="mb-5">
                <div>
                <img src={Logo} alt="hyper" height={70} className="mb-3" />  
                </div>
                  
               
                <div className="text-900 text-3xl font-medium mb-3">National Population Commision</div>
                <span className="text-600 font-medium mr-2">ECRVS Central Management System</span>
                {/* eslint-disable-next-line  */}
                {/* <a className="font-medium no-underline text-blue-500 cursor-pointer">Create today!</a> */}
            </div>
            <div>
                <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
                <InputText id="email2" type="text" className="w-full mb-3" />
    
                <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
                <InputText id="password2" type="password" className="w-full mb-3" />
    
                <div className="flex align-items-center justify-content-between mb-6">
                    <div className="flex align-items-center">
                        <Checkbox id="rememberme2" className="mr-2" checked={checked2} onChange={(e) => setChecked2(e.checked)} />
                        <label htmlFor="rememberme2">Remember me</label>
                    </div>
                   
                 {/* eslint-disable-next-line  */}
                    <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                </div>
    
                <Button label="Login" icon="pi pi-user" className="w-full" />
            </div>
        </div>
       
      
    </div>
       
  )
}

export default Login