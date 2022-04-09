import "./css/my_services.css";

import myServicesText from "./texts/my_services.json";

export function MyServices({}){

  myServicesText.sex=1;

  return <section className="section my-services" data-section="section2">
    <div className="container">
      <div className="section-heading">
        <h2>{myServicesText.title}</h2>
        <div className="line-dec"></div>
        <span>
          {myServicesText.subtitle}
        </span>
      </div>
      <div className="row">
        {
          (myServicesText?.entries?.constructor?.name=="Array")&&myServicesText.entries.map((entry)=>{
            return <MyServicesEntry>
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