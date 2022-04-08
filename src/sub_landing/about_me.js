import "./css/about_me.css";
import aboutMeText from "./texts/about_me.json";

export function AboutMe({}){
  
  console.log(aboutMeText?.entries?.constructor?.name);

  return <section className="section about-me" data-section="section1">
    <div className="container">
      <div className="section-heading">
        <h2>{aboutMeText.title}</h2>
        <div className="line-dec"></div>
        <span>
          {aboutMeText.subtitle}
        </span>
      </div>
      {
        (aboutMeText?.entries?.constructor?.name == "Array")&&
        aboutMeText.entries.map((entry,index) => {
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