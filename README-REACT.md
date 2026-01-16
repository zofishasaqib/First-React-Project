# E-Commerce React App with Tailwind CSS

This is a React conversion of the original HTML/CSS/JavaScript e-commerce website, using Tailwind CSS for styling while maintaining the exact same visual output.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Main navigation bar with React Router
│   │   ├── HeroBanner.jsx          # Hero banner section
│   │   ├── CategoriesSection.jsx   # Category slider
│   │   ├── FeaturedProducts.jsx    # Featured products grid
│   │   ├── AllProductsSection.jsx  # All products banner
│   │   ├── PromotionalSection.jsx  # Promotional cards
│   │   ├── Footer.jsx              # Footer section
│   │   ├── StickyCart.jsx          # Sticky cart icon & mini cart
│   │   └── Notification.jsx        # Toast notifications
│   ├── context/
│   │   └── CartContext.jsx         # Cart state management
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── Cart.jsx                # Shopping cart page
│   │   ├── Checkout.jsx            # Checkout page
│   │   ├── MyShop.jsx              # All products page
│   │   ├── Profile.jsx             # User profile page
│   │   └── Promotions.jsx          # 50% OFF promotions page
│   ├── App.jsx                     # Main app with routes
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles & animations
├── images/                         # Product & category images
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── postcss.config.js               # PostCSS configuration
```

## Features

- ✅ Fully responsive design
- ✅ Shopping cart with localStorage persistence
- ✅ Category slider with auto-play
- ✅ Animated product cards
- ✅ Sticky cart icon with mini cart dropdown
- ✅ Toast notifications
- ✅ Smooth animations and transitions
- ✅ React Router for client-side navigation
- ✅ Multiple pages (Home, Cart, Checkout, My Shop, Profile, Promotions)
- ✅ Identical visual output to original HTML/CSS version

## Available Pages

- **Home (/)** - Landing page with featured products and categories
- **My Shop (/my-shop)** - Browse all products with category filters
- **Cart (/cart)** - View and manage shopping cart
- **Checkout (/checkout)** - Complete purchase with shipping and payment forms
- **Profile (/profile)** - User account and order history
- **Promotions (/promotions)** - 50% OFF sale items

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Context API** - State management

## Key Differences from Original

1. **Component-based architecture** - Code is organized into reusable React components
2. **State management** - Uses React Context API instead of global variables
3. **Tailwind CSS** - Utility classes instead of custom CSS
4. **Modern build tools** - Vite for fast development and optimized builds
5. **React Router** - Client-side navigation without page reloads
6. **No jQuery** - Pure React for all interactions

## Notes

- All images are referenced from the `images/` folder (same as original)
- Cart data persists in localStorage
- The app maintains the exact same visual appearance as the original HTML version
- All animations and transitions are preserved
- Navigation is now handled by React Router for smooth page transitions
