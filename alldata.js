function AllData() {
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;
    let usersArray = Object.values(ctx.users);

    console.log(current_user);
    console.log(usersArray);

    return (
        <div style={{margin: "2em"}}>
            <h1>All Data</h1>
            <Table
                tableColor = "" /*dark*/ 
                striped = "striped"
                responsive = "responsive"
                titles = {["Name", "Email", "Password", "Balance"]}
            />
            {/*}
            <h5>{JSON.stringify(ctx)}</h5>
            <br />
            <h4><strong>Guest</strong> user will NOT make part of Users table. <strong>Guest</strong> only exists for testing purposes...</h4>
            */}
        </div>
    )
}