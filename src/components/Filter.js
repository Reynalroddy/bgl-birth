import React,{useState} from
 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
// import { useDispatch } from "react-redux";
// import { changePage,handleChange } from '../redux/birthSlice';
const Filter = () => {
    const [city, setCity] = useState('');
    // const dispatch = useDispatch();
    
    // const {
    //     isLoading,
    //     search,
    //     result_per_page,
    //     page,
    //     Sex,    
    //     Age,      
    //     BirthType,
    //     BirthOrder,
    //     BirthPlace,
    //   } = useSelector((state) => state.birth);

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  return  (
    <div className=" hidden md:flex justify-content-between">
        {/* <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} /> */}
       <div className='grid '>
<div className='col-12 md:col-3'>

            <InputText 
            // value={globalFilterValue1} 
            // onChange={onGlobalFilterChange1}
             placeholder="Keyword Search" />
       

</div>

<div className='col-12 md:col-3'>


<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>

</div>
<div className='col-12 md:col-3'>

<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
</div>
<div className='col-12 md:col-3'>
<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>

</div>
<div className='col-12 md:col-3'>

<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
</div>
<div className='col-12 md:col-3'>

<Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
</div>
       </div>
        
    </div>
)
}

export default Filter