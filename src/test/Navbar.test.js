import { render, screen, cleanup} from '@testing-library/react';
import Navbar from '../components/Navbar';

test('should render navbar component', ()=>{
    render(<Navbar />);
    const navbarElement = screen.getByTestId('nav-1');
    expect(navbarElement).toBeInTheDocument(); 
})