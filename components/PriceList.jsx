import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import Link from "next/link";


const PriceList = () => {
  const [price, setPrice] = useState(1)
  return (
    <div className="mt-[150px] mb-10 flex justify-center" id="hizmetler">
      <div className="flex flex-row gap-x-6 [@media_(max-width:780px)]:flex-col [@media_(max-width:780px)]:gap-y-5">
        <div className="flex h-[880px] w-[400px] [@media_(max-width:780px)]:w-[360px] flex-col  rounded-lg  bg-white shadow-floatingShadow">
          <p className="mt-[50px] p-5 text-center text-base font-semibold">
            KİŞİYE ÖZEL YÜZ YÜZE VEYA ONLINE DİYET
          </p>
          <div className="relative z-10 mx-auto flex h-[50px] w-[215px] items-center justify-center rounded-lg bg-[#D8CA9D] text-xs">
            <p>{price ===1 && 750} {price ===2 && 2000} {price ===3 && 3500 }TL &nbsp;/&nbsp; Aylık</p>
            <div className={`cursor-pointer absolute ${price ===1 ? "border border-[#8FEEB9]":""} top-[48px] left-[20px] -z-10 flex h-[20px] w-[40px] items-center justify-center rounded-br-lg rounded-bl-lg bg-[#D9D9D9] text-[10px]`}  onClick={()=>setPrice(1)}>
              1 Ay
            </div>
            <div className={`cursor-pointer absolute ${price ===2 ? "border border-[#8FEEB9]":""} top-[48px] left-[80px] -z-10 flex h-[20px] w-[40px] items-center justify-center rounded-br-lg rounded-bl-lg bg-[#D9D9D9] text-[10px]`} onClick={()=>setPrice(2)}>
              3 Ay
            </div>
            <div className={`cursor-pointer absolute ${price ===3 ? "border border-[#8FEEB9]":""} top-[48px] left-[140px] -z-10 flex h-[20px] w-[40px] items-center justify-center rounded-br-lg rounded-bl-lg bg-[#D9D9D9] text-[10px]`} onClick={()=>setPrice(3)}>
              6 Ay
            </div>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              İlk görüşmede 20 dakika sağlıklı beslenme eğitimi
            </p>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Kişiye özel hazırlanmış ayda 4 adet beslenme programı
            </p>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Haftada 1 kontrol görüşmesi ve diyet programı değişikliği
            </p>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Sürdürülebilir diyet için 12:00-21:00 arasında sınırsız iletişim
            </p>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Örnek tarifler, egzersiz önerileri
            </p>
          </div>
          <div className="ml-[30px] mt-12 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Birlikte tasarlanan menü planı
            </p>
          </div>
        <Link href="/Detail">
        <button className="mx-auto mt-[120px] flex h-[55px] w-[215px] cursor-pointer items-center justify-center rounded-[36px] bg-[#BDE7C7] text-base">
              Detaylı bilgi
            </button>
        </Link>
    
       
        
        
        </div>
        <div className="flex h-[880px] w-[400px] [@media_(max-width:780px)]:w-[360px] flex-col items-center rounded-lg  bg-white px-5 shadow-floatingShadow">
   
          <p className="mt-[50px] p-5 text-center text-base font-semibold">
            GEBELİK TAKİBİ
          </p>

          <div className=" relative z-10 mx-auto flex h-[50px] w-[215px] items-center justify-center rounded-lg bg-[#D8CA9D] text-xs">
            <p>2500 TL &nbsp;/&nbsp; Ay</p>
            
          </div>
          <div className=" mt-10 flex max-w-[350px] gap-x-3">
            <MdOutlineDone size={14} />
            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              İlk görüşmede 20 dakika sağlıklı beslenme eğitimi
            </p>
          </div>
          <div className=" mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Kişiye özel hazırlanmış beslenme programı
            </p>
          </div>
          <div className=" mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Ayda 1 kontrol görüşmesi ve diyet programı değişikliği
            </p>
          </div>
          <div className=" mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="max-w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Sürdürülebilir diyet için 12:00-21:00 arasında sınırsız iletişim
            </p>
          </div>
          <div className="ml-[10px] mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Whatsapp üzerinden günlük öğün takibi
            </p>
          </div>
          <div className=" mt-12 flex max-w-[350px] gap-x-3">
            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Örnek tarifler, egzersiz önerileri
            </p>
          </div>
          <div className=" mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Birlikte tasarlanan menü planı
            </p>
          </div>
          <div className="mt-10 flex max-w-[350px] gap-x-3">
          <MdOutlineDone size={14} />

            <p className="w-[290px] border-b-2 border-black pb-2 text-[13px]">
              Emzirme döneminde beslenme & Ek gıdaya geçiş (çocuk beslenmesi)
              E-kitapçığı
            </p>
          </div>
         <Link href="/Detail2">
          <button className="mx-auto mt-[14px] flex h-[55px] w-[215px] cursor-pointer items-center justify-center rounded-[36px] bg-[#BDE7C7] text-base">
            Detaylı bilgi
          </button>
          </Link>
        </div>

    
      </div>
    </div>
  );
};

export default PriceList;
