import React from 'react';
import { Link } from 'react-router-dom';

class MainEntities extends React.Component {
    render() {
        return (
            <main>
                <div className="car__body">
                    <h1>Entitites</h1>
                    <div className="car__entities">
                        <div className="item-entities item-entites__header">
                            <div className="input-group item-entites__choose">
                                <select className="custom-select" id="inputGroupSelect1">
                                    <option>Field</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect2">
                                    <option>Field</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect3">
                                    <option>Field</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                                <select className="custom-select" id="inputGroupSelect4">
                                    <option>Field</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div className="item-entities__button">
                                <button className="btn btn-danger item-entities__reset">Reset</button>
                                <button className="btn btn-primary item-entities__apply">Apply</button>
                            </div>
                        </div>
                        <div className="item-entities__table">
                            <table className="table table-borderless">
                                <thead className="item-entities__thead">
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
                                <tbody className="item-entities__tbody">
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
                        <nav className="item-entities__pagination">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <Link className="page-link" to="/admin/entities" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" to="/admin/entities">1</Link></li>
                                <li className="page-item active"><Link className="page-link" to="/admin/entities">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/admin/entities">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="/admin/entities" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </Link>
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