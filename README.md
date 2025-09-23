# SchawLabs - Premium Research Peptides Website

A modern, responsive e-commerce website template for peptide and research compound businesses. Built with HTML5, CSS3, and vanilla JavaScript.

## Features

### 🎨 Design
- Clean white background with trustworthy blue/green color scheme
- Modern gradient design elements
- Responsive layout for all devices
- Professional typography using Inter font

### 🛍️ E-commerce Functionality
- Product catalog with category filtering
- Search functionality
- Shopping cart with local storage
- Product modal with size/price options
- Sorting options (popularity, price, name, newest)

### 📱 User Experience
- Smooth scrolling navigation
- Interactive hover effects
- Loading animations
- Toast notifications
- Sticky header with scroll effects

### 🏪 Product Categories
- Peptides
- SARMs
- Research Oils
- Powders
- Liquids
- Cognitive Compounds
- Best Sellers
- Analytical Reagents
- Amino Acids

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize products**: Edit the `products` array in `script.js` to add your own products
3. **Add images**: Replace placeholder images with your actual product photos
4. **Update branding**: Modify company name, colors, and content as needed

## Adding Your Own Products

To add products to the catalog, edit the `products` array in `script.js`:

```javascript
{
    id: 13, // Unique ID
    name: 'Your Product Name',
    category: 'peptides', // Category slug
    price: { min: 50, max: 100 }, // Price range
    image: 'path/to/your/image.jpg', // Image URL
    badge: 'New', // Optional badge (New, Popular, Best Seller, etc.)
    popularity: 8 // Popularity score for sorting
}
```

## Customizing Colors

The website uses CSS custom properties. To change the color scheme, update these values in `styles.css`:

- **Primary Blue**: `#1e3a8a`
- **Primary Green**: `#065f46`
- **Light Green**: `#a7f3d0`
- **Background**: `#ffffff`

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### Adding Product Images
1. Create an `images` folder
2. Add your product photos
3. Update the `image` property in the products array
4. Recommended image size: 300x300px

### Modifying Categories
1. Update the category list in `index.html`
2. Add corresponding category handling in `script.js`
3. Ensure product objects use the correct category slugs

### Changing Company Information
- Update the logo and tagline in the header
- Modify contact information in the footer
- Change the hero section content
- Update social media links

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## License

This template is provided as-is for educational and commercial use. Feel free to modify and distribute.

## Support

For questions or customization help, please refer to the code comments or create an issue.

---

**Disclaimer**: This website template is for research purposes only. Ensure compliance with local laws and regulations when selling research compounds. 