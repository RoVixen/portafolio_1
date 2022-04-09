import { useEffect, useRef, useState } from "react";
import "./css/contact_me.css";

import contactMeText from "./texts/contact_me.json";

export function ContactMe({}){

  const formSendRef=useRef(null);

  const [sending,setSending]=useState(false);
  const [sendingText,setSendingText]=useState(contactMeText.send.normal);

  function contactSend(e){
    if(sending)
    return;

    e.preventDefault();
    
    let mailData={};

    let messageForm=new FormData(formSendRef.current);
    messageForm.forEach((v,k)=>{
      //console.log(`${k}: ${v}`);
      mailData[k]=v;
    });

    setSending(true);
    setSendingText(contactMeText.send.loading);

    fetch("https://www.ernestoperezportafolio.com/api/aaa.php",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(mailData)
    })
    .catch(e=>console.log(e))
    .then(res=>res.json())
    .catch(e=>console.log(e))
    .then(res=>{
      if(res.s){
        setSendingText(contactMeText.send.sent);
        setTimeout(()=>{
          setSending(false);
          setSendingText(contactMeText.send.normal);
        },5000)
      }
    });
  }

  return <section className="section contact-me" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>{contactMeText.title}</h2>
        <div className="line-dec"></div>
        <span>{contactMeText.subtitle}</span>
      </div>
      <div className="row">
        <div className="right-content">
          <div className="container">
            <form id="contact" ref={formSendRef}>
              <div className="row">
                <ContactMeField placeholder={contactMeText.placeholders.name} field={"name"}/>
                <ContactMeField placeholder={contactMeText.placeholders.email} field={"email"}/>
                <ContactMeField placeholder={contactMeText.placeholders.subject} field={"subject"} size={"12"}/>
                <ContactMeField placeholder={contactMeText.placeholders.message} field={"message"} size={"12"} type="textarea"/>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button" onClick={contactSend}>
                      {sendingText}
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