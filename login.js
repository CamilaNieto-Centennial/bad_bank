function Login(){
    const ctx = React.useContext(UserContext)
    let current_user = Object.values(ctx.current_user);
    const [showP, setShowP] = React.useState(true);
    const [statusP, setStatusP] = React.useState('');

    const chooseShowP = (showP) => {
        setShowP(showP);
    };
    const chooseStatusP = (statusP) => {
        setStatusP(statusP);
    };

    return(
        <div className="container-big">
            <div className="container-left">
                <div className="row subcontainer" id="subcontainer02">
                    <div className="col col-8 col-sm-7 col-md-6 col-lg-7 col-xl-6 my-auto mx-auto">
                        <Card
                            bgcolor="light"
                            txtcolor="black"
                            header="Login"
                            headercolor = "#ffffff"
                            headerBackground = "#6c584c"
                            body={showP
                                ? (
                                    <BankForm
                                        chooseStatusP={chooseStatusP}
                                        statusP={statusP}
                                        email="email"
                                        password="password"
                                        buttonLogin="Login"
                                        chooseShowP={chooseShowP}
                                    />
                                )
                                :(
                                    <BankForm
                                        message={`Successfully Login as ${current_user[0]}`}
                                        chooseShowP={chooseShowP}
                                    />
                                )
                            }
                        >
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container-right" id="container-right02"></div>
        </div>
    )
}