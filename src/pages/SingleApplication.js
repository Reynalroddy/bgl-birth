import React from 'react'
import { Button } from 'primereact/button';
const SingleApplication = () => {
  const guy=[1,2]
  return (
    <div>

<div className="surface-card p-4 shadow-2 border-round">
  <div className='flex justify-content-between border-bottom-3 border-green-500'>
  <div className="font-medium text-3xl text-900 mb-3">Ministry Of Finance</div>
    <div className="text-500 mb-5">Request Number:879097</div>
  </div>
  </div>
{guy.map((it,i)=>{

  return <div className="surface-card p-4 shadow-2 border-round my-2" key={i}>
  {/* <div className='flex justify-content-between'>
  <div className="font-medium text-3xl text-900 mb-3">Ministry Of Finance</div>
    <div className="text-500 mb-5">Request Number:879097</div>
  </div> */}
   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Elliot Alderson</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Email</div>
            <div className="text-900">elliot.alderson@email.com</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Applied Position</div>
            <div className="text-900">Front-End Developer</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-green-300">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <Button icon="pi pi-eye" label="View Document" className="p-button-outlined mt-2 md:mt-0" />
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
       
    </div>
    <Button label="Verify" icon="pi pi-check" iconPos="right" className='ml-3' />
    <Button label="Flag" className='ml-3 p-button-danger'/>
</div>
})}

    


    </div>
  )
}

export default SingleApplication