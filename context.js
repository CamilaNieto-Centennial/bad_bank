const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);

function Card(props) {
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    function cardHeader(){
        const txt = props.headercolor ? props.headercolor : ' ';
        return txt;
    }
    function cardHeader2(){
        const bg = props.headerBackground ? props.headerBackground : ' ';
        return bg;
    }
    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header" style={{background: cardHeader2(), color: cardHeader()}}>{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title" style={{fontWeight: "bold"}}>{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<h5 id="createStatus">{props.status}</h5>)}
            </div>
        </div>
    )
}


function BankForm(props, {chooseShowP}) {

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [withdraw, setWithdraw] = React.useState('');
    const ctx = React.useContext(UserContext)

    function validate(field, label) {
        if (!field) {
            console.log('Error: ' + label)
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            props.chooseStatusP('Error: ' + label);
            setTimeout(() => props.chooseStatusP(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate() {
        console.log(name, email, password);
        if(!validate(name, 'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance:100})
        setShow(false)
        props.chooseShowP(false)
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true)
        props.chooseShowP(true)
    }

    function validateLogin(fieldEmail, fieldPwd) {
        let emails = []
        let usersArray = Object.values(ctx.users);
        //console.log(usersArray)
        // Get emails from context (ctx.users) and add them to 'emails' array
        for(let i in usersArray){
            emails.push({name:usersArray[i]["name"], email : usersArray[i]["email"], password : usersArray[i]["password"]})
        }
        console.log(emails)

        // Check if email typed exists
        for (let i in emails) {
            console.log("------")
            console.log(emails[i]['email']);
            console.log(emails[i]['password']);
            if (fieldEmail === emails[i]['email'] && fieldPwd === emails[i]['password']){
                console.log("Coincidence with " + emails[i]['email'] + " and " + emails[i]['password'])
                props.chooseShowP(false)
                let current_user = ctx.current_user;
                current_user.splice(0, 1, emails[i]['name']);
                return true
            }
            else {
                console.log("No match")
                props.chooseStatusP('No match. Try again.');
                setTimeout(() => props.chooseStatusP(''), 5000);
            }
        }
        //return true;
    }

    function handleLogin() {
        console.log("Login as " + email, password);
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        if(!validateLogin(email, password)) return;

    }

    function clearFormD() {
        setDeposit('');
        setShow(true)
        props.chooseShowP(true)
    }

    function clearFormW() {
        setWithdraw('');
        setShow(true)
        props.chooseShowP(true)
    }

    function handleDeposit() {
        console.log("Deposit " + deposit);
    }

    function handleWithdraw() {
        console.log("Withdraw " + withdraw);
    }

    return (
            <>
            {props.statusP && (<h5 id="createStatus" className="text-danger"><strong>{props.statusP}</strong></h5>)}
            {props.name && (
                <>
                    <label htmlFor={props.name}>Name</label>
                    <input type="input" className="form-control" id={props.name} placeholder="Enter your name" value={name} onChange={e => setName(e.currentTarget.value)}/>
                    <br />
                </>
                )
            }
            {props.email && (
                <>
                    <label htmlFor={props.email}>Email</label>
                    <input type="email" className="form-control" id={props.email} placeholder="email@email.com" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                    <br />
                </>
                )
            }
            {props.password && (
                <>
                    <label htmlFor={props.password}>Password</label>
                    <input type="password" className="form-control" id={props.password} placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                    <br />
                </>
                )
            }
            {props.message && (
                <>
                    <h5><strong>{props.message}</strong></h5>
                    <br />
                </>
                )
            }
            {props.balance && (
                <>
                    <p>Balance <strong>{props.balance}</strong></p>
                </>
                )
            }
            {props.deposit && (
                <>
                    <label htmlFor={props.deposit}>Deposit Amount</label>
                    <input type="number" className="form-control" id={props.deposit} placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
                    <br />
                </>
                )
            }
            {props.withdraw && (
                <>
                    <label htmlFor={props.withdraw}>Withdraw Amount</label>
                    <input type="number" className="form-control" id={props.withdraw} placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
                    <br />
                </>
                )
            }
            {props.buttonCreate && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={handleCreate}>{props.buttonCreate}</button>
                </>
                )
            }
            {props.buttonAdd && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={clearForm}>{props.buttonAdd}</button>
                </>
                )
            }
            {props.buttonLogin && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={handleLogin}>{props.buttonLogin}</button>
                </>
                )
            }
            {props.buttonDeposit && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={handleDeposit}>{props.buttonDeposit}</button>
                </>
                )
            }
            {props.buttonAddD && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={clearFormD}>{props.buttonAddD}</button>
                </>
                )
            }
            {props.buttonAddW && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={clearFormW}>{props.buttonAddW}</button>
                </>
                )
            }
            {props.buttonWithdraw && (
                <>
                    <button type="submit" className="btn btn-secondary" onClick={handleWithdraw}>{props.buttonWithdraw}</button>
                </>
                )
            }
            </>
    )


}
