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
        <div style={{margin: "2em"}}>
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Deposit"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
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
    )
}