import './Card.css';

export const Card = () => {
  const urlEdisonImg =
    'https://www.edisonenergia.it/EdisonB2CPublicThemeDynamicWAR/themes/html/dynamicSpots/assets/img/logoEdisonWhite.png';

  return (
    <section className="backGround-card">
      <div className="grid grid-cols-1 gap-4">
        <div className="logo">
          <img src={urlEdisonImg} alt="edison" />
        </div>
        <h1 className="h1-style">Casa</h1>
        <div className="box-template">
          <div className="row-template">Offerta luce</div>
          <div className="row-template">Offerta gas</div>
          <div className="row-template">Offerta servizi</div>
          <div className="row-template">Offerta casa</div>
        </div>
      </div>
    </section>
  );
};
