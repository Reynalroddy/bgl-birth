import React,{useState} from 'react'
import { Chart } from 'primereact/chart';
import './admin.css';
import male from "../assets/images/man.svg"
import female from "../assets/images/woman.svg"

import { Dialog } from 'primereact/dialog';

import SexBar from '../components/SexBar';
import BirthOccurence from '../components/BirthOccurence';
import MotherAge from '../components/MotherAge';
const Admin = () => {
// const lineRef= useRef(null);
const [visible,setVisible] = useState(false);
const onClick = () => {
setVisible(true);
}

const onHide = () => {
    setVisible(false);
}


  

    const barData = {
        labels: ['Borno','Abuja','Nasarawa','Kano','Lagos','Kaduna'],
        datasets: [{
            label:'States',
           data: [20, 40, 60,34,55,23],
           backgroundColor: ["#29F683"], 
           borderRadius:50,
           barThickness: 30,
           
        }],
    }  


    // const bar2Data = {
    //     labels: ['9-17','18-26','27-35','36-50','51 above'],
    //     datasets: [{
    //         label:'States',
    //        data: [20, 40, 60,34,27],
    //        backgroundColor: ["#248129"], 
    //        borderRadius:50,
    //        barThickness: 30,
    //     }]
    // };



    const data = {
        labels: ['0-1 years','1-5 years','5-10 years','10-17 years'],
        datasets: [{
            label:'Age',
           data: [20, 40, 60,78],
           backgroundColor: ["#2F96FB","#FEA93B","#0A5CAC"], 
           borderRadius:50,
           barThickness: 30,
        }]
     }
     const data12 = {
        labels: ['Kano','Lagos','Gombe'],
        datasets: [
            {
            label:'0-1',
           data: [20, 40, 60],
           backgroundColor: "#BC5FD3", 
           borderRadius:50,
           barThickness: 10,
        },
        {
            label: '1-5',
            backgroundColor: '#FF7F2A',
            data: [65, 59, 80],
            borderRadius:50,
           barThickness: 10,
        },
        {
            label: '5-10',
            backgroundColor: '#008000',
            data: [28, 48, 40],
            borderRadius:50,
           barThickness: 10,
        },
        {
            label:'10-17',
           data: [20, 40, 60],
           backgroundColor: "#D40000", 
           borderRadius:50,
           barThickness: 10,
        },
       
     
    ]
     }
     const doughnut =    {
     labels: ['Illiteracy', 'Literate'],
     datasets: [
         {
             data: [300, 50],
             backgroundColor: [
                 "#2F96FB",
                 "#FEA93B",
                
             ],
            }
        ],
        
    }

    // const barData2 = {
    //     labels: ['0-5 years', '6-10 years', '11-17 years'],
    //     datasets: [
    //         {
    //             label: '0-5 years',
    //             backgroundColor: '#2F96FB',
    //             borderColor: '#2F96FB',
    //             data: [65],
    //             borderRadius:50
    //         }, 
            // {
            //     label: '6-10 years',
            //     backgroundColor: '#FEA93B',
            //     borderColor: '#FEA93B',
            //     data: [28],
            //     borderRadius:50
            // }

            // , {
            //     label: '11-17 years',
            //     backgroundColor: '#0A5CAC',
            //     borderColor: '#0A5CAC',
            //     data: [18],
            //     borderRadius:50
            // }
        // ]
        // ,
        // datasets: [
         
        //     {
        //         label: '6-10 years',
        //         backgroundColor: '#FEA93B',
        //         borderColor: '#FEA93B',
        //         data: [28],
        //         borderRadius:50
        //     }
        // ]
    // };

    let horizontalOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {  
        legend: {
            // labels: {
            //     color: "red",
            //     fontSize: 18,
            //     backgroundColor:'green',
            // }
            display:false
        }
    },
        scales: {
            y: {
                grid: {
                    display: false,
                  }
            },
            x: {
                grid: {
                  display: false,
                }
              },
          }
      
    };

    let basicOptions = {
        
        aspectRatio: 2,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: false,
                  }
            },
            x: {
                grid: {
                  display: false,
                }
              },
          }
        // scales: {
        //     xAxes: [{
        //         barPercentage: 0.4
        //     }]
        // }
      
    };


    
  return (
    <>
    <div className="grid my-3">
          <div className="col-12  bg-green-700">
          <span className="text-0 font-bold text-sm">Total Registrations: 2,650,671</span> 
          </div>
        

        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-dark shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Pending Registrations</span>
                        <div className="text-0 font-medium text-xl">344,380</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">24 new </span>
                <span className="text-500">since last visit</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-light shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Approved Registrations</span>
                        <div className="text-0 font-medium text-xl">1,660,077</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">%52+ </span>
                <span className="text-500">since last week</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-darkness shadow-2 p-3 border-round ">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Printed Certificates</span>
                        <div className="text-0 font-medium text-xl">1,100,841</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">520  </span>
                <span className="text-500">newly registered</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-redz shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Queried Registrations</span>
                        <div className="text-0 font-medium text-xl">159,456</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">85 </span>
                <span className="text-500">responded</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Age</div> 
                        <span className='cursor-pointer' onClick={() => onClick()}>view more..</span>
                    </div>
                    <Chart type="bar" data={data}  options={horizontalOptions} />
                </div>
            </div>


      


            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Under 5 birth registrations</div>
                     
                    </div>

                    <Chart type="bar" data={barData} options ={basicOptions} />
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Mother's age at birth</div>
                     
                    </div>

                    {/* <Chart type="bar" data={bar2Data} options ={basicOptions} width="100%" /> */}
                    <MotherAge/>
                
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Mother's Literacy</div>
                      
                    </div>

                    <Chart type="doughnut" data={doughnut} style={{  width: '50%',margin:'0 auto' }}  />

                    <div className='bel flex flex-column'>
<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-blue-400 text-xs font-bold'>literate</p>
<p className='text-blue-400 text-xs font-bold'>1500</p>
</div>
<div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>

</div>
</div>



<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-yellow-400 text-xs font-bold'>Illiterate</p>
<p className='text-yellow-400 text-xs font-bold'>500</p>
</div>
<div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>

</div>
</div>

                    </div>
                </div>
            </div>
         
            <div className="col-12 md:col-6 lg:col-8 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth by place occurence</div>
                      
                    </div>

                    {/* <Chart type="line" data={lineData} ref={lineRef}  className='my-chart'/> */}
                    <BirthOccurence/>
                </div>
            </div>


            <div className="col-12 md:col-6 lg:col-4 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth by Sex</div>
                     
                    </div>

                  <SexBar/>
                    <div className='flex  justify-content-between'>
                    <div className='flex gap-2'>
                    <img src={male} className='' style={{width:'9px'}} alt=''/>
                    <p className='text-sm'>Male</p>
                    </div>

                    <div className='flex gap-2 '>
                    <img src={female} className='' style={{width:'14px'}} alt=''/>
                    <p className='text-sm'>Female</p>
                    </div>


                </div>
                </div>

               
            </div>


               
            <Dialog visible={visible} onHide={onHide} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}}>
            <div className="col-12  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth Registrations By Age Frequency By State</div> 
                    </div>
                    <Chart type="bar" data={data12}   />
                </div>
            </div>
</Dialog>

    </div>
    </>
  )
}

export default Admin