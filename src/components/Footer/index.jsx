import React from 'react';

const index = () => {
    return (
        <div>
            <footer className="footer bg-info w-100 py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className='text-light m-0 p-0'>Copyright &copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default index;