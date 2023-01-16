function Spa(){
    return(
        <HashRouter>
            <div>
                <NavBar/>
                <hr/>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
            </div>
        </HashRouter>
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById("root")
)