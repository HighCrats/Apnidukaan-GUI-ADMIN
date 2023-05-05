import { Link } from "react-router-dom";

function Signup() {
    return <>
        <div className="d-flex align-items-center border justify-content-center" style={{ height: "900px" }}>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h2 className="my-3"><b>Sign-Up</b></h2>
                        <form className="forms-sample">
                            <div className="form-group">
                                <label><b>Username</b></label>
                                <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label><b>Email address</b></label>
                                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label><b>Password</b></label>
                                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label><b>Confirm Password</b></label>
                                <input type="password" className="form-control form-control-lg" id="exampleInputConfirmPassword1" placeholder="Password" />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary me-5">Submit</button>
                                <Link to="/signin">Already have an accont ?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Signup;