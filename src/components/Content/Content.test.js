import { render, screen } from '@testing-library/react';
import Content from './';

test('Article displays on browser', () => {
  const testProps = {
    paragraphs: [],
    title: '',
  };
  render(<Content {...testProps} />);
  const articleDisplay = screen.getByTestId('article-display');
  expect(articleDisplay).toBeInTheDocument();
});

test('Button inner text equals LIKE', () => {
  render(<Content/>);
  const likeButton = screen.getByTestId('like-button');
  expect(likeButton).toContainHTML('LIKE');
});

test('Article has the correct number of paragraphs', () => {
  const testProps = {
    paragraphs: [
      { id: 0, text: 'paragraph 1' },
      { id: 1, text: 'paragraph 2' },
    ],
    title: 'Pigeon',
  };
  render(<Content {...testProps} />);
  const articleDisplays = screen.getAllByTestId(/paragraph-*/);
  expect(articleDisplays).toHaveLength(testProps.paragraphs.length);
});
