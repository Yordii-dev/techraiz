import { useState } from "react";
import "./Cta.css";
import { useTranslation } from "../context/TranslationContext";

function Cta() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleClick = (e: any) => {
    console.log(document.querySelector(".top-container"));

    document
      .querySelector(".top-container")
      ?.classList.add("top-container-modal-open");
  };

  return (
    <div className="container__cta d-flex flex-column">
      <input
        className="text-white size-3 flex-grow-1 border-radius"
        type="email"
        placeholder="Tu email de contacto"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="size-4 opacity-3 weight-semibold text-white d-flex justify-content-between">
        <p>{t.hero.socialproof}</p>
        <p>Planes segun presupuesto</p>
      </div>
      <button
        className="w-100 btn size-3 bg-secondary text-primary weight-semibold border-radius"
        onClick={handleClick}
        data-bs-toggle="modal"
        data-bs-target="#successModal"
        disabled={!email.trim()}
      >
        Cotiza gratis
      </button>
    </div>
  );
}

export default Cta;
