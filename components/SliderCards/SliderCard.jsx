import React from 'react'

const SliderCard = () => {
  return (
    <div className="h-full w-full rounded-[12px]">
    <div className="h-[160px] [@media_(max-width:840px)]:h-[80px] w-full rounded-t-[12px] bg-[#67A651]">
      <p className=" text-center text-[54px] [@media_(max-width:840px)]:text-lg ">
        Hangi hastalıklarda diyetisyene ihtiyaç duyularbilir?
      </p>
    </div>
    <div className="text-[18px]  mt-5 text-lg ">
      <p className="mb-[25px]  flex gap-x-5 justify-center items-center">Çölyak hasatlığı</p>
      <p className="mb-[25px] flex gap-x-5 justify-center items-center">Diyabet hastalığı</p>
      <p className="mb-[25px] flex gap-x-5 justify-center items-center">Guid ve tiroid hastalıkları</p>
      <p className="mb-[25px] flex gap-x-5 justify-center items-center">Sindirim sistemi hastalıkları</p>
      <p className="mb-[25px] flex gap-x-5 justify-center items-center">Kalp ve damar hastalıkları</p>
      <p className="flex gap-x-5 justify-center items-center">Karaciğer,safra kesesi ve böbrek hastalıkları</p>
    </div>

  </div>
  )
}

export default SliderCard