import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';

// Styles
import './Project.css';

export default function Project() {

    // We want to get the id route parameter
    const { id } = useParams();
    const { error, document } = useDocument('projects', id);

    // Different way to return conditional templating
    if (error) {
        return <div className="error">{error}</div>
    }

    if (!document) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="project-details">
            <h1>{document.name}</h1>
        </div>
    )
}