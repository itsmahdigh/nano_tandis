import img from '../assets/testImg.png'
export default function firstcomp() {
  return (
    <>
      <div className="h-[570px]  bg-[#2D893E]  grid content-center">
        <div class="overflow-hidden w-[92%] mx-auto text-center">
          <div class=" m-auto grid grid-cols-1 md:grid md:grid-cols-2">
            
            <div class="p-8   text-center md:text-right  font-extrabold">
              <div class="uppercase tracking-wide  text-white text-4xl md:text-6xl  ">
                شرکت نانو تندیس
              </div>
              <a
                href="#!"
                class="block mt-2 md:mt-8 text-lg leading-tight  text-white font-medium "
              >
                با یکبار خرید کردن مشتری ما شوید!
              </a>
              <p class="mt-2 md:mt-8 text-white font-medium text-sm md:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <button type="submit" className="bg-black text-md font-light text-white w-[25%] h-[20%] rounded-lg mt-2">مشاهده محصولات</button>
            </div>
            <div class="md:shrink-0     text-center">
              <img className="object-cover md:h-full mx-auto w-52 " src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
