import React, { useState } from "react";

const EventModal = ({ isOpen, onClose, onSave, event }) => {
    const [formData, setFormData] = useState(event || { name: "", startTime: "", endTime: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>{event ? "Edit Event" : "Add Event"}</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button onClick={onClose} className="cancel-btn">
                            Cancel
                        </button>
                        <button onClick={handleSubmit} className="save-btn">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default EventModal;
