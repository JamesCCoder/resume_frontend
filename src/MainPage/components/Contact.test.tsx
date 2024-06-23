import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';
import emailjs from 'emailjs-com';
import { MemoryRouter } from 'react-router-dom';

jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

describe('Contact component', () => {
  beforeEach(() => {
    (emailjs.send as jest.Mock).mockClear();
  });

  it('renders the form correctly', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Your Firstname')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Lastname')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message here')).toBeInTheDocument();
  });

//   it('displays an error message if form is submitted with missing fields', async () => {
//     render(
//       <MemoryRouter>
//         <Contact />
//       </MemoryRouter>
//     );
    
//     fireEvent.click(screen.getByText('Submit'));
    
//     await waitFor(() => {
//       expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
//     });
//   });

  it('sends the email successfully and displays success message', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200, text: 'OK' });

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Your Firstname'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Your Lastname'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Type your message here'), { target: { value: 'Hello, this is a test message.' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByText(/thanks for the message/i)).toBeInTheDocument();
    }, { timeout: 5000 }); // 延长等待时间到 5 秒
  });

//   it('displays an error message if email sending fails', async () => {
//     (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Failed to send'));

//     render(
//       <MemoryRouter>
//         <Contact />
//       </MemoryRouter>
//     );

//     fireEvent.change(screen.getByPlaceholderText('Your Firstname'), { target: { value: 'John' } });
//     fireEvent.change(screen.getByPlaceholderText('Your Lastname'), { target: { value: 'Doe' } });
//     fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(screen.getByPlaceholderText('Type your message here'), { target: { value: 'Hello, this is a test message.' } });

//     fireEvent.click(screen.getByText('Submit'));

//     await waitFor(() => {
//       expect(screen.getByText(/failed to send the message/i)).toBeInTheDocument();
//     });
//   });
});
