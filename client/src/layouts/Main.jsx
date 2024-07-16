import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
        {/* <div className='h-16'>
            <NavBar></NavBar>
        </div> */}
        <div  className='flex items-center justify-center border-2 min-h-[calc(100vh-117px)]'>
            <Outlet></Outlet>
        </div>
        <div className="divider"></div>
        {/* <div>
            <Footer></Footer>
        </div> */}
    </div>
    );
};

export default Main;