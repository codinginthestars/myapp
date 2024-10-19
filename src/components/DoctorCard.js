import '../styles/Doctors.css';

function DoctorCard({
    doctor,
    onEdit,
    onDelete
}) {

    return (
        <div className="doctor-card">
            <p>
                <span>Name: </span>
                {doctor.name}
            </p>
            <p>
                <span>Specialty: </span>
                {doctor.specialty}
            </p>
            <div className="btn-container">
                <button onClick={() => onEdit(doctor)}>
                    Edit
                </button>
                <button onClick={() => onDelete(doctor._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DoctorCard;