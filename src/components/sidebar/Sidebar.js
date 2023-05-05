import { Link } from "react-router-dom";

function Sidebar() {
    return <>
        <nav className="sidebar sidebar-offcanvas " id="sidebar">
            <ul className="nav ">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <i className="mdi mdi-grid-large menu-icon" />
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <hr />
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon mdi mdi-floor-plan" />
                        <span className="menu-title">Services</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">Shipping</a>
                            </li>
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">Earning</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                        <i className="menu-icon mdi mdi-card-text-outline" />
                        <span className="menu-title">Products</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Basic Elements
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />

                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                        <i className="menu-icon mdi mdi-chart-line" />
                        <span className="menu-title">Category</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    ChartJs
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />

                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Subscription</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    Basic table
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />

                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                        <i className="menu-icon mdi mdi-layers-outline" />
                        <span className="menu-title">Staff</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    Mdi icons
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />

                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#auth"
                        aria-expanded="false"
                        aria-controls="auth"
                    >
                        <i className="menu-icon mdi mdi-account-circle-outline" />
                        <span className="menu-title">User</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign-Up</Link>
                                {/* href="pages/samples/login.html */}
                                <Link to="/signin" className="nav-link" >Sign-In</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <hr />
            </ul>
        </nav>
    </>
}

export default Sidebar;