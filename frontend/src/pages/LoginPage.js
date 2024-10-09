import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../components/Login.css'; 

const LoginPage = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [signInSuccess, setSignInSuccess] = useState(false);
    const [signInClicked, setSignInClicked] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignInInputChange = (event) => {
        const { name, value } = event.target;
        setSignInData({
            ...signInData,
            [name]: value
        });
    };
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required');
        } else {
            // Proceed with form submission
            console.log('Form submitted:', formData);
            // Reset error
            setError('');
            // Toggle to sign-in panel
            handleToggle();
        }
    };

    const handleSignInSubmit = (event) => {
        event.preventDefault();
        if (!signInData.email || !signInData.password) {
            setError('Email and Password are required');
        } else {
            fetch('http://localhost:5001/nests/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signInData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(data => Promise.reject(data));
                }
                return response.json();
            })
            .then(data => {
                if (data.token) {
                  localStorage.setItem('token', data.token);
                  localStorage.setItem('userInfo', JSON.stringify(data.user)); // Store user info
                  setSignInSuccess(true);
                  setError('');
                } else {
                  setError('No token received, cannot log in.');
                  setSignInSuccess(false);
                }
              })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                setSignInSuccess(false);
                setError('Failed to log in. Please check your credentials and try again.');
            });
        }
    };
    
    // Add this useEffect hook
    React.useEffect(() => {
        if (signInSuccess) {
            navigate('/user'); // Redirect to User Page after sign-in
        }
    }, [signInSuccess, navigate]);

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form onSubmit={handleSignUpSubmit}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} />
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} />
                    <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
                    {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={handleSignInSubmit}>
                    <h1>Sign In</h1>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" name="email" value={signInData.email} onChange={handleSignInInputChange} />
                    <input type="password" placeholder="Password" name="password" value={signInData.password} onChange={handleSignInInputChange} />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit" onClick={() => setSignInClicked(true)}>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all site features</p>
                        <button className="hidden" onClick={handleToggle} id="login">
                        Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all site features</p>
                        <button className="hidden" onClick={handleToggle} id="register">
                        Sign Up
                        </button>
                    </div>
                </div>
            </div>
            {/* Alert message */}
            {signInSuccess && signInClicked && (
                <div className="alert">
                    Sign In Successfully!
                </div>
            )}
        </div>
    );
};

export default LoginPage;
