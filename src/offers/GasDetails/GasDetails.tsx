import {
  OfferDetailContainer,
  OfferDetailRow,
  OfferDetailItem,
} from '../components';

export const GasDetails = () => {
  const url = window.location.href;
  const textPrice = '€/Smc';
  const textColor = 'textBlue';

  return (
    <section className="flex flex-col justify-center gap-4 m-34 w-1/2 m-auto">
      <OfferDetailContainer color={textColor} urlProject={url}>
        <OfferDetailRow>
          <OfferDetailItem
            color={textColor}
            price="0,301"
            textPrice={textPrice}
          />
          <OfferDetailItem
            color={textColor}
            textPrice={textPrice}
            index={1}
            description="Con Edison Gas Prezzo Fisso12 blocchi il prezzo della materia prima per 12 mesi."
            sideDescription
          />
        </OfferDetailRow>
      </OfferDetailContainer>
    </section>
  );
};
