import NavHeader from "../NavHeader";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <NavHeader />
      <div className="banner-main-section">
        <h1 className="banner-title">cursos serfrontend</h1>
        <p className="banner-description">
          Tudo o que precisa saber para iniciar na carreira
        </p>
      </div>
    </header>
  );
}

export default Banner;
