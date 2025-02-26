import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


import HeaderGlobal from "../HeaderGlobal"
import translations from "../../data/translations.json"
import images from "../../assets/imagesMaps"


import "../../styles/About.css"


function About(){
    const [language, setLanguage] = useState('pt');
    const location = useLocation();
    const isMyExperience = location.hash === '#my-experience';

    const [openSkillLevels, setOpenSkillLevels] = useState({});

    const handleTextSkillLevel = (index) => {
      setOpenSkillLevels((prev) => ({
        ...prev,
        [index]: !prev[index], // Inverte o valor do estado para o container clicado
      }));
    };

    const handleLanguageChange = (lang) => {
      setLanguage(lang);
    };
  
  return(
    <>
      <HeaderGlobal language={language} setLanguage={handleLanguageChange} />
      <div className="flex display-flex-column body-aboutMe">
        <div className="back-to-pages">
          <Link to={"/"}>
            {translations[language].home}
          </Link>

          <Link onClick={() => window.location.hash = '#about-me'}>
            <p>/</p>
            {translations[language].about}
          </Link>

          {isMyExperience && (            
            <Link onClick={() => window.location.hash = '#about-me'}>
              <p>/</p>
              {translations[language].button_experience}
            </Link>
          )}          
        </div>

        <div className="body-page-aboutMe">

          <div className="row justify-content-md-center full-page" id="my-experience">
            <div className="col-8">
              <h1 className="title-aboutMe" >{translations[language].title_experience}</h1>

              <div className="row experience-professional">                
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="logo">
                        <img src={images.logos.on_icon} alt="" />
                      </div>
                      <div className="name logo-ouronova">
                        <img src={images.logos.logo_ouronova} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      {translations[language].description_on}
                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                        <p>Python · Django · Bootstrap5 · CSS3 · React.js · Vite · JavaScript · GitHub · Docker</p>
                      </div>
                    </footer>
                  </div>
                </div>
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="logo">
                        <img src={images.logos.plusoft_logo} alt="" />
                      </div>
                      <div className="name">
                        <img src={images.logos.logo_plusoft} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      {translations[language].description_plusoft}

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                        <p>Django · Docker · Git · Desenvolvimento de API · Django REST Framework · Python · Kubernetes · Social Media API</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>

              <div className="row experience-professional">                
                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header className="roma-experience">
                      <div className="name logo-ouronova">
                        <img src={images.logos.logo_gruporomap} alt="" />
                      </div>
                    </header>
                    <main className="flex">
                      <p>{translations[language].description_roma}</p>

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                      <p>Python · VBA · HTML5 · CSS3 </p>
                      </div>
                    </footer>
                  </div>
                </div>

                <div className="col">
                  <div className="display-flex-column background-glass experience-box">
                    <header>
                      <div className="">
                        <h2>Freelancer</h2>
                      </div>
                      <div className="">
                        
                      </div>
                    </header>
                    <main className="flex">
                      <p>{translations[language].description_freelancer}</p>

                    </main>
                    <footer className="row">
                      <div className="col-3">
                        <p>{translations[language].skills}</p>
                      </div>
                      <div className="col">
                      Bootstrap · CSS3 · Docker · Git · GitHub · HTML5 · JavaScript · Kubernetes · Python · React · TypeScript · Tailwind · Vite · Bitbucket · Next.js
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
              <div className="my-skills" style={{margin:'3rem 0 0 0'}}>

                <h1 className="title-aboutMe">{translations[language].title_tecnologies}</h1>
                <div className="body-mySkills">
                  <main>
                    <div className="box background-glass">
                      <img src={images.logos.vite} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.react} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.html5} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.css3} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.javascript} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.typescript} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.nextjs} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.bootstrap} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.tailwind} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.python} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.nodejs} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.django} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.docker} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.git} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.kubernetes} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.github} alt="" />
                    </div>
                    <div className="box background-glass">
                      <img src={images.logos.bitbucket} alt="" />
                    </div>
                  </main>

                  <div className="skills-level">
                    <div className="title-skills-levels">
                      <h1 className="title-aboutMe">Front-end</h1>
                    </div>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.vite} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            React & Vite
                            <span>
                              <button onClick={() => handleTextSkillLevel(1)}>
                                <i className={`bi bi-chevron-${openSkillLevels[1] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '80%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>
                      {openSkillLevels[1] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_vite}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.react} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            React.js
                            <span>
                              <button onClick={() => handleTextSkillLevel(2)}>
                                <i className={`bi bi-chevron-${openSkillLevels[2] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '90%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[2] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_react}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.javascript} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            JavaScript
                            <span>
                              <button onClick={() => handleTextSkillLevel(3)}>
                                <i className={`bi bi-chevron-${openSkillLevels[3] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '70%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[3] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_js}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.typescript} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            TypeScript
                            <span>
                              <button onClick={() => handleTextSkillLevel(4)}>
                                <i className={`bi bi-chevron-${openSkillLevels[4] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '60%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[4] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_ts}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.nextjs} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Next.js
                            <span>
                              <button onClick={() => handleTextSkillLevel(5)}>
                                <i className={`bi bi-chevron-${openSkillLevels[5] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '55%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[5] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_ns}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel">
                            <img src={images.logos.bootstrap} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Bootstrap
                            <span>
                              <button onClick={() => handleTextSkillLevel(6)}>
                                <i className={`bi bi-chevron-${openSkillLevels[6] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '90%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[6] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_bootstrap}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.tailwind} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Tailwind
                            <span>
                              <button onClick={() => handleTextSkillLevel(7)}>
                                <i className={`bi bi-chevron-${openSkillLevels[7] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '40%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[7] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_tailwind}
                          </h3>
                        </div>
                      }
                    </section>

                    <div className="title-skills-levels">
                      <h1 className="title-aboutMe">Back-end</h1>
                    </div>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.python} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Python
                            <span>
                              <button onClick={() => handleTextSkillLevel(8)}>
                                <i className={`bi bi-chevron-${openSkillLevels[8] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '90%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[8] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_python}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.django} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Django
                            <span>
                              <button onClick={() => handleTextSkillLevel(9)}>
                                <i className={`bi bi-chevron-${openSkillLevels[9] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '90%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[9] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_django}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.nodejs} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Node.js
                            <span>
                              <button onClick={() => handleTextSkillLevel(10)}>
                                <i className={`bi bi-chevron-${openSkillLevels[10] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '60%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[10] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_nodejs}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.docker} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Docker
                            <span>
                              <button onClick={() => handleTextSkillLevel(12)}>
                                <i className={`bi bi-chevron-${openSkillLevels[11] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '40%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[11] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_docker}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.kubernetes} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Kubernetes 
                            <span>
                              <button onClick={() => handleTextSkillLevel(12)}>
                                <i className={`bi bi-chevron-${openSkillLevels[12] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '30%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[12] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_kubernets}
                          </h3>
                        </div>
                      }
                    </section>

                    <div className="title-skills-levels">
                      <h1 className="title-aboutMe">{translations[language].repository}</h1>
                    </div>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.git} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Git 
                            <span>
                              <button onClick={() => handleTextSkillLevel(13)}>
                                <i className={`bi bi-chevron-${openSkillLevels[13] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '70%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[13] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_git}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.github} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            GitHub
                            <span>
                              <button onClick={() => handleTextSkillLevel(14)}>
                                <i className={`bi bi-chevron-${openSkillLevels[14] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '70%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[14] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_github}
                          </h3>
                        </div>
                      }
                    </section>

                    <section >
                      <div className="row row-skillsLevel">
                        <div className="col-1">
                          <div className="box background-glass default-icon-skillsLevel" style={{display: 'flex', alignItems: 'center'}} >
                            <img src={images.logos.bitbucket} alt="" />
                          </div>

                        </div>
                        <div className="col">
                          <h2>
                            Bitbucket 
                            <span>
                              <button onClick={() => handleTextSkillLevel(15)}>
                                <i className={`bi bi-chevron-${openSkillLevels[15] ? 'up': 'down' }`}></i>
                              </button>
                            </span>
                          </h2>
                          <section>

                          <div className="progress background-glass" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: '70%'}}></div>
                          </div>
                          </section>
                        </div>
                      </div>

                      {openSkillLevels[15] && 
                        <div className="open">
                          <h3>
                            {translations[language].text_bitbuket}
                          </h3>
                        </div>
                      }
                    </section>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About;