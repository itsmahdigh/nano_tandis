import HomeProducts from "../productsPage/Component/HomeProducts";
import Sidebar from "../productsPage/Component/SideBar"

export default function products() {
    return <>
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className=" col-span-3">
                <HomeProducts />
            </div>


        </div>
    </>
}