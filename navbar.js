function NavBar(){
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Bad Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Home</a>
                            <div class="popover__content">
                                <p class="popover__message">Welcome message to the website</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/CreateAccount">Create Account</a>
                            <div class="popover__content" id="secondPopover">
                                <p class="popover__message">Create a new account with us using your name, email, and password</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login">Login</a>
                            <div class="popover__content" id="thirdPopover">
                                <p class="popover__message">Login to your own account</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit">Deposit</a>
                            <div class="popover__content" id="fourthPopover">
                                <p class="popover__message">Put money in your bank account</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw">Withdraw</a>
                            <div class="popover__content" id="thirdPopover">
                                <p class="popover__message">Take money out of your bank account</p>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata">All Data</a>
                            <div class="popover__content" id="fifthPopover">
                                <p class="popover__message">Check your and others' Basic Information</p>
                            </div>
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