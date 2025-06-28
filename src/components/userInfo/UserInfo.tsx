import './UserInfo.css'

const UserInfo = () => {
    return (
        <a href={'#'} className="user-info">
            <img width="48" height="48" src="https://img.icons8.com/color/48/user-female-circle--v1.png" alt="user-female-circle--v1"/>
            <p className="username">User name</p>
        </a>
    );
};
export default UserInfo;