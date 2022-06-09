import TopBanner from "../components/topBanner/TopBanner";
import BannerAboout from "../components/Banner/BannerAbout";
import Slider from "../components/slider/slider";
import { images } from '../components/slider/imgs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const LandingPage = () => (
  <>
  <TopBanner/>
    <div style={{
      //display:"flex",
      //alignItems:"center",
      //justifyContent:"center",
      //margin:"150px"
      marginTop:"150px"
    }}>
    <Slider images={images} />
    </div>
  <BannerAboout />
  </>
)

export default LandingPage;
//width:"1000px",
  //    textAlign:"center",
    //  margin:"auto",
      //marginTop:"150px"