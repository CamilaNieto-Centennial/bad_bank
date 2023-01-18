function Withdraw(){
    const [showP, setShowP] = React.useState(true);
    const [statusP, setStatusP] = React.useState('');

    const chooseShowP = (showP) => {
        setShowP(showP);
    };
    const chooseStatusP = (statusP) => {
        setStatusP(statusP);
    };
    
    return(
        <div className="container" style={{margin: "2em"}}>
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Withdraw"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
                body={showP
                    ? (
                        <BankForm
                            chooseStatusP={chooseStatusP}
                            statusP={statusP}
                            balance="$"
                            withdraw="withdraw"
                            buttonWithdraw="Withdraw"
                            chooseShowP={chooseShowP}
                        />
                    )
                    :(
                        <BankForm
                            message="Successfully Withdraw"
                        />
                    )
                }
            >
            </Card>
        </div>
    )
}