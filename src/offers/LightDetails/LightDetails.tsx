import { OfferDetailContainer, OfferDetailRow } from '../components';
import { OfferDetailItem } from '../components/OfferDetailItem';

export const LightDetails = () => (
  <section className="flex flex-col justify-center gap-4 m-34 w-1/2 m-auto">
    <h1 className="text-6xl text-[#509e2f] font-bold">Prezzi Offerta</h1>
    <OfferDetailContainer>
      <OfferDetailRow>
        <OfferDetailItem
          price="0,301"
          description="Unico prezzo per tutte le ore della giornata"
        />
        <OfferDetailItem
          price="0,301"
          description="Unico prezzo per tutte le ore della giornata"
          index={1}
        />
      </OfferDetailRow>
      <OfferDetailRow>
        <OfferDetailItem
          title="Prezzo Monorario"
          description="Unico prezzo per tutte le ore della giornata"
        />
      </OfferDetailRow>
    </OfferDetailContainer>
  </section>
);
