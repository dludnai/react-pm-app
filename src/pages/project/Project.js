import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
import ProjectComments from './ProjectComments';

// Styles
import './Project.css';


export default function Project() {

    // We want to get the id route parameter
    const { id } = useParams();
    const { error, document } = useDocument('projects', id);

    // Different way of returning conditional templating
    if (error) {
        return <div className="error">{error}</div>
    }

    if (!document) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="project-details">
            <ProjectSummary project={document} />
            <ProjectComments project={document} />
        </div>
    )
}