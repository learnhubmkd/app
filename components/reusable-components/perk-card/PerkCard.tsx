import React from 'react';
import Image from 'next/image';
import style from './PerkCard.module.scss';

export interface PerkCardsData {
  id: number;
  perkCardText: string;
  perkCardIcon: string;
}
const PerkCard = ({ perkCardText, perkCardIcon, id }: PerkCardsData) => {
  return (
    <div className={style.perkCardWrapper} key={id}>
      <div className={style.perkCardInner}>
        <div className={style.perkCardIcon}>
          <Image src={perkCardIcon} alt="icon" width={56} height={56} />
        </div>
        <p className={style.perkCardTextContent}>{perkCardText}</p>
      </div>
    </div>
  );
};

export default PerkCard;
