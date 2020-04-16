import React from 'react';

import Sidebar from '../components/Admin/Sidebar';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import FooterAdmin from '../components/Admin/FooterAdmin';
import MainEntities from '../components/Admin/MainEntities';

class AdminEntities extends React.Component {
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
                                    <MainEntities />
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

export default AdminEntities;