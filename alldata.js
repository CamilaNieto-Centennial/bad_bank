function AllData() {
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;

    return (
        <div style={{margin: "2em"}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-9 col-lg-8 col-xl-6 my-3" style={{border: "#3f3f3f  5px solid"}}>
                    <div className="row">
                        <div className="col-sm-5 bg-danger rounded-left">
                            <div className="card-block text-center text-white">
                                <i className="fas fa-user-tie fa-7x mt-4"></i>
                                <h1 className="font-weight-bold mt-4">{current_user[0]}</h1>
                            </div>
                        </div>
                        <div className="col-sm-7 bg-white rounded-right">
                            <h2 className="mt-3 text-center">Your Information</h2>
                            <hr className="mainHr"/>
                            <div className="row">
                                <div className="col-sm-12">
                                    <h5><strong>Name: </strong>{current_user[0]}</h5>
                                </div>
                                <div className="col-sm-12">
                                    <h5><strong>Email: </strong>{current_user[2]}</h5>
                                </div>
                                <div className="col-sm-12">
                                    <h5><strong>Balance: </strong>${current_user[1]}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <h1>All Data</h1>
            <Table
                tableColor = "" /*dark*/ 
                striped = "striped"
                responsive = "responsive"
                titles = {["Name", "Email", "Password", "Balance"]}
            />
            {/*}
            <h5>{JSON.stringify(ctx)}</h5>
            <br />
            <h4><strong>Guest</strong> user will NOT make part of Users table. <strong>Guest</strong> only exists for testing purposes...</h4>
            */}
        </div>
    )
}