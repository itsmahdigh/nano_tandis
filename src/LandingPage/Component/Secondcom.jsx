import img from "../assets/testImg.png";
export default function SecondComp() {
  return (
    <>
      <div>
        <div className="text-4xl font-bold mt-16  ">
          <h1 className="text-[#21462A]">
            چرا باید
            <br />
            این محصولات را از ما بخرید؟!
          </h1>
          <p className="text-xl font-medium text-[#284630] mt-5">
            حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد کتابهای زیادی در شصت و سه درصد گذشته،<br />

            طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص <br />

          </p>
        </div>
        <div className="w-[80%] mx-auto flex">
          <div className="w-[25%] mx-auto grid content-around">
            <p className="text-left mt-7 text-md ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچن</p>
            <div className="text-left mt-7 text-md">
              <p> 
                موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
              </p>
            </div>
          </div>

          <div className="w-[30%] mx-auto">
            <img src={img} alt="" className=' mt-4' />
          </div>
          <div className="w-[25%] mx-auto grid content-around">
            <div>
              <p className="text-right mt-7 text-md ">شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
            </div>
            <div className="">
              <p className="text-right mt-7 text-md ">شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
