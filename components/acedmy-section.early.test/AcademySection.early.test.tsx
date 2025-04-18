


const  = require('../acedmy-section');
// __tests__/academy-section.test.tsx
describe('AcademySection() AcademySection method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    test('should render the main section with correct class', () => {
      // This test checks if the main section is rendered with the correct class.
      render(<AcademySection />);
      const sectionElement = screen.getByRole('region');
      expect(sectionElement).toHaveClass('py-16 bg-gray-50');
    });

    test('should display the correct heading for the academy', () => {
      // This test checks if the main heading is displayed correctly.
      render(<AcademySection />);
      const headingElement = screen.getByRole('heading', { name: /our academy/i });
      expect(headingElement).toBeInTheDocument();
    });

    test('should render beginner courses section with correct content', () => {
      // This test checks if the beginner courses section is rendered with the correct content.
      render(<AcademySection />);
      const beginnerHeading = screen.getByRole('heading', { name: /beginner courses/i });
      const beginnerButton = screen.getByRole('button', { name: /explore courses/i });
      expect(beginnerHeading).toBeInTheDocument();
      expect(beginnerButton).toBeInTheDocument();
    });

    test('should render advanced programs section with correct content', () => {
      // This test checks if the advanced programs section is rendered with the correct content.
      render(<AcademySection />);
      const advancedHeading = screen.getByRole('heading', { name: /advanced programs/i });
      const advancedButton = screen.getByRole('button', { name: /view programs/i });
      expect(advancedHeading).toBeInTheDocument();
      expect(advancedButton).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    test('should handle missing image alt text gracefully', () => {
      // This test checks if the component handles missing alt text for images gracefully.
      render(<AcademySection />);
      const images = screen.getAllByRole('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt');
      });
    });

    test('should handle empty content gracefully', () => {
      // This test checks if the component handles empty content gracefully.
      // Since the component does not take any props, this is more about ensuring no runtime errors occur.
      render(<AcademySection />);
      const sectionElement = screen.getByRole('region');
      expect(sectionElement).toBeInTheDocument();
    });
  });
});