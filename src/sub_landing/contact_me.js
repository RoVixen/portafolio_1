import { useEffect, useRef } from "react";
import "./css/contact_me.css";

export function ContactMe({}){

  const formSendRef=useRef(null);

  function contactSend(e){
    e.preventDefault();

    let messageForm=new FormData(formSendRef.current);
    messageForm.forEach((v,k)=>{
      console.log(`${k}: ${v}`);
    });
  }

  return <section className="section contact-me" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>Contact Me</h2>
        <div className="line-dec"></div>
        <span
          >Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
          efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="row">
        <div className="right-content">
          <div className="container">
            <form id="contact" ref={formSendRef}>
              <div className="row">
                <ContactMeField placeholder={"Your Name..."} field={"name"}/>
                <ContactMeField placeholder={"Your Email..."} field={"email"}/>
                <ContactMeField placeholder={"Subject..."} field={"subject"} size={"12"}/>
                <ContactMeField placeholder={"Message..."} field={"message"} size={"12"} type="textarea"/>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button" onClick={contactSend}>
                      Send Message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
}

function ContactMeField({type="text",size="6",placeholder,field}){

  function Wrapper(){
    return <input
      name={field}
      type="text"
      className="form-control"
      placeholder={placeholder}
      required=""
    />
  }
  if(type=="textarea"){
    Wrapper=()=>{
      return <textarea
        name={field}
        rows="6"
        className="form-control"
        placeholder={placeholder}
        required=""
      ></textarea>
    }
  }

  return <div className={"col-md-"+size}>
    <fieldset>
      <Wrapper/>
    </fieldset>
  </div>
}