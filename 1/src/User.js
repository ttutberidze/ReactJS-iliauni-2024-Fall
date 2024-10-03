const User = ({name, onChange}) => {

    return (
        <input value={name} onChange={onChange} />
    )
}

export default User;