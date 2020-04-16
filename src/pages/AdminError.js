import React from 'react';

import Sidebar from '../components/Admin/Sidebar';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import FooterAdmin from '../components/Admin/FooterAdmin';
import MainError from '../components/Admin/MainError';

class AdminError extends React.Component {
    render() {
        return (
            <div className="wrapper_admin">
                <div className="container-fluid">
                    <div className="container-car-setting">
                        <Sidebar />
                        <div className="content-admin">
                            <div className="content-admin__inner">
                                <div className="content-admin__item">
                                    <HeaderAdmin />
                                    <MainError />
                                    <FooterAdmin />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminError;