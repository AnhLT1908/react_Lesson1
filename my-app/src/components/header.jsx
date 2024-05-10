import {Navbar, NavbarBrand, NavLink, Nav, Form, FormControl, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg='primary' variant='dark'>
            <NavbarBrand href='#home'>Tien Anh</NavbarBrand>
            <Nav className='mr-auto'>
                <NavLink href='#home'>Home</NavLink>
                <NavLink href='#feature'>Features</NavLink>
                <NavLink href='#price'>Pricing</NavLink>
            </Nav>
            <Form className='d-flex'>
                <FormControl type='text' placeholder='Search' className='mr-sm-2'></FormControl>
                <Button style={{backgroundColor: 'green', height: '40   px', borderRadius: '5px'}}>Search</Button>
            </Form> 
        </Navbar>
    )
}

export default Header;