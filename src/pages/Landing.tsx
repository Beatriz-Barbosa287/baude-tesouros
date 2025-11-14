import React from "react"
import "../styles/landing.css"
import logo from "../assets/banner.png"   // ajuste o nome real
import chest from "../assets/landing/chest.png"        // imagem da ilustração — ajuste conforme você tiver

export default function Landing() {
  return (
    <div className="landing-shell">
      <div className="landing-card">
        <img src={logo} alt="Baú de Tesouros" className="landing-logo" />

        <img src={chest} alt="Cofre" className="landing-img" />

        <button className="landing-btn-primary">ENTRAR</button>
        <button className="landing-btn-secondary">CADASTRE-SE</button>
      </div>
    </div>
  )
}
