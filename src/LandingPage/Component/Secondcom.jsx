import img from "../assets/testImg.png";
export default function SecondComp() {
  return (
    <>
      <div>
        <div className="font-bold mt-12  ">
          <p className="text-[#21462A] text-3xl md:text-5xl">
            چرا باید
            <br />
            این محصولات را از ما بخرید؟!
          </p>
          <p className="text-sm md:text-lg font-medium text-[#284630] mt-5">
            حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد کتابهای زیادی در شصت و سه درصد گذشته،<br />

            طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص <br />

          </p>
        </div>
        <div className="w-[90%] md:w-[75%] grid grid-cols-3 mx-auto ">
          <div className=" mx-auto grid content-around">
            <p className="text-left mt-7 text-sm ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
             ن</p>
            <div className="text-left mt-7 text-sm md:text-lg">
              <p> 
                موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                 اصلی و جوابگوی سوالات پیوسته
               د
              </p>
            </div>
          </div>

          <div className=" grid content-center">
            <img src={img} alt="" className=' mt-4 w[100%]' />
          </div>
          <div className="mx-auto grid content-around">
            <div>
              <p className="text-right mt-7 text-sm ">شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
               د.</p>
            </div>
            <div className="">
              <p className="text-right mt-7 text-sm ">شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                د.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
