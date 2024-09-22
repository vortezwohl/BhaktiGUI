// app.jsx
const BhaktiIcon = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
            <a href="https://github.com/vortezwohl/Bhakti">
                <img src="https://github.com/vortezwohl/Bhakti/releases/download/icon/Bhakti-logo.png" width="200px" alt="Bhakti GUI"/>
            </a>
        </div>
    )
}

ReactDOM.render(<BhaktiIcon/>, document.getElementById('bhakti-icon'));