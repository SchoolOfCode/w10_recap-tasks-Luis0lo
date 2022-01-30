import { render, screen } from '@testing-library/react';
import Comments from './';

test('Comment displays on browser', () => {
  const testProps = {
    author: 'Luis',
    comment: 'Keep going!',
  };
  render(<Comments {...testProps} />);
  const commentDisplay = screen.getByTestId('comment-display');
  expect(commentDisplay).toBeInTheDocument();
  // screen.debug()
});
