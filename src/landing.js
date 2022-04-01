import { Link } from "react-router-dom";
import { AboutMe } from "./sub_landing/about_me";
import { ContactMe } from "./sub_landing/contact_me";
import { MyServices } from "./sub_landing/my_services";
import { MyWork } from "./sub_landing/my_work";
import { SidebarMenu } from "./sub_landing/sidebar_menu";

export default function Landing({}){
    return (<>
        <SidebarMenu/>
        <AboutMe/>
        <MyServices/>
        <MyWork/>
        <ContactMe/>
    </>);
}