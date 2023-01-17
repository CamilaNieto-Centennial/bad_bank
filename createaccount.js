function CreateAccount(props){
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
                header="Create Account"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
                body={showP
                    ? (
                        <BankForm
                            chooseStatusP={chooseStatusP}
                            statusP={statusP}
                            name="name"
                            email="email"
                            password="password"
                            buttonCreate="Create Account"
                            chooseShowP={chooseShowP}
                        />
                    )
                    :(
                        <BankForm
                            message="Success"
                            buttonAdd="Add another account"
                            chooseShowP={chooseShowP}
                        />
                    )
                }
            >
            </Card>
        </div>
    )
}