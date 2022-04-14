import { useRef, useState } from "react";
import { ModalPortal } from "./props/modal_portal";
import aboutMeText from "./texts/about_me.json";

import { Image } from "./props/image";

import "./css/about_me.css";
import { SectionTitle } from "./props/template_stuff";

export function AboutMe({}){
  
  const [aboutMeArr, setAboutMeArr] = useState(aboutMeText?.entries)

  function addAboutMeEntry(title,content,img){
    setAboutMeArr([...aboutMeText,{
      title,
      content,
      img
    }])
  }

  const [agregarEntOpen, setAgregarEntOpen] = useState(false)
  const [agEntClassEff, setAgEntClassEff] = useState("fade-out")
  function agregarEntradaAbrir(e){
    if(e)e.preventDefault()
    
    setAgregarEntOpen(true)
    setTimeout(()=>{setAgEntClassEff("fade-in");},10)
  }

  function agregarEntradaCerrar(e){
    if(e)e.preventDefault()

    setAgEntClassEff("fade-out");
    setTimeout(()=>{
      setAgregarEntOpen(false)
    },300)
  }

  const agregarEntToSave=useRef(null);

  function agregarEntradaFinalizar(e){
    e.preventDefault()

    let obj={};

    console.clear()
    agregarEntToSave.current.querySelectorAll("[name]").forEach(element => {
      if(element.type == "file")
        obj[element.name]=URL.createObjectURL(element.files[0])
      else
        obj[element.name]=element.value
    });

    setAboutMeArr([...aboutMeArr,obj])
    agregarEntradaCerrar();
  }

  return <section className="section about-me" data-section="section1">

    <ModalPortal open={agregarEntOpen}>
      <div className={"agent_modal_w "+agEntClassEff}>
        <div className="agent_modal">
          <div className="close" onClick={agregarEntradaCerrar}>+</div>
          <SectionTitle title={"Agregue una entrada a \"Sobre mí\""} subtitle={aboutMeText.subtitle}/>
          <form ref={agregarEntToSave}>
            <label>
              <h5>Titulo</h5>
              <input className="form-control" type={"text"} name="title" autoComplete="false"></input>
            </label>
            <label>
              <h5>Texto</h5>
              <textarea className="form-control" name="content" autoComplete="false"></textarea>
            </label>
            <div className="label_like">
              <h5>Imagen</h5>
              <Image name="img"/>
            </div>
            <div className="am_btns">
              <button className="button" onClick={agregarEntradaFinalizar}>
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalPortal>

    <div className="container">

      <SectionTitle title={aboutMeText.title} subtitle={aboutMeText.subtitle}/>

      
      <div className="am_btns">
          <button className="button" onClick={agregarEntradaAbrir}>
            Agregar entrada
          </button>
      </div>


      <div>
      {
        (aboutMeArr?.constructor?.name == "Array")&&
        aboutMeArr.map((entry,index) => {
          return <AboutMeEntry
            left={index%2}
            img={entry.img}
            button={entry.button}
            key={"am"+index}
            divide={index!==0}
          >
            <h4>{entry.title}</h4>
            <p>{entry.content}</p>
          </AboutMeEntry>
        })
      }
      </div>
    </div>
  </section>;
}

function AboutMeEntry({children,button=null,img,left=true,divide=true}){
  
  const direction=(left?"left":"right");
  const opposite =(left?"right":"left");

  let leftContet=<div className={direction+"-text"}>
    {children}
    {
      button&&<div className="white-button">
        <a href="#">{button}</a>
      </div>
    }
  </div>

  let rightContent=<div className={opposite +"-image"}>
    <img src={img} alt="" />
  </div>

  if(direction=="right"){
    const holder=leftContet;
    leftContet=rightContent;
    rightContent=holder;
  }
  
  return <div className={direction+"-image-post "+(!divide?"":"divider-image-post")}>
    <div className="row">
      <div className="col-md-6">
        {leftContet}
      </div>
      <div className="col-md-6">
        {rightContent}
      </div>
    </div>
  </div>
}

/**

      <div className="right-image-post">
        <div className="row">
          <div className="col-md-6">
            <div className="left-text">
              <h4>Sed sagittis rhoncus velit</h4>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum fermentum
                eleifend nibh, vitae sodales elit finibus pretium.
                Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                semper.
              </p>
              <div className="white-button">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
              <img src="assets/images/right-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
 */