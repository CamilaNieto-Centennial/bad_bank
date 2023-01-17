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
        return + txt;
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