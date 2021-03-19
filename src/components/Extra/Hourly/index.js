
import ChartLayout from '../ChartLayout/index';

const Hourly = ()=>{
  const data = [
    {
      name: 'BOT AOI',
      failure: 10,
      success: 30,
      successRate: 60,
    },
    {
      name: 'TOP AOI',
      failure: 20,
      success: 300,
      successRate: 80,
    },
    {
      name: 'VI',
      failure: 120,
      success: 60,
      successRate: 90,
    },
    {
      name: 'OST',
      failure: 140,
      success: 70,
      successRate: 50,
    },
    {
      name: 'BSI',
      failure: 10,
      success: 70,
      successRate: 75,
    },        {
      name: 'FT',
      failure: 19,
      success: 60,
      successRate: 89,
    },
    {
      name: 'ICT',
      failure: 20,
      success: 50,
      successRate: 76,
    },
    {
      name: 'PACK AOI',
      failure: 16,
      success: 60,
      successRate: 59,
    },
  ];
  
      

        return(
            <div className="row">
            <div className="col-9">
            <ChartLayout data={data}/>
            </div>
            <div className="col-3">
                
            </div>
        </div>
        );
        }

export default Hourly;