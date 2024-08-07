import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllAssets from './components/AllAssets';
import Assets from './storage/db.json'
import Creators from './storage/creators.json';


// Mocking the JSON files
jest.mock('./storage/db.json', () => ({
  assets: [
    { id: 1, 'genre-id': 0, title: 'Digital Art 1', creator: 'Creator 1', 'creator-id': 1, 'asset-image': 'path/to/image1.jpg', likes: 10, bids: 5 },
    { id: 2, 'genre-id': 1, title: 'Photography 1', creator: 'Creator 2', 'creator-id': 2, 'asset-image': 'path/to/image2.jpg', likes: 20, bids: 10 },
    // Add more mock assets as needed
  ],
}));

jest.mock('./Context/BookmarkContext', () => ({
  useBookmarks: () => ({
    addBookmark: jest.fn(),
  }),
}));

jest.mock('./Context/CartContext', () => ({
  useCart: () => ({
    cart: [],
    addToCart: jest.fn(),
  }),
}));

jest.mock('./storage/creators.json', () => ({
  creators: [
    { 'creator-id': 1, name: 'Creator 1', image: 'path/to/creator1.jpg' },
    { 'creator-id': 2, name: 'Creator 2', image: 'path/to/creator2.jpg' },
    // Add more mock creators as needed
  ],
}));

// Mocking the window.scrollTo function
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

describe('AllAssets Component', () => {
  beforeEach(() => {
    window.scrollTo.mockClear();
    render(
      <Router>
        <AllAssets />
      </Router>
    );
  });

  test('renders AllAssets component with assets', () => {
    expect(screen.getByTestId('hero-text')).toBeInTheDocument();
    expect(screen.getByTestId('hero-text2')).toBeInTheDocument();

    // Check if assets are rendered
    Assets.assets.forEach(asset => {
      expect(screen.getByText(asset.title)).toBeInTheDocument();
    });
  });

  test('useEffect sets creators data and scrolls to top', () => {
    const { queryAllByText } = render(
      <Router>
        <AllAssets />
      </Router>
    );

    // Check if window.scrollTo was called
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

    // Check if creators data is set correctly
    Creators.creators.forEach((creator) => {
      const creatorElements = queryAllByText(creator.name);
      expect(creatorElements.length).toBeGreaterThan(0);
    });
  });

  test('filters assets by genre', async () => {
    const filterButton = screen.getByTestId('filter-button');
    fireEvent.click(filterButton);

    const photographyFilter = screen.getByText('Photography');
    fireEvent.click(photographyFilter);

    // Check if only Photography assets are rendered
    expect(screen.getByText('Photography 1')).toBeInTheDocument();
    expect(screen.queryByText('Digital Art 1')).toBeNull();
    // Add more checks for other genres as needed
  });

  test('searches assets by title and creator', () => {
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Digital Art 1' } });

    // Check if the asset with the title "Digital Art 1" is rendered
    expect(screen.getByText('Digital Art 1')).toBeInTheDocument();
    expect(screen.queryByText('Photography 1')).not.toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'Creator 2' } });

    // Check if the asset with the creator "Creator 2" is rendered
    expect(screen.getByText('Photography 1')).toBeInTheDocument();
    expect(screen.queryByText('Digital Art 1')).not.toBeInTheDocument();
  });

  test('add to cart', async () => {
    const { getAllByTestId } = render(
      <Router>
        <AllAssets />
      </Router>
    );
    const addToCartButtons = getAllByTestId('addtocart');
    
    // Assuming you want to click the first "add to cart" button
    fireEvent.click(addToCartButtons[0]);
    
    await waitFor(() => expect(screen.getByText(/Asset has been added to your cart!/i)).toBeInTheDocument());
  });

  test('add to bookmarks', async () => {
    render(
      <Router>
        <AllAssets />
      </Router>
    );

    const addToBookmarksButtons = screen.getAllByTestId('addtobookmark');

    fireEvent.click(addToBookmarksButtons[0]);

    await waitFor(() => {
      const updatedBookmarkIcon = screen.getAllByTestId('addtobookmark')[0].querySelector('i');
      expect(updatedBookmarkIcon).toHaveClass('text-green-500 text-2xl bi bi-bookmark-plus-fill hover:text-green-300');
    });

  });
});
