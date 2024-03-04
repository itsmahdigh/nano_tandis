
export default function Example() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen ">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm grid place-content-center">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-right text-sm font-medium leading-6 text-gray-900">
                آدرس ایمیل
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  رمز عبور
                </label>
                <div className="text-sm">
                  <a href="#!" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    رمز عبور خود را فراموش کرده اید
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                وارد شوید
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#!" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
        </div>
        <div className="invisible md:visible lg:col-span-2 bg-[#2D893E] grid place-content-center">
          <img
            className="mx-auto h-20 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h1 className="mt-10 text-white text-center text-5xl font-bold leading-9 ">
            شرکت نانوتندیس
          </h1>
          <p className="w-[80%] mx-auto text-md text-green-200 mt-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد

          </p>
        </div>
      </div>
    </>
  )
}
