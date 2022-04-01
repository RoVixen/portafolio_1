import { useEffect, useState } from "react";
import "./css/sidebar_menu.css";


export function SidebarMenu({}){
    const [open,setOpen] = useState(false);

    const toggleMenu=(o=false)=>{
        setOpen(o);
    };
    
    useEffect(()=>{
      document.addEventListener("scroll",(ev)=>{
        document.querySelectorAll("[data-section='section3']").forEach(elem=>{
          console.log(elem.scrollTop+" / "+elem.offsetHeight);
        });
      });
    },[]);

    const scrollToSection=(e)=>{
      const sec=(new URL(e.target.href)).hash.slice(1);
      document.querySelector("section[data-section='"+sec+"']").scrollIntoView({block: "start", behavior: "smooth"});
    }

    return <div className="responsive-nav">
    <i className="fa fa-bars" id="menu-toggle" onClick={()=>toggleMenu(true)}></i>
    <div id="menu" className={`menu ${open?"open":""}`}>
      <i className="fa fa-times" id="menu-close" onClick={()=>toggleMenu(false)}></i>
      <div className="container">
        <div className="image">
          <a href="#"><img src="assets/images/author-image.jpg" alt="" /></a>
        </div>
        <div className="author-content">
          <h4>Reflux Me</h4>
          <span>Web Designer</span>
        </div>
        <nav className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="#section1" onClick={scrollToSection}>About Me</a></li>
            <li><a href="#section2" onClick={scrollToSection}>What I’m good at</a></li>
            <li><a href="#section3" onClick={scrollToSection}>My Work</a></li>
            <li><a href="#section4" onClick={scrollToSection}>Contact Me</a></li>
          </ul>
        </nav>
        <div className="social-network">
          <ul className="soial-icons">
            <li>
              <a href="https://fb.com/templatemo"
                ><i className="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-dribbble"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-rss"></i></a>
            </li>
          </ul>
        </div>
        <div className="copyright-text">
          <p>Copyright 2019 Reflux Design</p>
        </div>
      </div>
    </div>
  </div>
}