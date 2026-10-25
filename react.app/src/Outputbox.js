function Outputbox({ index, name, email }) {
    return (
        <div className="output-box">
            <p>{index}</p>
            <p>{name}</p>
            <p>{email}</p>
            <button>DELETE</button>
        </div>
    )
}
export default Outputbox;