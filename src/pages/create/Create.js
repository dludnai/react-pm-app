import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

// Styles
import './Create.css';


// Array of objects, categories will be constant
const categories = [
    { value: 'development', label: 'Development'},
    { value: 'design', label: 'Design' },
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
]

// <option value="">label</option>

export default function Create() {

    // Get all the documents
    const { documents } = useCollection('users');
    //console.log(documents);

    // Mapping through documents object to create a new array
    // Storing in the new array
    const [users, setUsers] = useState([]);

    // Form field values
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [category, setCategory] = useState('');
    const [assignedUsers, setAssignedUsers] = useState([]);

    // If we have documents map through them and update users
    useEffect(() => {
        if(documents) {
            const options = documents.map(user => {
                return { value: user, label: user.displayName }
            });
            setUsers(options);
        }
    }, [documents])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, details, dueDate, category.value, assignedUsers);
    }

    return (
        <div className="create-form">
            <h2 className="page-title">Create a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project name:</span>
                    <input
                        required 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea
                        required 
                        type="text" 
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                    ></textarea>
                </label>
                <label>
                    <span>Set due date:</span>
                    <input
                        required 
                        type="date" 
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                    />
                </label>
                <label>
                    <span>Category select:</span>
                    <Select
                        onChange={(option) => setCategory(option)}
                        options={categories} 
                    />
                </label>
                <label>
                    <span>Assign to:</span>
                    <Select 
                        onChange={(option) => setAssignedUsers(option)}
                        options={users}
                        isMulti
                    /> 
                </label>

                <button className="btn">Add Project</button>
            </form>
        </div>
    )
}