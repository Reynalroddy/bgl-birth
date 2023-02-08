import React,{useEffect} from 'react'
import { Button } from 'primereact/button';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getDeathRegs } from '../redux/apiCalls';
const SingleApplication2 = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const {
        isLoading,
      reg
      } = useSelector((state) => state.death);
    useEffect(() => {
        getDeathRegs(dispatch,id)
    // console.log(reg)
    }, [dispatch,id])
    
    if(isLoading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <div> 

<div className="surface-card p-4 shadow-2 border-round">
  <div className='flex flex-column lg:flex-row lg:justify-content-between border-bottom-3 border-green-500'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DEATH CERTIFICATE NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.death_certificate_number}</div>
  </div>
  {/* <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">BIRTH REGISTRATION VOLUME</div>
    <div className="text-900 text-xl mb-5 font-bold">H</div>
  </div> */}
  {/* <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">ENTRY NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">6432</div>
  </div> */}

  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DATE OF REGISTRATION</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.date_created
}</div>
  </div>
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">PLACE OF DEATH</div>
            <div className="text-900">{reg&&reg.deceased_place_of_deathData?.BirthPlace_Desc}</div>
            
        </div>
        {/* <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
            <div className="text-900">Demsa</div>
        </div> */}
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            
            <div className="text-900">{reg&&reg.deceased_lgaData?.LGA_Name}</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
           
            
            <div className="text-900"> {reg&&reg.deceased_state_of_originData?.State_Name}</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of deceased</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.deceased_firstname} {reg&&reg.deceased_middlename} {reg&&reg.deceased_surname}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Date of death</div>
            <div className="text-900">{reg&&reg.deceased_date_of_death}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Gender</div>
            <div className="text-900">{reg&&reg.deceased_sexData?.Gender}</div>
            
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital status</div>
            <div className="text-900">{reg&&reg.deceased_marital_statusData?.Status_Desc}</div>
           
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Age at Death</div>
           
            <div className="text-900">{reg&&reg.deceased_age_at_death}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.deceased_nationalityData
?.Country_Name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            
            <div className="text-900">{reg&&reg.deceased_literacyData?.Literacy}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            
            <div className="text-900">{reg&&reg.deceased_level_of_educationData?.Description}</div>
           
        </div>
      
        
       
    </div>


    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">FirstName</div>
            <div className="text-900">{reg&&reg.informant_firstname}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">SurName</div>
            <div className="text-900">{reg&&reg.informant_surname}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.informant_phone_number}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.informant_nin}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">relationship</div>
            <div className="text-900">{reg&&reg.informant_relationship_with_deceasedData?.Description}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
    </div>
    <Button label="View Certificate" className="p-button-success my-2" />
</div>

    </div>
  )
}

export default SingleApplication2