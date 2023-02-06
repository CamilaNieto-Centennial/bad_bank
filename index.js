function Spa(){
    return(
        <HashRouter>
            <div>
                <NavBar/>
                <UserContext.Provider value={{users:[{name:"Kmi", email:"kmi@gmail.com", password:"1234", balance:100}], current_user:["Guest", 0, "email"]}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/withdraw/" component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
                </UserContext.Provider>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById("root")
)