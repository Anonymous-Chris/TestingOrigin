const Downtime = ()=>{
    const data = [
        {
        id: "26|0:00",
        bot: 60,
        top: 33.98,
        vi: 60,
        pack: 60,
        total: 213.98
        },
        {
        id: "26|1:00",
        bot: 60,
        top: 60,
        vi: 60,
        pack: 59.99,
        total: 239.99
        },
        {
        id: "26|2:00",
        bot: 60,
        top: 60,
        vi: 60,
        pack: 60,
        total: 240
        },
        {
        id: "26|3:00",
        bot: 60,
        top: 60,
        vi: 53.32,
        pack: 60,
        total: 233.32
        },
        {
        id: "26|4:00",
        bot: 60,
        top: 51.31,
        vi: 36.89,
        pack: 60,
        total: 208.2
        },
        {
        id: "26|5:00",
        bot: 60,
        top: 48.95,
        vi: 54.98,
        pack: 60,
        total: 223.93
        },
        {
        id: "26|6:00",
        bot: 47.83,
        top: 6.15,
        vi: 42.82,
        pack: 60,
        total: 156.8
        },
        {
        id: "26|7:00",
        bot: 2.37,
        top: 60,
        vi: 60,
        pack: 60,
        total: 182.37
        },
        {
        id: "26|8:00",
        bot: 60,
        top: 44.92,
        vi: 47.37,
        pack: 60,
        total: 212.29
        },
        {
        id: "26|9:00",
        bot: 42.08,
        top: 57.7,
        vi: 60,
        pack: 60.01,
        total: 219.79
        },
        {
        id: "26|10:00",
        bot: 34.39,
        top: 48.11,
        vi: 52.96,
        pack: 59.99,
        total: 195.45000000000002
        },
        {
        id: "26|11:00",
        bot: 18.21,
        top: 14.66,
        vi: 32.88,
        pack: 60,
        total: 125.75
        },
        {
        id: "26|12:00",
        bot: 60,
        top: 11.28,
        vi: 50.16,
        pack: 14.47,
        total: 135.91
        },
        {
        id: "26|13:00",
        bot: 60,
        top: 24.19,
        vi: 44.05,
        pack: 60.01,
        total: 188.25
        },
        {
        id: "26|14:00",
        bot: 60,
        top: 60,
        vi: 54.87,
        pack: 60,
        total: 234.87
        },
        {
        id: "26|15:00",
        bot: 60,
        top: 60,
        vi: 60.01,
        pack: 60,
        total: 240.01
        },
        {
        id: "25|16:00",
        bot: 47.76,
        top: 60,
        vi: 57.16,
        pack: 60,
        total: 224.92
        },
        {
        id: "25|17:00",
        bot: 55.45,
        top: 56.79,
        vi: 58.7,
        pack: 60,
        total: 230.94
        },
        {
        id: "25|18:00",
        bot: 55.7,
        top: 59.99,
        vi: 56.32,
        pack: 60,
        total: 232.01
        },
        {
        id: "25|19:00",
        bot: 45.96,
        top: 57.7,
        vi: 58.51,
        pack: 60,
        total: 222.17
        },
        {
        id: "25|20:00",
        bot: 49.8,
        top: 58,
        vi: 35.84,
        pack: 58.12,
        total: 201.76
        },
        {
        id: "25|21:00",
        bot: 49.79,
        top: 57.88,
        vi: 44.16,
        pack: 54.9,
        total: 206.73
        },
        {
        id: "25|22:00",
        bot: 48.07,
        top: 58.23,
        vi: 59.6,
        pack: 59.45,
        total: 225.35000000000002
        },
        {
        id: "25|23:00",
        bot: 33.49,
        top: 58.27,
        vi: 60,
        pack: 39.13,
        total: 190.89
        }
        ]
        return(
            <div className=" ">
            <div className="mb-1">    
            <div className="card-titlel6">Downtime</div>
             <div className="table-responsive scroll">
             <table className="table table-striped table-dark">
                  <thead>
                      <tr>
                      <th scope="col">Hour</th>
                        <th scope="col">Bot</th>
                        <th scope="col">Top</th>
                        <th scope="col">VI</th>
                        <th scope="col">Pack</th>
                        <th scope="col">Total</th>
                          </tr>
                       </thead>   
                          <tbody>
                          { data.map(item =>
                                <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.bot}</td>
                                <td>{item.top}</td>
                                <td>{item.vi}</td>
                                <td>{item.pack}</td>
                                <td>{item.total.toFixed(2)}</td>
                             </tr>
                          )}
                     </tbody> 
                </table>   
            </div>  
            </div>
          </div>
        );
        }

export default Downtime;