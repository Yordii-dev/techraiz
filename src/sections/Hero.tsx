import "./Hero.css";

import SocialProof from "../components/SocialProof";
import Cta from "../components/Cta";

function Hero() {
  return (
    <div className="hero-container bg-primary d-flex flex-column justify-content-between">
      <div className="hero-container__hero d-flex my-auto align-items-center justify-content-center">
        <div className="hero-container__hero__content text-white">
          <div className="hero-container__hero__content__title">
            <h1 className="size-1 weight-bold">
              Convierte el caos
              <br />
              inmobiliario en
              <br />
              gestión y flujo
            </h1>
          </div>
          <div className="hero-container__hero__content__subtitle">
            <p className="size-2 weight-regular opacity-1">
              En TechRaiz diseñamos sistemas para que recuperes el control,
              automatices tareas y hagas crecer tu inmobiliaria.
            </p>
          </div>
          <Cta />

          <div className="size-4 weight-regular text-white">
            <p className="p-0 m-0">
              Mantenimiento al año{" "}
              <span className="weight-semibold text-secondary">gratis</span> en
              tu primer proyecto.
            </p>
            <p className="p-0 m-0 mt-2">
              ¡Aprovecha ahora un{" "}
              <span className="weight-semibold text-secondary">
                40% de descuento
              </span>{" "}
              exclusivo!
            </p>
          </div>
        </div>

        <div className="hero-container__img d-flex justify-content-center align-items-center">
          <img src="img/img-hero.svg" alt="" />
        </div>
      </div>

      <div className="socialproofs mx-auto text-white text-center">
        <p className="size-3 opacity-1">Las empresas confian en nosotros</p>
        <div className="list d-flex justify-content-between">
          <SocialProof text="+8 años" />
          <SocialProof text="LATAM & Norteamerica" />
          <SocialProof text="Inmobiliarias" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
