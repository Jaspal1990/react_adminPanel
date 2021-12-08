import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    'CustomerName',
    'Date',
    'JobNumber',
    'phone',
    'Status',
    'Actions'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.CustomerName}</td>
        <td>{item.Date}</td>
        <td>{item.JobNumber}</td>
        <td>{item.phone}</td>
        <td>{item.Status}</td>
        <td>{item.Actions}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="card-search">
                                <i className='bx bx-search'></i>
                                <input type="text" placeholder='Search here...' />
                            </div>
                            <Table
                                limit='6'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;
