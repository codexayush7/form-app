import React, { useState } from "react";
import "../Form.css";

export default function Form() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.password) {
            alert("Please fill in all fields.");
            return;
        }
        console.log("Form Submitted:", form);
        alert(`Welcome, ${form.name}!`);
        setForm({ name: "", email: "", password: "" });
    };
    return (
        <React.Fragment>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
            );
        </React.Fragment>
    )
}