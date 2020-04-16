import React from 'react';

class MainEntities extends React.Component {
    render() {
        return (
            <main className="main_car-content">
                <div className="car-content__inner">
                    <h1>Entitites</h1>
                    <div className="content_entities">
                        <div className="entities_header">
                            <div className="input-group entities-choose">
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Field</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect02">
                                    <option selected>Field</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect03">
                                    <option selected>Field</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect04">
                                    <option selected>Field</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="entities_btn-control">
                                <button className="btn btn-danger entities-reset">Reset</button>
                                <button className="btn btn-primary entities-apply">Apply</button>
                            </div>
                        </div>
                        <div className="entities_table">
                            <table className="table table-borderless">
                                <thead className="entities_thead">
                                    <tr>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    <th>Header</th>
                                    </tr>
                                </thead>
                                <tbody className="entities_tbody">
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                    <td>Value</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td>19,291</td>
                                    <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <nav className="entities_pagination">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="index.html" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="index.html">1</a></li>
                                <li className="page-item active"><a className="page-link" href="index.html">2</a></li>
                                <li className="page-item"><a className="page-link" href="index.html">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="index.html" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainEntities;