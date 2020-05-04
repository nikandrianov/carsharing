import React from 'react';

import Sidebar from '../components/Admin/Sidebar';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import MainCarSetting from '../components/Admin/MainCarSetting';
import FooterAdmin from '../components/Admin/FooterAdmin';

class AdminCarSetting extends React.Component {
    render() {
        return (
            <div className="wrapper__admin">
                <div className="container__body container-fluid">
                    <div className="container__setting">
                        <Sidebar />
                        <div className="admin">
                            <div className="admin__inner">
                                <div className="admin__content">
                                    <HeaderAdmin />
                                    <MainCarSetting />
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

export default AdminCarSetting;