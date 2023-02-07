function Home(){
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;
    return(
        <div className="container-big">
            <div className="container-left">
                <div className="row subcontainer">
                    <div className="col col-8 col-sm-7 col-md-6 col-lg-7 col-xl-6 my-auto mx-auto">
                        <Card
                            txtcolor="black"
                            header="BadBank Landing Page"
                            headercolor = "white"
                            headerBackground = "#592e83"
                            title={`Welcome to the bank ${current_user[0]}!`}
                            text="You can use this bank"
                            body={(<img src="./img/bank.png" className="img-fluid" alt="Responsive image"></img>)}
                        />
                    </div>
                </div>
            </div>
            <div className="container-right"></div>
        </div>
        
    )
}