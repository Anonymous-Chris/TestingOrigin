
import ChartLayout from '../../ChartLayout/index';
import DatePicker from '../../Pickers/DatePicker/index';
const Weekly = ()=>{
  const data = [
    {
      name: 'BOT AOI',
      failure: 1000,
      success: 3000,
      successRate: 60,
    },
    {
      name: 'TOP AOI',
      failure: 2000,
      success: 5000,
      successRate: 80,
    },
    {
      name: 'VI',
      failure: 1200,
      success: 6000,
      successRate: 90,
    },
    {
      name: 'OST',
      failure: 1040,
      success: 7000,
      successRate: 50,
    },
    {
      name: 'BSI',
      failure: 1600,
      success: 7500,
      successRate: 75,
    },        {
      name: 'FT',
      failure: 1900,
      success: 600,
      successRate: 89,
    },
    {
      name: 'ICT',
      failure: 2000,
      success: 5040,
      successRate: 76,
    },
    {
      name: 'PACK AOI',
      failure: 160,
      success: 6000,
      successRate: 59,
    },
  ];
  

        return(
            <div className="row">
            <div className="col-9">
            <ChartLayout data={data}/>
            </div>
            <div className="col-3">
                <DatePicker/>
            </div>
        </div>
        );
        }

export default Weekly;