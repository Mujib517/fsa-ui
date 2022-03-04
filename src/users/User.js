const User = ({ user }) => {
    return <>
        <img style={{ borderRadius: '50px' }} className="img img-thumbnail"
            src={user.avatar_url} width="100" height="100" />
        <h5>{user.login}</h5>
        <hr />
    </>
};

export default User;
