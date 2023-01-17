function Home(){
    const ctx = React.useContext(UserContext)
    return(
        <div>
            <h1>Home</h1>
            <h5>{JSON.stringify(ctx)}</h5>
        </div>
    )
}