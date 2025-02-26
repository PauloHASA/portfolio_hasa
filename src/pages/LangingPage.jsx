import "../styles/LandingPage.css"

import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderGlobal from "./HeaderGlobal"
import translations from "../data/translations.json"

import Spline from '@splinetool/react-spline';

import Images from "../assets/imagesMaps";
import images from "../assets/imagesMaps";


function LandingPage() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    
  };

  const github_url = "https://github.com/PauloHASA"
  const linkedin_url = "https://www.linkedin.com/in/paulo-henrique-almeida-da-silva-alves-55a17328b/"
  const whatsapp_url = "https://wa.me/5511963965062"


  return(
    <>
      <main  className="flex display-flex-column main-landingPage">
        <HeaderGlobal language={language} setLanguage={handleLanguageChange} />
        <div className="row  justify-content-md-center row-fullpage">
          <div className="col-9">
            <div className="fullPage homePage" id="homePage">
              
            <section>
              <h4> {translations[language].greeting} <span>{translations[language].name}</span></h4>
              <div className="border-line"></div>
              <div className="animation-txt">
                <p> {translations[language].professional} <span>{translations[language].fullstack}</span></p>
                <p> {translations[language].professional} <span>{translations[language].frontend}</span></p>
                <p> {translations[language].professional} <span>{translations[language].backend}</span></p>
              </div>

              <div className="icons-socialmedia" style={{padding: '1rem 0 0 0'}}>
              <Link to={github_url} target="_blank" >
                <i className="bi bi-github"></i>
              </Link>
              <Link to={linkedin_url} target="_blank">
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link>
                <i className="bi bi-envelope-arrow-up-fill"></i>
              </Link>
              <Link  to={whatsapp_url} target="_blank">
                <i className="bi bi-whatsapp"></i>
              </Link>
            </div>
            </section>

            <section className="robot-spline">
                <Spline
                  scene="https://prod.spline.design/0EOius4itJaCm9t6/scene.splinecode" 
                />
            </section>


            </div>
            <div className="fullPage aboutMe" id="aboutMe">

              <div className="row" style={{height: '100%', alignItems: 'center'}}>
                <div className="col" style={{alignItems: 'center'}}>
                  <div className="box-imgDev">
                    <div className="border" style={{top:'-234px', left:'66px'}}></div>
                    <div className="border"></div>
                    <img src={images.logos.dev_img} alt="" />
                  </div>
                </div>

                <div className="col col-txt-aboutMe">
                  <h1>{translations[language].about}</h1>
                  <div className="border-line"></div>
                  <p>{translations[language].about_me_one}</p>
                  <p>{translations[language].about_me_two}</p>
                  <footer>
                    <button 
                    className="see-more"
                    onClick={() => window.location.href = '/about'}
                    >                
                      {translations[language].button_experience}                
                    </button>
                    <button 
                      className="see-projects"
                      onClick={() => window.location.hash = '#projectsPage'}
                    >
                      {translations[language].button_projects}                
                    </button>
                  </footer>

                </div>
              </div>
              


            </div>

            <div className="fullPage display-flex-column projectsPage" id="projectsPage" style={{padding: '0rem 0'}}>
              
              <div className="row" style={{margin: '0 0 3rem 0'}}>
                <div className="col-5">
                  <div className=" background-glass img-content">
                    <img src={images.logos.wellnova_img} alt="" />
                  </div>
                </div>
                <div className="col-5 display-flex-column default-text-project">
                  <h5>
                    {translations[language].project_details_wellnova_title}                
                  </h5>

                  <p>
                    {translations[language].project_details_wellnova}                
                  </p>
                  <div className="flex"></div>
                  <Link to={'https://smartion.ai/'} target="_blank" rel="noopener noreferrer">
                    {translations[language].explore_project}                
                  </Link>
                  
                </div>
              </div>

              <div className="row" style={{margin: '0 0 3rem 0'}}>
              <div className="col-5 display-flex-column default-text-project">
                  <h4>
                    {translations[language].project_details_digitalpm_title}                
                  </h4>

                  <p>
                    {translations[language].project_details_digitalpm}                
                  </p>
                  <div className="flex"></div>
                  <Link to={'https://ouronova.digital/'} target="_blank" rel="noopener noreferrer">
                    {translations[language].explore_project}                
                  </Link>
                  
                </div>

                <div className="col-5">
                  <div className=" background-glass img-content">
                    <img src={images.logos.digitalpm} alt="" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/*

        <div className="row flex">
          <div className="col principal-container">

          </div>
          <div className="col-1 nav-principal">
            <nav className="display-flex-column">
              <Link to={"/"} className="tooltip-container">
                <i className="bi bi-house"></i>
                <i className="bi bi-house-check-fill icon-hover"></i>
                <span className="tooltip-text">{translations[language].home}</span>
              </Link>
              <Link to={"/about"} className="tooltip-container">
                <i className="bi bi-person"></i>
                <i className="bi bi-person-fill-check icon-hover"></i>
                <span className="tooltip-text">{translations[language].about}</span>
              </Link>
              <Link to={"/project"} className="tooltip-container">
                <i className="bi bi-columns"></i>
                <i className="bi bi-columns-gap icon-hover"></i>
                <span className="tooltip-text">{translations[language].project}</span>
              </Link>
              <Link to={"/contact"} className="tooltip-container">
                <i className="bi bi-envelope"></i>
                <i className="bi bi-envelope-check-fill icon-hover"></i>
                <span className="tooltip-text">{translations[language].contact}</span>
              </Link>
            </nav>
          </div>
        </div>
        */}

      </main>
    </>
  );
}

export default LandingPage;