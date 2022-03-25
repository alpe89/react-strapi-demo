import {
  OfferDetailContainer,
  OfferDetailRow,
  OfferDetailItem,
} from '../components';

export const LightDetails = () => {
  const url = window.location.href;
  const textPrice = '€/kWh';
  const textColor = 'textGreen';

  return (
    <section className="flex flex-col justify-center gap-4 m-34 w-1/2 m-auto">
      <OfferDetailContainer color={textColor} urlProject={url}>
        <OfferDetailRow>
          <OfferDetailItem
            price="0,301"
            description="Unico prezzo per tutte le ore della giornata"
            color={textColor}
            textPrice={textPrice}
          />
          <OfferDetailItem
            price="0,301"
            description="Unico prezzo per tutte le ore della giornata"
            index={1}
            color={textColor}
            textPrice={textPrice}
          />
        </OfferDetailRow>
        <OfferDetailRow>
          <OfferDetailItem
            color={textColor}
            title="Prezzo Monorario"
            description="Unico prezzo per tutte le ore della giornata"
          />
        </OfferDetailRow>
      </OfferDetailContainer>
    </section>
  );
};
