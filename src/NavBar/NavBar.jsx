import { arrowBackCircleOutline, menu, IonIcon } from "ionicons/icons";
import { MenuOutline, PersonOutline } from "react-ionicons";

export default function Example() {
  const navLinks = document.querySelector(".nav-links");

  function openToglleMenu(e) {
    console.log(e);
  }
  return (
    <header className="bg-[#2D893E]">
      <nav className=" flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center gap-6">
       
          <MenuOutline
            className="block h-6 w-6 text-3xl cursor-pointer md:hidden"
            onClick={() => openToglleMenu(this)}
            color={"#00000"}
            title={menu}
            height="25px"
            width="25px"
          />
        
          <img
            className=" w-16 md:flex md:justify-center"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          ></img>
        </div>
        <div className="nav-links duration-500 md:static absolute md:flex md:justify-center  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-full w-full flex items-center px-5">
          <ul className="flex  md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white font-bold">
            <li>
              <a href="#" className="hover:text-gray-black">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-black">
               محصولات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-black">
                بلاگ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="submit"
            className="  px-5 py-2  "
          >
            <PersonOutline
            className={"hover:bg-black"}
              color={"#ffffff"}
              title={menu}
              height="25px"
              width="25px"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

