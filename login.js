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
        <div className="container" style={{margin: "2em"}}>
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Login"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
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
                            message={`Successfully Login as ${current_user}`}
                            chooseShowP={chooseShowP}
                        />
                    )
                }
            >
            </Card>
        </div>
    )
}