// test/pro.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Pro from '../src/pro'; // Adjust the path as necessary

test('renders Pro  with correct content', () => {
    render(
        <Router>
            <Pro />
        </Router>
    );

    // Check if the main title is rendered
    expect(screen.getByText(/Subscription Plans/i)).toBeInTheDocument();

    // Check if the plan titles are rendered
    expect(screen.getByText(/Basic/i)).toBeInTheDocument();
    expect(screen.getByText(/Advanced/i)).toBeInTheDocument();
    expect(screen.getByText(/Pro/i)).toBeInTheDocument();

    // Check if the plan descriptions are rendered
    expect(screen.getByText(/Get started with Basic Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Advanced Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Perfect Solution for NFT Enthusiasts/i)).toBeInTheDocument();

    // Check if the buttons are rendered
    expect(screen.getByText(/Start Free Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Advanced Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Pro Plan/i)).toBeInTheDocument();
});