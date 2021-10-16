import { render, screen } from '@testing-library/react';
import Body from './components/Body';

test('renders learn react link', () => {
  render(<Body />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
