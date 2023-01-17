function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext)

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
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
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true)
    }

    return(
        <div className="container" style={{margin: "2em"}}>
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Create Account"
                headercolor = "#ffffff"
                headerBackground = "#1b2a41"
                status={status}
                body={show 
                    ? (
                        <>
                        <label htmlFor="name">Name</label>
                        <input type="input" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={e => setName(e.currentTarget.value)}/>
                        <br />
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="email@email.com" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <br />
                        <button type="submit" className="btn btn-secondary" onClick={handleCreate}>Create Account</button>
                        </>
                    )
                    :(
                        <>
                        <h5><strong>Success</strong></h5>
                        <button type="submit" className="btn btn-secondary" onClick={clearForm}>Add another account</button>
                        </>
                    )
                }
            />
        </div>
        /*<div>
            <h1>Create Account</h1>
            <h5>{JSON.stringify(ctx)}</h5>
        </div>*/
    )
}