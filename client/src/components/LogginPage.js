import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice"; // Assuming you have a userSlice for Redux
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode JWT tokens

const LogginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState(null);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            const { data } = response;
            localStorage.setItem("token", data.token); // Store token in localStorage
           
            const decode = jwtDecode(data.token); // Decode the JWT token

            dispatch(setUser({
                id: decode.id,
                email: decode.email,
                username: decode.username,
                role: decode.role,
            }));

            if (response.data.success) {
                navigate("/dashboard");
            } else {
                setError(response.data.message || "Login failed");
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="login-page">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
export default LogginPage;