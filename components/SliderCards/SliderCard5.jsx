import React from "react";

const SliderCard5 = () => {
  return (
    <div className="h-full w-full rounded-[12px]">
      <div className="h-[160px] w-full rounded-t-[12px] bg-[#67A651] [@media_(max-width:840px)]:h-[80px]">
        <p className=" text-center text-[54px] [@media_(max-width:840px)]:text-lg ">
          Metabolizmanızı hızlandırın!
        </p>
      </div>
      <div className="mt-5  p-4 text-[18px] text-xl ">
        <p className="text-center">
          Metabolizma hızı kilo kontrolünün sağlanması açısından oldukça
          önemlidir. Yeterli ve düzenli beslenmek, düzenli egzersiz yapmak ve
          bol su içmek metabolizma hızını artıracak önemli faktörlerdir. Buna ek
          olarak tarçın, acı biber, zencefil gibi baharatlar; yulaf ezmesi ve
          keten tohumu gibi yüksek lif içeren besinler, soframızda yer
          bulmalıdır.
        </p>
      </div>
    </div>
  );
};

export default SliderCard5;
