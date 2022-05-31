import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// Styles
import './Signup.css';

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailError, setThumbnailError] = useState(null);
    const { signup, isPending, error } = useSignup();

    const handleSubmit = (e) => {

        // Preventing the page from reloading when we submit the form
        e.preventDefault();
        //console.log(email, password, displayName, thumbnail);

        // It is important that the arguments match
        signup(email, password, displayName, thumbnail);

    }

    const handleFileChange = (e) => {

        // Reset state to null
        setThumbnail(null);

        // Returns an array of files and we will let the user select only one file
        let selected = e.target.files[0];
        console.log(selected);

        // Check if the user has selected a file and don't let him cancel
        if(!selected) {
            setThumbnailError('Please select a file!');
            return
        }

        // Check if it's an image
        if(!selected.type.includes('image')) {
            setThumbnailError('Selected file must be an image');
            return
        }

        // Check the size
        if(selected.size > 100000) {
            setThumbnailError('Image file size must be less than 100kb');
            return
        }

        // Resetting the error if everything passes
        setThumbnailError(null);
        setThumbnail(selected);
        console.log('Avatar updated');


    }
    
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
                <span>Email:</span>
                <input 
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)} // Changes with the value that the user typed
                    value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <label>
                <span>Username:</span>
                <input 
                    required
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>
            <label>
                <span>Avatar:</span>
                <input 
                    required
                    type="file"
                    onChange={handleFileChange}
                />
                {/* Displays the error */}
                {thumbnailError && <div className="error">{thumbnailError}</div>}
            </label>
            {/* Take out unecessary clicks */}
            {!isPending && <button className="btn">Register</button>}
            {isPending && <button className="btn" disabled>Loading</button>}
            {error && <div className="error">{error}</div>}
        </form>
    )
}