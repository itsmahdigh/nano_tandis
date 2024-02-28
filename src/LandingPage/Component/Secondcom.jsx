import img from "../assets/testImg.png";
export default function SecondComp() {
  return (
    <>
      {/* <div>
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
        <div>
            <img src={img} alt="" className='w-[50%] mx-auto mt-4'/>
        </div>
      </div> */}

      <div class="container mx-auto">
        <div class="flex flex-col items-center justify-center">
        
          <h1 class="text-4xl font-bold text-center">Tea Tree Shampoo</h1>
          <p class="text-center">Natural Home Remedies</p>
          <ul class="list-disc text-center">
            <li>Prevents hair loss</li>
            <li>Removes dandruff</li>
            <img
            src={img}
            alt="Tea Tree Shampoo"
          />
            <li>Soothes itchy scalp</li>
            <li>Promotes hair growth</li>
          </ul>
        </div>
      </div>
    </>
  );
}
