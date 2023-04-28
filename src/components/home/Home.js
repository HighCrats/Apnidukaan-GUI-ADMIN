import LeftBody from "../body/LeftBody";
import RightBody from "../body/RightBody";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Service from "../service/Service";
import Sidebar from "../sidebar/Sidebar";

function Home() {
    return <>

        {/* container-scroller start */}
        <div className="container-scroller">


            {/* important div start */}
            <div className="row p-0 m-0 proBanner" id="proBanner">
                <div className="col-md-12 p-0 m-0">
                    <div className="card-body card-body-padding d-flex align-items-center justify-content-between">
                        <div className="ps-lg-1">
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 font-weight-medium me-3 buy-now-text">
                                    Free 24/7 customer support, updates, and more with this template lkoesh!
                                </p>
                                <a
                                    href="https://www.bootstrapdash.com/product/star-admin-pro/?utm_source=organic&utm_medium=banner&utm_campaign=buynow_demo"
                                    target="_blank"
                                    className="btn me-2 buy-now-btn border-0"
                                >
                                    Get Pro
                                </a>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="https://www.bootstrapdash.com/product/star-admin-pro/">
                                <i className="mdi mdi-home me-3 text-white" />
                            </a>
                            <button id="bannerClose" className="btn border-0 p-0">
                                <i className="mdi mdi-close text-white me-0" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* important div end */}


            {/* header start */}
            <Header />
            {/* header end */}


            {/* main content start */}
            <div className="container-fluid page-body-wrapper">


                {/* side bar start */}
                <Sidebar />
                {/* side bar end */}


                {/* main body start */}
                <div className="main-panel">

                    {/* main body data start  */}
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="home-tab">

                                    {/* navbar start */}
                                    {/* <Navbar/> */}
                                    {/* navbar end */}

                                    <div className="tab-content tab-content-basic">


                                        <div
                                            className="tab-pane fade show active"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview"
                                        >


                                            {/* service start */}
                                            <Service />
                                            {/* service end */}

                                            <div className="row">


                                                <div className="col-lg-8 d-flex flex-column">


                                                    {/* left body start */}
                                                    <LeftBody />
                                                    {/* left body end */}

                                                    
                                                </div>


                                                <div className="col-lg-4 d-flex flex-column ">


                                                    {/* right body start */}
                                                    <RightBody />
                                                    {/* right ody end */}

                                    
                                                </div>


                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* main body data end */}


                    {/* footer start */}
                    <Footer/>
                    {/* footer end */}


                </div>
                {/* main body end */}


            </div>
            {/* main content end */}


        </div>
        {/* container-scroller end */}

    </>
}

export default Home;