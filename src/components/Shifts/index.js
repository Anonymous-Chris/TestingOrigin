
import Daily from '../Extra/FlickityCarousel/Daily/index';
import Hourly from '../Extra/FlickityCarousel/Hourly/index';
import Weekly from '../Extra/FlickityCarousel/Weekly/index';
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import 'flickity-as-nav-for';

const Shifts = ()=>{
    const flickityOptions = {
        pageDots: false,
        autoPlay:15000,
        draggable:false
      };
  
      const flickityOptions1 = {
        asNavFor: ".carousel-main",
        pageDots: false,
        draggable:false
      };
        return(
        <div style={{ height: '44vh'}} className=" mb-2 modul_col ml-3 mr-3" >
         <div  className="overallFPY">
         <h5>Overall FPY : 90%</h5>
         </div>
         

          <Flickity
        className="carousel carousel-nav"
        options={flickityOptions1}
      >
        <div className="carousel-cell mb-2" >Hourly</div>
        <div className="carousel-cell mb-2" >Daily</div>
        <div className="carousel-cell mb-2" >Weekly</div>

      </Flickity>
    

      <Flickity
        className="carousel carousel-main"
        options={flickityOptions}
        disableImagesLoaded={false}
      >
        <div className="carousel-cell" ><Hourly/></div>
        <div className="carousel-cell" ><Daily/></div>
        <div className="carousel-cell" ><Weekly/></div>

      </Flickity>
        </div>
        );
        }

export default Shifts;