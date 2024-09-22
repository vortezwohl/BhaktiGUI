// app.jsx
const {useState} = React
const ClientInit = () => {
    const [server, setServer] = useState('127.0.0.1')
    const [port, setPort] = useState(23860)
    const [timeout, setTimeout] = useState(4.0)
    const [bufferSize, setBufferSize] = useState(256)
    const [eof, setEof] = useState('<eof>')
    const [dbEngine, setDbEngine] = useState('dipamkara');
    const changeServer = (event) => {
        setServer(event.target.value)
    }
    const changePort = (event) => {
        setPort(event.target.value)
    }
    const changeTimeout = (event) => {
        setTimeout(event.target.value)
    }
    const changeBufferSize = (event) => {
        setBufferSize(event.target.value)
    }
    const changeEof = (event) => {
        setEof(event.target.value)
    }
    const changeDbEngine = (event) => {
        setDbEngine(event.target.value)
    }
    const connect = () => {
        window.location.assign("index.html")
    }
    return (
        <div className="container">
            <div className="subContainer">
                <span className="item">
                    <label htmlFor="ClientInit.Server">Server</label>
                    <input id="ClientInit.Server"
                           value={server}
                           onChange={changeServer}
                    ></input>
                </span>
                <span className="item">
                    <label htmlFor="ClientInit.Port">Port</label>
                    <input id="ClientInit.Port"
                           value={port}
                           onChange={changePort}
                    ></input>
                </span>

                <span className="item">
                    <label htmlFor="ClientInit.Timeout">Timeout</label>
                    <input id="ClientInit.Timeout"
                           value={timeout}
                           onChange={changeTimeout}
                    ></input>
                </span>

                <span className="item">
                    <label htmlFor="ClientInit.BufferSize">Buffer Size</label>
                    <input id="ClientInit.BufferSize"
                           value={bufferSize}
                           onChange={changeBufferSize}
                    ></input>
                </span>

                <span className="item">
                    <label htmlFor="ClientInit.EOF">EOF</label>
                    <input id="ClientInit.EOF"
                           value={eof}
                           onChange={changeEof}
                    ></input>
                </span>

                <span className="item">
                    <label htmlFor="ClientInit.DBEngine">DB Engine</label>
                    <select id="ClientInit.DBEngine"
                            value={dbEngine}
                            onChange={changeDbEngine}>
                        <option value="dipamkara">Dipamkara</option>
                    </select>
                </span>
            </div>
            <div>
                <button onClick={connect}>Connect</button>
            </div>
        </div>
    )
}
ReactDOM.render(<ClientInit/>, document.getElementById('client-init'));