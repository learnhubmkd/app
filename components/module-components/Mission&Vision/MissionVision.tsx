import React from 'react';
import Image from 'next/image';

const MissionVision = () => {
  return (
    <div>
      <Image src="/mission_vision.png" alt="Our mission & vision" width={1239} height={886} />
      <div>
        <h2>Мисија и визија</h2>
        <p>
          Мисијата на LearnHub е негување на одржлива и инклузивна заедница од сите припадници на
          IТ-секторот во Македонија, од почетници-ентузијасти до експерти со децениско искуство во
          струката со цел заедничко спојување на вештините и искуствата во насока на тимска
          соработка на реални проекти и безрезервна поддршка и едукација во текот на целиот процес
          од идеја до пазар и одржување.
          <br />
          Визијата на LearnHub е да биде препознатива заедница по соработката, едукацијата и
          поддршката за сите луѓе кои дејствуваат во IT секторот и пошироко. Заедница од каде што
          многу нови производи и услуги ќе бидат резултат на заеднички напори и спој на различни
          вештини од повеќе области во технолошкиот свет.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
