function Withdraw(){
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
                <div className="row subcontainer" id="subcontainer04">
                    <div className="col col-8 col-sm-7 col-md-6 col-lg-7 col-xl-6 my-auto mx-auto">
                        <Card
                            bgcolor="light"
                            txtcolor="black"
                            header="Withdraw"
                            headercolor = "#ffffff"
                            headerBackground = "#184e77"
                            title={`${current_user[0]}`}
                            body={showP
                                ? (
                                    <BankForm
                                        chooseStatusP={chooseStatusP}
                                        statusP={statusP}
                                        balance={`$ ${current_user[1]}`}
                                        withdraw="withdraw"
                                        buttonWithdraw="Withdraw"
                                        chooseShowP={chooseShowP}
                                    />
                                )
                                :(
                                    <BankForm
                                        message="Successfully Withdraw"
                                        buttonAddW="Add another Withdraw"
                                        chooseShowP={chooseShowP}
                                    />
                                )
                            }
                        >
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container-right" id="container-right04"></div>
        </div>
    )
}