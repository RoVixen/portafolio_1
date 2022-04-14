import "./css/my_services.css";
import { SectionTitle } from "./props/template_stuff";

import myServicesText from "./texts/my_services.json";

export function MyServices({}){

  myServicesText.sex=1;

  return <section className="section my-services" data-section="section2">
    <div className="container">
      <SectionTitle title={myServicesText.title} subtitle={myServicesText.subtitle}/>
      
      <div className="row">
        {
          (myServicesText?.entries?.constructor?.name=="Array")&&myServicesText.entries.map((entry,ind)=>{
            return <MyServicesEntry key={"se"+ind}>
              <h4>{entry.title}</h4>
              <p>{entry.content}</p>
            </MyServicesEntry>
          })
        }
      </div>
    </div>
  </section>
}

function MyServicesEntry({children}){
  return <div className="col-md-6">
    <div className="service-item">
      {
        //<div className="second-service-icon service-icon"></div>
      }
      {children}
    </div>
  </div>
}