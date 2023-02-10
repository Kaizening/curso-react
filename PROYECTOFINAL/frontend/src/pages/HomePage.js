const HomePage = (props) => {
  return (
    <div class="container">
      <main className="Holder">
        <div className="homeimg">
          <img src="/img/home/img01.jpg" alt="Avion"></img>
        </div>
        <div className="columnas">
          <div className="bienvenidos">
            <br />
            <br />
            <h1 class="mb-3">Bienvenidos</h1>
            <p class="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <p class="lead">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.{" "}
            </p>
          </div>
          <div className="testimonios">
            <br />
            <br />
            <h2>Testimonios</h2>
            <div className="testimonio">
              <span class="cita">Simplemente Excelente</span>
              <br />
              <br />
              <span className="autor">Juan Perez - zapatos.com</span>
              <br />
              <br /> <br />
              <br />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
