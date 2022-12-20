import React from "react";

const SliderCard4 = () => {
  return (
    <div className="h-full w-full rounded-[12px]">
      <div className="h-[160px] w-full rounded-t-[12px] bg-[#67A651] [@media_(max-width:840px)]:h-[80px]">
        <p className=" text-center text-[54px] [@media_(max-width:840px)]:text-lg ">
          Hamilelik döneminde diyet yapılır mı?
        </p>
      </div>
      <div className="mt-5  p-4 text-[18px] text-xl ">
        <p className="text-center">
          Diyet yapmasına herhangi bir engeli olmadığına doktoru tarafından
          karar verilmiş anne adayları diyet yapabilir. Gebelikte, hayatın diğer
          dönemlerinde olduğu gibi sağlıklı ve dengeli beslenme esas olmalıdır.
          Yani proteinden zengin, karbonhidrattan daha fakir günlük bir beslenme
          stratejisi fazla kilo alımını engelleyecek hem de gebenin sağlıklı
          beslenmesini sağlayacaktır.
        </p>
      </div>
    </div>
  );
};

export default SliderCard4;
