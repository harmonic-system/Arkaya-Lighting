import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // This will go back to the previous page
    };

    return (
        <button onClick={handleBackClick} style={buttonStyle}>
            Back
        </button>
    );
};

const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#ffc221',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom:"20px"
};

export default BackButton;
