import { useCollection } from '../hooks/useCollection';

// Components
import Avatar from './Avatar';

// Styles
import './OnlineUsers.css';

export default function OnlineUsers() {

    const { error, documents } = useCollection('users');

    return (
        <div className="user-list">
            <h2>All Users</h2>
            {error && <div className="error">{error}</div>}
            {/* Has to be done like this because it takes time to fetch the documents */}
            {documents && documents.map(user => (
                <div key={user.id} className="user-list-item">
                    {user.online && <span className="online-user"></span>}
                    <span>{user.displayName}</span>
                    <Avatar src={user.photoURL}/>
                </div>
            ))}
        </div>
    )
}