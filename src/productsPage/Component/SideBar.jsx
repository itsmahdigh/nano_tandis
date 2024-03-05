import { Link } from "react-router-dom";

function sidebar() {
    return <>
    
        <div class="  flex flex-col    bg-[#2D893E] h-full text-white  border-none  sidebar">
        
            <div class="  flex flex-col justify-between ">
                <ul class="flex flex-col p-4 space-y-1">
                    <li>
                        <Link to="/Products" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black  ">

                            <span class="ml-2 text-sm tracking-wide truncate">کالای خانکی</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products/MedicalProducts" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black  ">
                            <span class="ml-2 text-sm tracking-wide truncate">دارو،بهداشت و سلامت</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#!" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black ">

                            <span class="ml-2 text-sm tracking-wide truncate">خدمات و ملزومات صنعتی</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black  ">

                            <span class="ml-2 text-sm tracking-wide truncate">عمران و ساختمان</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-black ">

                            <span class="ml-2 text-sm tracking-wide truncate">انرژی و نفت</span>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    </>
}
export default sidebar;