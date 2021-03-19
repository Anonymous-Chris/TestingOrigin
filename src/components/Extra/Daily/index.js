
import ChartLayout from '../ChartLayout/index';

const Daily = ()=>{
    const data = [
        {
          name: 'BOT AOI',
          failure: 100,
          success: 300,
          successRate: 60,
        },
        {
          name: 'TOP AOI',
          failure: 200,
          success: 500,
          successRate: 80,
        },
        {
          name: 'VI',
          failure: 120,
          success: 600,
          successRate: 90,
        },
        {
          name: 'OST',
          failure: 140,
          success: 700,
          successRate: 50,
        },
        {
          name: 'BSI',
          failure: 160,
          success: 750,
          successRate: 75,
        },        {
          name: 'FT',
          failure: 190,
          success: 600,
          successRate: 89,
        },
        {
          name: 'ICT',
          failure: 200,
          success: 540,
          successRate: 76,
        },
        {
          name: 'PACK AOI',
          failure: 160,
          success: 600,
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

export default Daily;