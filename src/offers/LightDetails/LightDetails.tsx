import {
  BoxContainerLight,
  BoxPriceLight,
  BoxDescriptionLight,
} from '../components';

export const LightDetails = () => (
  <section className="flex justify-center gap-4 m-34">
    <BoxContainerLight>
      <BoxPriceLight
        price="0,301"
        descPrice="Unico prezzo per tutte le ore della giornata"
        secondElement={false}
      />
      <div className="border-b-2 border-white" />
      <BoxDescriptionLight
        title="Prezzo Monorario"
        description="L'opzione monoraria è la soluzione migliore per chi consuma l'energia ogni giorno a qualsiasi ora."
      />
    </BoxContainerLight>

    <BoxContainerLight>
      <BoxPriceLight
        price="0,301"
        descPrice="Unico prezzo per tutte le ore della giornata"
        secondElement={false}
      />
      <BoxPriceLight
        price="0,301"
        descPrice="Unico prezzo per tutte le ore della giornata"
        secondElement
      />
      <div className="border-b-2 border-white" />
      <BoxDescriptionLight
        title="Prezzo Monorario"
        description="L'opzione monoraria è la soluzione migliore per chi consuma l'energia ogni giorno a qualsiasi ora."
      />
    </BoxContainerLight>
  </section>
);
