import React,{useEffect,useState} from 'react'
// import { Chart } from 'primereact/chart';
import axios from 'axios';
import Loading from './Loading';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
 
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
const MotherAge = () => {
    const bar2Data = [
        {name: '9-17',
        uv: 40,
        pv: 2400,
      },
      {name: '18-26',
      uv: 20,
      pv: 2400,
    },
    {name: '27-35',
    uv: 22,
    pv: 2400,
  }
  ,
  {name: '36-50',
  uv: 10,
  pv: 2400,
},
{name: '51 above',
uv: 48,
pv: 2400,
}
    ]
    // eslint-disable-next-line
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let northCen ;
        let northEas ;
        let northWes ;
        let southEas;
        let southSou ;
        let southWes;
        axios.get("https://npc-api.dsaved.com/v0/birth-registration/stats/regional")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            // for(const dataObj of res.data){
                northCen=res.data[1]['North-Central'];
                northEas=res.data[2]['North-East'];  
                northWes=res.data[3]['North-West'];
                southEas=res.data[4]['South-East'];
                southSou=res.data[5]['South-South'];
                southWes=res.data[6]['South-West'];
            //     // deathReg.push(parseInt(dataObj.employee_salary));
            //     deathReg.push(dataObj.deathreg);
            //     // birthReg.push(dataObj.birth-reg);
            //     birthReg.push(dataObj.birthreg);
            //     birthAttest.push(dataObj.attestation);
            //     still.push(dataObj.stillbirth);
            //     // empAge.push(parseInt(dataObj.employee_age ));
            // }

            setChartData(
                {
                    labels: ['Birth Registration','Death Registration','Birth Attestation','Still Birth'],
                    datasets: [
                        {
                        label:'North Central',
                       data: northCen,
                       backgroundColor: "#BC5FD3", 
                       borderRadius:50,
                       barThickness: 15,
                    },
                    {
                        label: 'North East',
                        backgroundColor: '#FF7F2A',
                        data: northEas,
                        borderRadius:50,
                       barThickness: 15,
                    },
                    {
                        label: 'North West',
                        backgroundColor: '#008000',
                        data: northWes,
                        borderRadius:50,
                       barThickness: 15,
                    },
                    {
                        label:'South East',
                       data: southEas,
                       backgroundColor: "#D40000", 
                       borderRadius:50,
                       barThickness: 15,
                    },
                    {
                        label: 'South South',
                        backgroundColor: '#D4AA00',
                        data: southSou,
                        borderRadius:50,
                       barThickness: 15,
                    },
                    {
                        label: 'South West',
                        backgroundColor: '#0055D4',
                        data: southWes,
                        borderRadius:50,
                       barThickness: 15,
                    },
                ]
                 }
            )
    }).catch(err =>{
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
    <ResponsiveContainer width="100%" height={480}>
    <BarChart data={bar2Data} 
    margin={{ top: 50 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3 " /> */}
      <XAxis dataKey="name" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <defs>
      <linearGradient
        id="colorUv"
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        spreadMethod="reflect"
      >   
        <stop offset="0" stopColor="#15612B" />
        <stop offset="1" stopColor="#4BD024" />
      </linearGradient>
    </defs>
      <Bar dataKey="uv" fill="url(#colorUv)" barSize={30} radius={[15, 15, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default MotherAge