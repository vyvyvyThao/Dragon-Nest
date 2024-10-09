import React, { useEffect, useState } from 'react';
import '../components/Login.css'; 

const Information = ({ userData }) => {
    return (
        <>
        <h2>Information</h2>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        </>
    );
};
const Lists = () => {
    return (
        <>
        <h2>House Listings</h2>
        <p>House 1</p>
        <p>House 2</p>
        </>
    )
}

const Tabs = ({ config }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className="tab">
        <div className="tab-headers">
          {config.map((entry, index) => (
            <div 
              key={entry.header} 
              className={`tab-header ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            > 
              {entry.header}
            </div>
          ))}
        </div>
        <div className="tab-body">
          {config[activeTab].component}
        </div>
      </div>
    );
  };

  const UserPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                setIsLoading(true);
                try {
                    const response = await fetch('http://localhost:5001/api/userinfo', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const userData = await response.json();
                    setUserInfo(userData);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setError('No token found in local storage.');
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Tabs
            config={[
                { header: "Information", component: <Information userData={userInfo} /> },
                { header: "Lists", component: <Lists /> },
            ]}
        />
    );
};

export default UserPage;