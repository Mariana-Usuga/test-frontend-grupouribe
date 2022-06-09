import './bannerAbout.scss'

const BannerAboout = () => (
  <div className="bannerAbout">
    <div className="bannerAbout__img">
      <img src="https://esprit.vtexassets.com/arquivos/esprit-twininning.jpg" alt="" />
    </div>
    <div className="bannerAbout__imgCompanyName">
      <img src="https://esprit.vtexassets.com/arquivos/twinning.png?%20v=3423" alt="" />
    </div>
    <div className="bannerAbout__companyAbout">
      <p className="bannerAbout__companyAbout__p">
        Diseñamos una capsula de prendas twining para que las mamas hagan match con sus hijas y celebren juntas 
        su dia.</p>
      <button type="button" className="bannerAbout__companyAbout__btn">VER MAS</button>
    </div>
  </div>
)

export default BannerAboout;
