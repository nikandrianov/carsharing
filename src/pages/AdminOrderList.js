import React from 'react';

import Sidebar from '../components/Admin/Sidebar';
import HeaderAdmin from '../components/Admin/HeaderAdmin';
import FooterAdmin from '../components/Admin/FooterAdmin';
import MainOrderList from '../components/Admin/MainOrderList';

class AdminOrderList extends React.Component {
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
                                    <MainOrderList />
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

export default AdminOrderList;