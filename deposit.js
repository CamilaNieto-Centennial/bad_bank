function Deposit(){
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
                header="Deposit"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
                body={showP
                    ? (
                        <BankForm
                            chooseStatusP={chooseStatusP}
                            statusP={statusP}
                            balance="$"
                            deposit="deposit"
                            buttonDeposit="Deposit"
                            chooseShowP={chooseShowP}
                        />
                    )
                    :(
                        <BankForm
                            message="Successfully Deposit"
                        />
                    )
                }
            >
            </Card>
        </div>
    )
}