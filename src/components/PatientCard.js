function PatientCard({
    patient,
    onEdit,
    onDelete
}) {


    return (
        <div className="patient-card">
            <h4>Name: <span>{patient.name}</span></h4>
            <p>Age: <span>{patient.age}</span></p>
            <p>Gender: <span>{patient.gender}</span></p>
            <div className="btn-container" style={{ width: '100%' }}>
                <button onClick={() => onEdit(patient)}>Edit</button>
                <button onClick={() => onDelete(patient._id)}>Delete</button>
            </div>
        </div>
    );
};

export default PatientCard;