import img from "../assets/testImg.png"
function forthcomp() {
    return <>
        <div className="mx-auto grid grid-cols-2  content-center justify-items-end mb-6">
            <div className="h-[300px] ">
                <p className="text-sm font-extrabold">لورم ایپسام شرکت نانو تندیس</p>
                <p className="text-sm font-medium opacity-85">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                    از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <button type="submit" className="w-[70%] rounded-lg p-1 text-white bg-black text-sm">اضافه کردن به سبد</button>
            </div>
            {/* <div className=""> */}
            <div className=" bg-gradient-to-r from-[#2D893E] to-white  justify-items-start rounded-lg">
                <img src={img} className="w-96 " alt="" />
            </div>
            {/* </div> */}
        </div>
    </>
} export default forthcomp