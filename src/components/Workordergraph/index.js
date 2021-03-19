import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

const Workordergraph = ()=>{
    const graphData= [
        {
        seq: 1,
        schedule: "2910000393",
        totalQty: 170,
        completeQty: 170,
        bottom: 0,
        top: 0,
        pth: 9,
        repair: 5
        },
        {
        seq: 2,
        schedule: "2910000304",
        totalQty: 2000,
        completeQty: 2000,
        bottom: 0,
        top: 211,
        pth: 264,
        repair: 18
        },
        {
        seq: 3,
        schedule: "2910000382",
        totalQty: 10,
        completeQty: 10,
        bottom: 0,
        top: 0,
        pth: 0,
        repair: 5
        }
        ];
    let values1,values2,values3,data;
    if(graphData.length===3){ 
       values1 = (Object.values(graphData[0]));
       values2 = (Object.values(graphData[1]));
       values3 = (Object.values(graphData[2]));

     }
        if(values1!==undefined || values2!==undefined ||values3!==undefined){
          data = [
            {
              name: 'Total Qty',
             workorder1: 100,
             workorder2: 100,
             workorder3: 100
        
            },
            {
              name: 'Complete Qty',
              workorder1: ((values1[3]/values1[2])*100).toFixed(2),
              workorder2: ((values2[3]/values2[2])*100).toFixed(2),
              workorder3: ((values3[3]/values3[2])*100).toFixed(2)
        
            },
            {
              name: ' Bottom',
              workorder1: ((values1[4]/values1[2])*100).toFixed(2),
              workorder2: ((values2[4]/values2[2])*100).toFixed(2),
              workorder3: ((values3[4]/values3[2])*100).toFixed(2)
        
            },
            {
              name: ' Top',
              workorder1: ((values1[5]/values1[2])*100).toFixed(2),
              workorder2: ((values2[5]/values2[2])*100).toFixed(2),
              workorder3: ((values3[5]/values3[2])*100).toFixed(2)
        
            },
            {
              name: ' Pth',
              workorder1: ((values1[6]/values1[2])*100).toFixed(2),
              workorder2: ((values2[6]/values2[2])*100).toFixed(2),
              workorder3: ((values3[6]/values3[2])*100).toFixed(2)
        
            },
            {
              name: ' Repair',
              workorder1: ((values1[7]/values1[2])*100).toFixed(2),
              workorder2: ((values2[7]/values2[2])*100).toFixed(2),
              workorder3: ((values3[7]/values3[2])*100).toFixed(2)
            }
          ];
    }
    const CustomTooltip = ({ active, payload, label }) => {
        if(payload!==undefined  && payload!==null ){
            if(active){
              return (
                <div className="custom-tooltip">
                  <p className="custom-l">{label}</p>
                  {
                     (payload[0]!==undefined  && payload[0]!==null)? ( <p className="custom-p">{payload[0].name} : {payload[0].value+'%'}</p>):null
                  }
                  {
                    (payload[1]!==undefined  && payload[1]!==null)?( <p className="custom-p2">{payload[1].name} : {payload[1].value+'%'}</p>):null
                  }
                  {                 
                  (payload[2]!==undefined  && payload[2]!==null)?(<p className="custom-p3">{payload[2].name} : {payload[2].value+'%'}</p>):null          
                  }
                
                 
  
                  </div>
              );
            }
            return null;
        }
        return null;
    
      }
        return(
            <div className=" mb-2 mr-3">
                <div className="card-titlel6">Schedule Work Order
         
                </div>
               <div className="card-contentl6x">
               <ResponsiveContainer width={'99%'} height={200}>
               <LineChart width={500} height={200} data={data}>
                    <CartesianGrid Dasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Legend />
                    <Line type="monotone" dataKey="workorder1" stroke="#F83F06" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="workorder2" stroke="#F8B823" activeDot={{ r: 5 }}/>
                    <Line type="monotone" dataKey="workorder3" stroke="#5150F1" activeDot={{ r: 5 }}/>
                </LineChart>
                </ResponsiveContainer>
                </div>  
            </div>
        );
        }

export default Workordergraph;