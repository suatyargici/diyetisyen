import React from "react";

const SliderCard3 = () => {
  return (
    <div className="h-full w-full rounded-[12px]">
      <div className="h-[160px] w-full rounded-t-[12px] bg-[#67A651] [@media_(max-width:840px)]:h-[80px]">
        <p className=" text-center text-[54px] [@media_(max-width:840px)]:text-lg ">
          Sporcu beslenmesinde doğru tabak neden önemli?
        </p>
      </div>
      <div className="mt-5  p-4 text-[18px] text-xl ">
        <p className="text-center">
          Vücut fonksiyonlarının sağlıklı bir şekilde sürdürülebilmesi için
          protein, karbonhidrat, kaliteli yağlar, vitamin, mineral ve lifli
          besinleri içeren tabaklar büyük önem taşımaktadır. Sağlıklı ve yeterli
          porsiyon; sporcunun yaptığı antrenmanlarda maksimum verimi almasına
          yardımcı olurken, hastalık ve sakatlanma oranını düşürdüğü gibi aynı
          zamanda konsantrasyon ve dikkati artırmaktadır.
        </p>
      </div>
    </div>
  );
};

export default SliderCard3;
