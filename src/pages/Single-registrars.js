// import React, {  useState } from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import React,{useEffect,useState,useRef} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
const SingleRegistrars = () => {
    const [loading1, setLoading1] = useState(true);
    const [filters1, setFilters1] = useState(null);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const getDatz=async ()=>{
  // const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
  // console.log(statz.data.results)
  const statz = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(statz.data)
  // setMyStatz(statz.data.mtn);
  setProducts(statz.data)
  console.log(statz.data)
      // setProducts(statz.data.results)
      setLoading1(false)
      }
              getDatz()
             
  
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
     
              initFilters1();
  
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  
  const initFilters1 = () => {
      setFilters1({
          'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        
      });
       
      setGlobalFilterValue1('');
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
  const statusBodyTemplate2 = (rowData) => {
      return <Link  className={`bg-primary border-round-lg text-sm text-primary font-bold p-1`} to={`/single-registrars/${rowData.id}`} >
  VIEW CERTIFICATE
      </Link>
  }
  const statusBodyTemplate1 = (rowData) => {
    return <span  className={`btn  text-primary font-bold`} >
Status
    </span>
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
     
  
  const cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ];
  
  const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));
  
  const exportPdf = () => {
    import('jspdf').then(jsPDF => {
        import('jspdf-autotable').then(() => {
            const doc = new jsPDF.default(0, 0);
            doc.autoTable(exportColumns, products);
            doc.save('products.pdf');
        })
    })
  }
  
  
  const exportExcel = () => {
    import('xlsx').then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(products);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAsExcelFile(excelBuffer, 'products');
    });
  }
  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((FileSaver) => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  };
    const cities = [
        { name: 'DCR', code: 'cdr' },
        // { name: 'Death Registrations', code: 'RM' },
        // { name: 'Birth Registrations & Death Registrations', code: 'LDN' },
        
    ];
  // const guy=[1,2]
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);
//   const[city,setCity] = useState();
  const onCityChange = (e) => {
    setSelectedCity1(e.value);
}
      const dialogFuncMap = {
         
          'displayBasic2': setDisplayBasic2,
         
      }
  
      const onClick = (name, position) => {
          dialogFuncMap[`${name}`](true);
  
         
      }
  
  
      const onHide = (name) => {
          dialogFuncMap[`${name}`](false);
      }
  
      const renderFooter = (name) => {
          return (
              <div className='flex justify-content-between'>
                  <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                  <Button label="Approve" icon="pi pi-check" onClick={() => onHide(name)} className="p-button-success" />
                 
              </div>
          );
      }
  return (
    <div>

<div className="surface-card p-4 shadow-2 border-round my-2">



        <div className="flex flex-column md:flex-row md:flex-wrap pt-2 border-top-1 border-bottom-1 border-green-300">
         
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone Number</div>
            <div className="text-900">09/11/2020</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Email Address</div>
            <div className="text-900">male</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
            <div className="text-900">Hospital</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Reg Centre</div>
            <div className="text-900">Dubai</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-600 font-bold text-sm mb-2">TOTAL REGISTRATIONS</div>
            <div className="text-900">800</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        
      
       
       
       
    </div>

   
   
    <div className='flex gap-3 flex-column md:flex-row'>

    <Button label="Update Role" className="p-button-success my-2"onClick={() => onClick('displayBasic2')} />
    <Button label="Deactivate" className="p-button-warning my-2" />
   
    </div>
  </div>
     <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-4 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Registrations</span>
        <div className="hidden md:flex align-items-center export-buttons">
           
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
           
        </div>
       
    </div>
             <DataTable value={products} 
             ref={dt}
                  filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                     
                            <Column field="username" header="Surname "></Column>
                            <Column field="email" header="First Name "></Column>
                            <Column field="phone" header="Middle Name "></Column>
                            <Column field="name" header="Certificate Number"></Column>
                            <Column field="" header="Status" body={statusBodyTemplate1} />
                           
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                </div>
            </div>
            
           
{/* </div>   */}
</div>
<Dialog header="Assign Role" visible={displayBasic2} style={{ width: '30vw',color:'#565656' }} breakpoints={{'960px': '95vw'}} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className="flex">  
                <div className='w-full px-4'>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} style={{width:'100%'}} optionLabel="name" placeholder="Select Role" />
            

                </div>
              
                 
                   

   </div>
                </Dialog>
    </div>
  )
}

export default SingleRegistrars;