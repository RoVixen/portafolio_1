import "./css/template_stuff.css"

export function SectionTitle({title,subtitle}){
    return <div className="section-heading">
        <h2>{title}</h2>
        <div className="line-dec"></div>
        <span>{subtitle}</span>
    </div>
}