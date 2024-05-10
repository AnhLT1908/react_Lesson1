import {Row, Col, NavLink, Table} from 'react-bootstrap'

const Tabtable = () => {
    return (
        <Row className='d-flex justify-content-between'>
            <Col md={1}>
                <NavLink href='#home' style={{color:'White', backgroundColor: 'Green', textAlign:'center'}}>Home</NavLink>
                <NavLink href='feature' style={{color:'White', backgroundColor: 'Green', textAlign:'center'}}>Features</NavLink>
                <NavLink href='price' style={{color:'White', backgroundColor: 'Green', textAlign:'center'}}>Pricing</NavLink>
            </Col>
            <Col md={11}>
                <Table striped bordered hover style={{backgroundColor: 'gray'}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Le</td>
                            <td>Tien</td>
                            <td>Anh</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ha</td>
                            <td>Gia</td>
                            <td>Manh</td>
                            <td>Hello</td>
                            <td>Hithere</td>
                            <td>Tuan Anh</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default Tabtable;