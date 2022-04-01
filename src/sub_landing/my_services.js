import "./css/my_services.css";

export function MyServices({}){
    return <section className="section my-services" data-section="section2">
    <div className="container">
      <div className="section-heading">
        <h2>What I’m good at?</h2>
        <div className="line-dec"></div>
        <span
          >Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
          Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.</span
        >
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="service-item">
            <div className="first-service-icon service-icon"></div>
            <h4>HTML5 &amp; CSS3</h4>
            <p>
              Phasellus non convallis dolor. Integer tempor hendrerit arcu
              at bibendum. Sed ac ante non metus vehicula congue quis eget
              eros.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="second-service-icon service-icon"></div>
            <h4>Creative Ideas</h4>
            <p>
              Proin lacus massa, eleifend sed fermentum in, dignissim vel
              metus. Nunc accumsan leo nec felis porttitor, ultricies
              faucibus purus mollis.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="third-service-icon service-icon"></div>
            <h4>Easy Customize</h4>
            <p>
              Integer suscipit condimentum aliquet. Nam quis risus metus.
              Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
              dui.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item">
            <div className="fourth-service-icon service-icon"></div>
            <h4>Admin Dashboard</h4>
            <p>
              Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
              eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
              leo nec felis porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}