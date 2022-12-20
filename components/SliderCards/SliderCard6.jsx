import React from "react";

const SliderCard6 = () => {
  return (
    <div className="h-full w-full rounded-[12px]">
      <div className="h-[160px] w-full rounded-t-[12px] bg-[#67A651] [@media_(max-width:840px)]:h-[80px]">
        <p className=" text-center text-[54px] [@media_(max-width:840px)]:text-lg ">
          Diyet ve egzersizin kusursuz birlikteliği
        </p>
      </div>
      <div className="mt-5  p-4 text-[18px] text-xl ">
        <p className="text-center">
          Hem sağlıklı yaşamın temeli hem de kilo verme süreci diyet ve
          egzersizi birlikte yapmayı gerektirir. Egzersizin kilo kaybındaki rolü
          enerji harcamasını arttırmaktan ziyade metabolizma hızını
          artırmasıdır. Beslenmenize dikkat edeceğiniz, hareketli ve egzersizin
          olduğu bir hayat, hedef kilonuza ulaşmanıza ya da kilonuzu kontrol
          altında tutmanıza olanak sağlar.
        </p>
      </div>
    </div>
  );
};

export default SliderCard6;
