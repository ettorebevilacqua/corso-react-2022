import "./styles.css";

export default function App() {
  const menuHeader = ["Servizi", "Contatti", "Altro"];
  const renderHeader = () => {
    const renderLink = (title) => (
      <a href="{link}" class="button">
        {title}
      </a>
    );
    return (
      <div class="box s100 firsBg">
        <div class="box s30">First React</div>
        <div class="box s50 right">{menuHeader.map(renderLink)}</div>
      </div>
    );
  };

  const renderMenu = () => {
    const menuProdotti = ["indice", "Camion", "auto", "moto", "ricambi"];
    const renderLink = (prodotto) => (
      <li>
        <a href="somepage.html" class="button">
          {prodotto}
        </a>
      </li>
    );

    return <ul>{menuProdotti.map(renderLink)}</ul>;
  };

  const renderContent = () => (
    <>
      <div class="box s100 firsBg">titolo contenuto</div>
      <div class="box s100">
        <p>
          Sono un contenuto alsdjsdj sfjk jfk sjfsjk dkjssfjksf sdjfsjdfjsdf fh
          fsdf dsf{" "}
        </p>
        <p>
          Sono un Altro Contebnto alsdjsdj sfjk jfk sjfsjk dkjssfjksf
          sdjfsjdfjsdf fh fsdf dsf{" "}
        </p>
      </div>
    </>
  );

  const renderFooter = () => (
    <>
      <div class="box s100 secondBg">
        uno <br /> due tre
      </div>
      <div class="box s20 secondBg">ssss</div>
      <div class="box s100 secondBg">ssss</div>
    </>
  );

  return (
    <div className="App">
      {renderHeader()}
      <div class="box s30 secondBg">{renderMenu()}</div>
      <div class="box s66 ">{renderContent()}</div>
      {renderFooter()}
    </div>
  );
}
