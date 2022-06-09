import TopBanner from "../components/topBanner/TopBanner";
import BannerAboout from "../components/banner/BannerAbout";
import Slider from "../components/slider/Slider";
import { images } from '../components/slider/imgs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const LandingPage = () => (
  <>
  <TopBanner/>
    <Slider images={images} />
  <BannerAboout />
  </>
)

export default LandingPage;