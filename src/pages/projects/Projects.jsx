import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderGlobal from "../HeaderGlobal"
import translations from "../../data/translations.json"
import images from "../../assets/imagesMaps";

import "../../styles/Projects.css"

function Project(){
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    
  };  
  
  return(
    <>
      <HeaderGlobal language={language} setLanguage={handleLanguageChange} />
      <div className="back-to-pages">
        <Link to={"/"}>
          {translations[language].home}
        </Link>

        <Link>
          <p>/</p>
          {translations[language].project}
        </Link>         
      </div>
      <div className="body-project">
      <div className="row justify-content-md-center " id="">
        <div className="col-8 body-page-project">
          <h1>Projetos que Marcaram Minha Trajetória</h1>
          <div className="row">
            <div className="col">
              <div className="box-imageProjects background-white">
                <img src={images.logos.wellnova_img} alt="" />
                <div className="legend wellnova-legend">
                  <img src={images.logos.wellnova_legenda} alt="" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" background-glass projeto-details">
                <h1>{translations[language].project_details_wellnova_title}</h1>
                <p>{translations[language].project_details_wellnova}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className=" background-glass projeto-details">
                <h1>{translations[language].project_details_digitalpm_title}</h1>
                <p>{translations[language].project_details_digitalpm}</p>
              </div>
            </div>
            <div className="col">
              <div className="box-imageProjects background-white">
                <img src={images.logos.digitalpm} alt="" />
                <div className="legend digital-legend">
                  <img src={images.logos.logo_digitalpm} alt="" />
                </div>
              </div>
            </div>

          </div>
          <h1>Minha Jornada de Estudos</h1>
        </div>
      </div>
      </div>
    </>
  )
}

export default Project;