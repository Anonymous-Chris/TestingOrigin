const { render } = wp.element;

import Downtime from './components/Downtime/index';
import Lowmaterials from './components/Lowmaterials/index';
import Shifts from './components/Shifts/index';
import Workorder from './components/Workorder/index';
import Workordergraph from './components/Workordergraph/index';

const App = () => {
    return ( 
    <div className="ml-1">
        
        <div className="row">
            <div className="col">
                <Workorder/>
            </div>
            <div className="col">
                <Workordergraph/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Lowmaterials/>
            </div>
            <div className="col">
                <Downtime/>
            </div>
        </div>
        <div className="row">
            <div className="shift">
                <Shifts/>
            </div>

        </div>
         
    </div>
    );
};
render( <App/> , document.getElementById(`react-main1`));