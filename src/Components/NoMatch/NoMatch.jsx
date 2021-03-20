import React from 'react';

const NoMatch = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap flex-column bg-danger text-light" style={{height: "100vh"}}>
            <h1>Page Not Found</h1>
            <h2>404</h2>
        </div>
    );
};

export default NoMatch;