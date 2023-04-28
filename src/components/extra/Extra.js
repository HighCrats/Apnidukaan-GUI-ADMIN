function Extra() {
    return <>


        {/* extra left start */}
        {/* <div className="row flex-grow bg-info">
            <div className="col-12 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="d-sm-flex justify-content-between align-items-start">
                            <div>
                                <h4 className="card-title card-title-dash">
                                    Pending Requests
                                </h4>
                                <p className="card-subtitle card-subtitle-dash">
                                    You have 50+ new requests
                                </p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary btn-lg text-white mb-0 me-0"
                                    type="button"
                                >
                                    <i className="mdi mdi-account-plus" />
                                    Add new member
                                </button>
                            </div>
                        </div>
                        <div className="table-responsive  mt-1">
                            <table className="table select-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </th>
                                        <th>Customer</th>
                                        <th>Company</th>
                                        <th>Progress</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex ">
                                                <img
                                                    src="images/faces/face1.jpg"
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>Brandon Washington</h6>
                                                    <p>Head admin</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6>Company name 1</h6>
                                            <p>company type</p>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                    <p className="text-success">79%</p>
                                                    <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{ width: "85%" }}
                                                        aria-valuenow={25}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-opacity-warning">
                                                In progress
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <img
                                                    src="images/faces/face2.jpg"
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>Laura Brooks</h6>
                                                    <p>Head admin</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6>Company name 1</h6>
                                            <p>company type</p>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                    <p className="text-success">65%</p>
                                                    <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{ width: "65%" }}
                                                        aria-valuenow={65}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-opacity-warning">
                                                In progress
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <img
                                                    src="images/faces/face3.jpg"
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>Wayne Murphy</h6>
                                                    <p>Head admin</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6>Company name 1</h6>
                                            <p>company type</p>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                    <p className="text-success">65%</p>
                                                    <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                    <div
                                                        className="progress-bar bg-warning"
                                                        role="progressbar"
                                                        style={{ width: "38%" }}
                                                        aria-valuenow={38}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-opacity-warning">
                                                In progress
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <img
                                                    src="images/faces/face4.jpg"
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>Matthew Bailey</h6>
                                                    <p>Head admin</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6>Company name 1</h6>
                                            <p>company type</p>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                    <p className="text-success">65%</p>
                                                    <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style={{ width: "15%" }}
                                                        aria-valuenow={15}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-opacity-danger">
                                                Pending
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-flat mt-0">
                                                <label className="form-check-label">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        aria-checked="false"
                                                    />
                                                    <i className="input-helper" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <img
                                                    src="images/faces/face5.jpg"
                                                    alt=""
                                                />
                                                <div>
                                                    <h6>Katherine Butler</h6>
                                                    <p>Head admin</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6>Company name 1</h6>
                                            <p>company type</p>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                    <p className="text-success">65%</p>
                                                    <p>85/162</p>
                                                </div>
                                                <div className="progress progress-md">
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{ width: "65%" }}
                                                        aria-valuenow={65}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="badge badge-opacity-success">
                                                Completed
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row flex-grow bg-warning">
            <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body card-rounded">
                        <h4 className="card-title  card-title-dash">
                            Recent Events
                        </h4>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Change in Directors
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1" />
                                        <p className="mb-0 text-small text-muted">
                                            Mar 14, 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Other Events
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1" />
                                        <p className="mb-0 text-small text-muted">
                                            Mar 14, 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Quarterly Report
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1" />
                                        <p className="mb-0 text-small text-muted">
                                            Mar 14, 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center border-bottom py-2">
                            <div className="wrapper w-100">
                                <p className="mb-2 font-weight-medium">
                                    Change in Directors
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <i className="mdi mdi-calendar text-muted me-1" />
                                        <p className="mb-0 text-small text-muted">
                                            Mar 14, 2019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list align-items-center pt-3">
                            <div className="wrapper w-100">
                                <p className="mb-0">
                                    <a
                                        href="#"
                                        className="fw-bold text-primary"
                                    >
                                        Show all{" "}
                                        <i className="mdi mdi-arrow-right ms-2" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h4 className="card-title card-title-dash">
                                Activities
                            </h4>
                            <p className="mb-0">20 finished, 5 remaining</p>
                        </div>
                        <ul className="bullet-line-list">
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Ben Tossell
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>Just now</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Oliver Noah
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Jack William
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Leo Lucas
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Thomas Henry
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Ben Tossell
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span className="text-light-green">
                                            Ben Tossell
                                        </span>{" "}
                                        assign you a task
                                    </div>
                                    <p>1h</p>
                                </div>
                            </li>
                        </ul>
                        <div className="list align-items-center pt-3">
                            <div className="wrapper w-100">
                                <p className="mb-0">
                                    <a
                                        href="#"
                                        className="fw-bold text-primary"
                                    >
                                        Show all{" "}
                                        <i className="mdi mdi-arrow-right ms-2" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* extra left end */}

        {/* ----------------------------------------------------------------------------------------------------------------- */}

        {/* extra right start */}
        {/* <div className="row flex-grow">
            <div className="col-12 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="card-title card-title-dash">
                                        Type By Amount
                                    </h4>
                                </div>
                                <canvas
                                    className="my-auto"
                                    id="doughnutChart"
                                    height={200}
                                />
                                <div
                                    id="doughnut-chart-legend"
                                    className="mt-5 text-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row flex-grow">
            <div className="col-12 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h4 className="card-title card-title-dash">
                                            Leave Report
                                        </h4>
                                    </div>
                                    <div>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
                                                type="button"
                                                id="dropdownMenuButton3"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                {" "}
                                                Month Wise{" "}
                                            </button>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton3"
                                            >
                                                <h6 className="dropdown-header">
                                                    week Wise
                                                </h6>
                                                <a className="dropdown-item" href="#">
                                                    Year Wise
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <canvas id="leaveReport" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row flex-grow">
            <div className="col-12 grid-margin stretch-card">
                <div className="card card-rounded">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h4 className="card-title card-title-dash">
                                            Top Performer
                                        </h4>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                className="img-sm rounded-10"
                                                src="images/faces/face1.jpg"
                                                alt="profile"
                                            />
                                            <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">
                                                    Brandon Washington
                                                </p>
                                                <small className="text-muted mb-0">
                                                    162543
                                                </small>
                                            </div>
                                        </div>
                                        <div className="text-muted text-small">
                                            1h ago
                                        </div>
                                    </div>
                                    <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                className="img-sm rounded-10"
                                                src="images/faces/face2.jpg"
                                                alt="profile"
                                            />
                                            <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">
                                                    Wayne Murphy
                                                </p>
                                                <small className="text-muted mb-0">
                                                    162543
                                                </small>
                                            </div>
                                        </div>
                                        <div className="text-muted text-small">
                                            1h ago
                                        </div>
                                    </div>
                                    <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                className="img-sm rounded-10"
                                                src="images/faces/face3.jpg"
                                                alt="profile"
                                            />
                                            <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">
                                                    Katherine Butler
                                                </p>
                                                <small className="text-muted mb-0">
                                                    162543
                                                </small>
                                            </div>
                                        </div>
                                        <div className="text-muted text-small">
                                            1h ago
                                        </div>
                                    </div>
                                    <div className="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div className="d-flex">
                                            <img
                                                className="img-sm rounded-10"
                                                src="images/faces/face4.jpg"
                                                alt="profile"
                                            />
                                            <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">
                                                    Matthew Bailey
                                                </p>
                                                <small className="text-muted mb-0">
                                                    162543
                                                </small>
                                            </div>
                                        </div>
                                        <div className="text-muted text-small">
                                            1h ago
                                        </div>
                                    </div>
                                    <div className="wrapper d-flex align-items-center justify-content-between pt-2">
                                        <div className="d-flex">
                                            <img
                                                className="img-sm rounded-10"
                                                src="images/faces/face5.jpg"
                                                alt="profile"
                                            />
                                            <div className="wrapper ms-3">
                                                <p className="ms-1 mb-1 fw-bold">
                                                    Rafell John
                                                </p>
                                                <small className="text-muted mb-0">
                                                    Alaska, USA
                                                </small>
                                            </div>
                                        </div>
                                        <div className="text-muted text-small">
                                            1h ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* extra right end */}


    </>

}

export default Extra;