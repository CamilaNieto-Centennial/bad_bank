function Deposit(){
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;

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
                <div className="row subcontainer" id="subcontainer03">
                    <div className="col col-8 col-sm-7 col-md-6 col-lg-7 col-xl-6 my-auto mx-auto">
                        <Card
                            bgcolor="light"
                            txtcolor="black"
                            header="Deposit"
                            headercolor = "#ffffff"
                            headerBackground = "#3a5a40"
                            title={`${current_user[0]}`}
                            body={showP
                                ? (
                                    <BankForm
                                        chooseStatusP={chooseStatusP}
                                        statusP={statusP}
                                        balance={`$ ${current_user[1]}`}
                                        deposit="deposit"
                                        buttonDeposit="Deposit"
                                        chooseShowP={chooseShowP}
                                    />
                                )
                                :(
                                    <BankForm
                                        message="Successfully Deposit"
                                        buttonAddD="Add another Deposit"
                                        chooseShowP={chooseShowP}
                                    />
                                )
                            }
                        >
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container-right" id="container-right03"></div>
        </div>
    )
}