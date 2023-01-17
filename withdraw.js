function Withdraw(){
    const ctx = React.useContext(UserContext)
    return(
        <div>
            <h1>Withdraw</h1>
            <h5>{JSON.stringify(ctx)}</h5>
        </div>
    )
}