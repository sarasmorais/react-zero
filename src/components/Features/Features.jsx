import "./Features.css";

export default function Features(){
    const featuresList = [
        {
            id: 1,
            title:"Componentes básicos",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, cumque!"
        },
        {
            id: 2,
            title:"Componentes básicos2",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, cumque!"
        },
        {
            id: 3,
            title:"Componentes básicos3",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, cumque!"
        },
    ]

    return(
        <section className="features">
            <h2>Chaves das Features</h2>
            <div className="features-grid">
                {featuresList.map((feature)=>{
                    <div className="features-card" key={feature.id}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
                })}
            </div>
        </section>
    )
}