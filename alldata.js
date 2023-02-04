function AllData() {
    const ctx = React.useContext(UserContext)
    let current_user = ctx.current_user;

    return (
        <div style={{margin: "2em"}}>
            <h1>Your Basic Information</h1>
            <ul>
                <li><strong>Name: </strong>{current_user[0]}</li>
                <li><strong>Email: </strong>{current_user[2]}</li>
                <li><strong>Balance: </strong>{current_user[1]}</li>
            </ul>
            <hr />
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