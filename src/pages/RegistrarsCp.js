import React,{useState,useEffect,useRef} from 'react'
import './admin.css';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/72.png'
import authFetch from '../axios';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Tooltip } from 'primereact/tooltip';
import { Column } from 'primereact/column';
const RegistrarsCp = () => {
  const [lists,setLists]=useState([]);
  const [loading,setLoading]=useState(false);
  const [filters1, setFilters1] = useState(null);
  const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const initFilters1 = () => {
    setFilters1({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      
    });
     
    setGlobalFilterValue1('');
}

const statusBodyTemplate4 = (rowData) => {
  return <p  className={`btn btn-primary text-primary font-bold`} >
{rowData.State.State_Name}
  </p>
}
const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    console.log(value);
    let _filters1 = { ...filters1 };
    _filters1['global'].value = value;
console.log(_filters1)
    setFilters1(_filters1);
    setGlobalFilterValue1(value);
}
  const clearFilter1 = () => {
    initFilters1();
}
const renderHeader1 = () => {
    return (
        <div className=" hidden md:flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
            </span>
        </div>
    )
}
const header1 = renderHeader1();
const dt = useRef(null);
  useEffect(() => {
    const viewBirth = async()=>{
      // /cert/birth/${reg?.Certificate_No}
      setLoading(true)
  try {
      // console.log(reg?.Certificate_No);
      const res = await authFetch.get(`/users/state-director-users?search=&result_per_page=10&page=1`);
      console.log(res.data);
      setLoading(false)
      setLists(res.data.result)
  } catch (error) {
      setLoading(false)
      console.log(error);
      // toast.current.show({ severity: 'error', summary: 'Error', detail: `` });
  }
    }
   viewBirth()
  }, [])
  
  if(loading){
  return       <div className="col-12">
  <div className='w-full flex flex-column '>
  <h4>Total state directors By States</h4>
  <div className='py-2 bg-green-500'>
  <div>loading....</div>
  </div>
  </div>
  </div>
  }
  return (
    <>
    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">State directors List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
           <Link to={'/directors-new'}>
           <Button type="button" icon="pi pi-user" label='Create new' className="p-button-success mr-2"  />
           </Link> 
            {/* <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" /> */}
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={lists} 
             ref={dt}
                  filters={filters1}
                    loading={loading}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            {/* <Column field="name" header="Certificate Number"></Column> */}
                            <Column field="UserName" header="Name"></Column>
                            <Column field="Email" header="Email"></Column>
                            <Column field="Phone_No" header="Phone number"></Column>
                            <Column field="Phone_No" header="Phone number"></Column>
                          
                            <Column field="User_ID" header="Id"></Column>
                           
                        <Column field="" header="state" body={statusBodyTemplate4} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                </div>
            </div>
            
           
</div> 
    </>
   
  )
}

export default RegistrarsCp;