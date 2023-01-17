function AllData(){
    const ctx = React.useContext(UserContext)
    return(
        <div>
            <h1>All Data</h1>
            <h5>{JSON.stringify(ctx)}</h5>
        </div>
    )
}