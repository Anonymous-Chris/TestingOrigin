const Lowmaterials = ()=>{
    const data = [
        {
        seq: 1,
        materialCode: "MP-10031601-012",
        device: "-",
        position: "-",
        remaining: 100,
        remainingPart: 0,
        deficit: 100
        },
        {
        seq: 2,
        materialCode: "MP-10031601-012",
        device: "-",
        position: "-",
        remaining: 100,
        remainingPart: 0,
        deficit: 100
        },
        {
        seq: 3,
        materialCode: "MP-10031167-004",
        device: "BICMX4S-2",
        position: "2-24-1",
        remaining: 7700,
        remainingPart: 2000,
        deficit: 74.02597402597402
        },
        {
        seq: 4,
        materialCode: "MP-00013123-008",
        device: "BICMX4S-2",
        position: "3-11-1",
        remaining: 9500,
        remainingPart: 3000,
        deficit: 68.42105263157895
        },
        {
        seq: 5,
        materialCode: "MP-00013613-004",
        device: "BICMX4S-2",
        position: "2-25-1",
        remaining: 6000,
        remainingPart: 2000,
        deficit: 66.66666666666667
        },
        {
        seq: 6,
        materialCode: "MP-00005375-004",
        device: "BICMX4S-2",
        position: "2-36-1",
        remaining: 5800,
        remainingPart: 3920,
        deficit: 32.41379310344828
        },
        {
        seq: 7,
        materialCode: "MP-00000047-00A",
        device: "BICMX4S-1",
        position: "3-02-1",
        remaining: 14400,
        remainingPart: 10000,
        deficit: 30.555555555555557
        },
        {
        seq: 8,
        materialCode: "MP-00000284-000",
        device: "BICMX4S-1",
        position: "2-35-1",
        remaining: 10200,
        remainingPart: 7400,
        deficit: 27.45098039215686
        },
        {
        seq: 9,
        materialCode: "MP-10031085-004",
        device: "BICMX4S-1",
        position: "2-08-1",
        remaining: 400,
        remainingPart: 293,
        deficit: 26.75
        },
        {
        seq: 10,
        materialCode: "MP-00013822-008",
        device: "BICMX4S-1",
        position: "3-11-1",
        remaining: 10900,
        remainingPart: 10000,
        deficit: 8.256880733944953
        },
        {
        seq: 11,
        materialCode: "MP-10006577-007",
        device: "BICMX4S-1",
        position: "3-14-1",
        remaining: 200,
        remainingPart: 190,
        deficit: 5
        },
        {
        seq: 12,
        materialCode: "MP-00016330-008",
        device: "BICMX4S-2",
        position: "2-35-1",
        remaining: 3100,
        remainingPart: 3000,
        deficit: 3.225806451612903
        }
        ]
        return(
            <div className=" ">
              <div className="mb-1">    
              <div className="card-titlel6">Low Materials</div>
               <div className="table-responsive scroll">
               <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Material Code</th>
                        <th scope="col">Device</th>
                        <th scope="col">Position</th>
                        <th scope="col">Needed</th>
                        <th scope="col">Remaining</th>
                            </tr>
                         </thead>   
                            <tbody>
                            { data.map(item =>
                                <tr key={item.seq}>
                                <th scope="row">{item.materialCode}</th>
                                <td>{item.device}</td>
                                <td>{item.position}</td>
                                <td>{item.remaining}</td>
                                <td>{item.remainingPart}</td>
                                </tr>
                            )}
                       </tbody> 
                  </table>   
              </div>  
              </div>
            </div>
        );
        }

export default Lowmaterials;