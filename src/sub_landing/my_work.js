import React, { useRef, useState } from "react"
import "./css/my_work.css";
import { SectionTitle } from "./props/template_stuff";


export function MyWork({}){
    return null;

    const [boxCurrent,setBoxCurrent] = useState("all");

    const changedCurrent=(newCurrent="all")=>{
        setBoxCurrent(newCurrent);
    }

    return <section className="section my-work" data-section="section3">
    <div className="container">
        
      <SectionTitle title={"My Work"} subtitle={undefined}/>

      <div className="row">
        <div className="isotope-wrapper">
            <MyWorkToolbar changedCurrent={changedCurrent}>
                <MyWorkToolbarOption dataType={"all"} checked={true}>All</MyWorkToolbarOption>
                <MyWorkToolbarOption dataType={"people"}>People</MyWorkToolbarOption>
                <MyWorkToolbarOption dataType={"nature"}>Nature</MyWorkToolbarOption>
                <MyWorkToolbarOption dataType={"animals"}>Animals</MyWorkToolbarOption>
            </MyWorkToolbar>
            <MyWorkBox current={boxCurrent}>
                <MyWorkBoxElement 
                    dataType={"nature"} 
                    src={"assets/images/portfolio-01.jpg"}
                />
                <MyWorkBoxElement 
                    dataType={"people"} 
                    src={"assets/images/portfolio-02.jpg"}
                />
                <MyWorkBoxElement 
                    dataType={"nature"} 
                    src={"assets/images/portfolio-03.jpg"}
                />
                <MyWorkBoxElement 
                    dataType={"nature"} 
                    src={"assets/images/portfolio-04.jpg"}
                />
                <MyWorkBoxElement 
                    dataType={"animals"} 
                    src={"assets/images/portfolio-05.jpg"}
                />
                <MyWorkBoxElement 
                    dataType={"nature"} 
                    src={"assets/images/portfolio-06.jpg"}
                />
            </MyWorkBox>
        </div>
      </div>
    </div>
  </section>
}

function MyWorkToolbar({children,changedCurrent}){
    

    return <form className="isotope-toolbar">
        {children.map((opt,ind)=>{
            //opt.props.clickedCurrent=changedCurrent;
            return React.cloneElement(opt,{clickedCurrent:changedCurrent,key:"opt"+ind});
        })}
    </form>
}

function MyWorkToolbarOption({dataType,children,clickedCurrent=(()=>{}),checked=false}){
    
    const a=useRef(null);
    useState(()=>{
        if(checked){
            setTimeout(()=>{
                a.current.checked=true;
            },0);
        }
    },[]);
    
    return <label onClick={()=>clickedCurrent(dataType)}>
        <input
            type="radio"
            data-type={dataType}
            name="isotope-filter"
            ref={a}
        />
        <span>{children}</span>
    </label>
}

function MyWorkBox({current="all",children}){
    return <div className="isotope-box">
        {children.map((boxElem,ind)=>{
            return React.cloneElement(boxElem,{
                visible:(boxElem.props.dataType==current)||current=="all",
                key:"be"+ind
            });
        })}
    </div>
}

function MyWorkBoxElement({dataType,visible=true,src,title="First Title",caption="free to use our template",caption2}){
    
    if(!caption2)
    caption2=caption;

    return <div className={"isotope-item"+(visible?"":" invisible")} data-type={dataType}>
        <figure className="snip1321">
        <img
            src={src}
            alt="sq-sample26"
        />
        <figcaption>
            <a
                href={src}
                data-lightbox="image-1"
                data-title={caption2}
            >
                <i className="fa fa-search"></i>
            </a>
            <h4>{title}</h4>
            <span>{caption}</span>
        </figcaption>
        </figure>
    </div>;
}