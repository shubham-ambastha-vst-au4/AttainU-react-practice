const rootId = document.getElementById('root');

class Header1 extends React.Component{
    render(){
        return(
            <h1>This is Class component</h1>
        )
    }
}

const Header2 = () =>{
    return(
        <h2>This is function component</h2>
    )
}

class RenderWrapper extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <Header2 />
            </div>
        )
    }
}

ReactDOM.render(<RenderWrapper/>, rootId);