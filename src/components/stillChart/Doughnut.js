import React,{useState,useEffect} from 'react'
import { Chart } from 'primereact/chart';
import '../../pages/admin.css';
import authFetch from '../../axios';
import Loading from '.././Loading';
const Doughnut = () => {
       const [chartData, setChartData]  = useState({});
       const [load, setLoad]  = useState(true);
       const [dats, setDats]  = useState();
       const chart = () => {
         let female;
         let male;
           authFetch.get("https://npc-api.dsaved.com/v0/stillbirth/stats/bygendercount")
           .then(res => {
               console.log(res.data);
               setLoad(false);
               setDats(res.data)
             female= res.data[1].Count;
             male=res.data[0].Count;
   
               setChartData(
                {
                    labels: ['Male', 'Female'],
                    datasets: [
                        {
                            data: [male, female],
                            backgroundColor: [
                                "#2F96FB",
                                "#FEA93B",
                               
                            ],
                           }
                       ],
                       
                   }
               )
       })
       .catch(err =>{
           console.log(err);
       })
   }
       useEffect(() => {
         
       chart();
       }, [])
       if(load){
           return (
               <Loading/>
           )
               }
  return (
   <>
     <Chart type="doughnut" data={chartData} style={{  width: '50%',margin:'0 auto' }}  />
     {dats &&
<div className='bel flex flex-column'>
<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-blue-400 text-xs font-bold'>Male</p>
<p className='text-blue-400 text-xs font-bold'>{dats&& dats[0].Count}</p>
</div>
<div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>

</div>
</div>



<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-yellow-400 text-xs font-bold'>Female</p>
<p className='text-yellow-400 text-xs font-bold'>{dats && dats[1].Count}</p>
</div>
<div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>

</div>
</div>

</div>
}
   </>

  )
}

export default Doughnut