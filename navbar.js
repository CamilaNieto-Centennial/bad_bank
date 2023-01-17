function NavBar(){
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Bad Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/CreateAccount">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/balance">Balance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata">All Data</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/*<a href="#/">BadBank</a>,
            <a href="#/CreateAccount">Create Account</a>,
            <a href="#/login">Login</a>,
            <a href="#/deposit">Deposit</a>,
            <a href="#/withdraw">Withdraw</a>,
            <a href="#/balance">Balance</a>,
            <a href="#/alldata">alldata</a>,*/}
        </>
    )
}