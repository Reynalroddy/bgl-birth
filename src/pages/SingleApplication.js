import React,{useEffect} from 'react'
import { Button } from 'primereact/button';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getRegs } from '../redux/apiCalls';
const SingleApplication = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const {
        isLoading,
      reg
      } = useSelector((state) => state.birth);
    useEffect(() => {
    getRegs(dispatch,id)
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
    <div className="font-medium text-md text-500 mb-3">BIRTH CERTIFICATE NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.Certificate_No}</div>
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
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.Date_Registerred}</div>
  </div>
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">REGISTRATION CENTRE</div>
            <div className="text-900">{reg&&reg.Reg_CenterData?.Reg_Center_Name}</div>
            
        </div>
        {/* <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
            <div className="text-900">Demsa</div>
        </div> */}
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            
            <div className="text-900">{reg&&reg.LGA_of_BirthData?.LGA_Name}</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
           
            
            <div className="text-900"> {reg&&reg.LGA_of_BirthData?.States.State_Name}</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of child</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.FirstName} {reg&&reg.MiddleName} {reg&&reg.SurName}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">D0B</div>
            <div className="text-900">{reg&&reg.Date_Of_Birth}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Gender</div>
            <div className="text-900">{reg&&reg.GenderData?.Gender}</div>
            
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Place of birth</div>
            <div className="text-900">{reg&&reg.Birth_PlaceData?.BirthPlace_Desc}</div>
           
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
           
            <div className="text-900">{reg&&reg.LGA_of_OriginData?.LGA_Name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Type of birth</div>
            <div className="text-900">{reg&&reg.Birth_typeData?.Description}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Birth order</div>
            
            <div className="text-900">{reg&&reg.Birth_OrderData?.Desc}</div>
           
        </div>
      
       
       
    </div>

    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of Mother</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.Mother?.FirstName} {reg&&reg.Mother?.SurName}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.Mother?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.Mother?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.Mother?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">AGE OF BIRTH</div>
            
            <div className="text-900">{reg&&reg.Mother?.mother_age_at_birth}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital Status</div>
            <div className="text-900">{reg&&reg.Mother?.Marital_StatusData?.Status_Desc}</div>
            
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">ETHNIC ORIGIN</div>
            <div className="text-900">{reg&&reg.Mother?.Ethnic_GroupData?.Ethnic_Grp_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.Mother?.Country_of_OriginData?.Country_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.Mother?.State_of_OriginData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            <div className="text-900">{reg&&reg.Mother?.Literacy_LevelData?.Literacy}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            <div className="text-900">{reg&&reg.Mother?.EducationData?.Description}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">OCCUPATION</div>
            <div className="text-900">{reg&&reg.Mother?.OccupationData?}</div>
            
        </div> */}
      
       
       
    </div>
    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of father</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.Father?.FirstName} {reg&&reg.Father?.SurName}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.Father?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.Father?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.Father?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">AGE OF BIRTH</div>
            
            <div className="text-900">{reg&&reg.Father?.father_age_at_birth}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital Status</div>
            <div className="text-900">{reg&&reg.Father?.Marital_StatusData?.Status_Desc}</div>
            
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">ETHNIC ORIGIN</div>
            <div className="text-900">{reg&&reg.Father?.Ethnic_GroupData?.Ethnic_Grp_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.Father?.Country_of_OriginData?.Country_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.Father?.State_of_OriginData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            <div className="text-900">{reg&&reg.Father?.Literacy_LevelData?.Literacy}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            <div className="text-900">{reg&&reg.Father?.EducationData?.Description}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
       
       
    </div>
    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.Informant?.informant_names}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.Informant?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.Informant?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.Informant?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
    </div>
    <Button label="View Certificate" className="p-button-success my-2" />
</div>

    </div>
  )
}

export default SingleApplication