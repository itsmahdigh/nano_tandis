import img from '../assets/testImg.png'
export default function firstcomp() {
  return (
    <>
      <div className="h-[570px] bg-[#2D893E] flex items-center justify-center ">
        <div class="overflow-hidden w-[94%] mx-auto">
          <div class="md:flex m-auto ">
            
            <div class="p-8 w-[50%]  text-right text-xl font-extrabold">
              <div class="uppercase tracking-wide  text-white text-7xl ">
                شرکت نانو تندیس
              </div>
              <a
                href="#"
                class="block mt-8 text-lg leading-tight font-medium text-white font-medium hover:underline"
              >
                با یکبار خرید کردن مشتری ما شوید!
              </a>
              <p class="mt-8 text-white font-medium">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <button type="submit" className="bg-black text-white w-[30%] h-[20%] rounded-lg mt-2">مشاهده محصولات</button>
            </div>
            <div class="md:shrink-0  w-[50%]  text-center">
              <img className="object-cover md:h-full mx-auto md:w-48 " src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
