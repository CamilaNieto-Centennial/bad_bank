function Home(){
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;
    return(
        <div className="container" style={{margin: "2em"}}>
            <Card
                txtcolor="black"
                header="BadBank Landing Page"
                headercolor = "black"
                headerBackground = "#89c2d9"
                title={`Welcome to the bank ${current_user}!`}
                text="You can use this bank"
                body={(<img src="bank.png" className="img-fluid" alt="Responsive image"></img>)}
            />
            {/*<h1>Home</h1>
            <h5>{JSON.stringify(ctx)}</h5>*/}
        </div>
    )
}