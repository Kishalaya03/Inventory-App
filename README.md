# Inventory-App

# 📚 Inventory Management System

A modern, feature-rich inventory management application built with Node.js, Express.js, and EJS. Perfect for managing book inventories with a sleek, ultra-modern UI design.

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login**: Secure user authentication system
- **Session Management**: Express sessions for user state management
- **Route Protection**: Middleware-based authentication for protected routes
- **Cookie Management**: Last visit tracking with cookies

### 📦 Product Management
- **CRUD Operations**: Create, Read, Update, Delete products
- **Product Search**: Advanced search functionality by name and description
- **Image Upload**: File upload support with Multer middleware
- **Data Validation**: Server-side validation using express-validator

### 🎨 Modern UI/UX
- **Ultra-Modern Design**: Next-generation dark theme with glassmorphism
- **Responsive Layout**: Mobile-first responsive design
- **Animated Components**: Smooth animations and transitions
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

### 🛠️ Technical Features
- **MVC Architecture**: Clean separation of concerns
- **Middleware System**: Custom middleware for authentication, validation, and file uploads
- **In-Memory Data**: Simple data storage without database dependency
- **Real-time Feedback**: Interactive alerts and notifications

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd inventory-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create required directories**
   ```bash
   mkdir -p public/images
   ```

4. **Start the application**
   ```bash
   node index.js
   ```

5. **Open your browser**
   Navigate to `http://localhost:3400`

## 📁 Project Structure

```
inventory-app/
├── src/
│   ├── controller/
│   │   ├── product.controller.js    # Product CRUD operations
│   │   └── user.controller.js       # User authentication
│   ├── models/
│   │   ├── product.model.js         # Product data model
│   │   └── user.model.js           # User data model
│   ├── middlewares/
│   │   ├── auth.middleware.js       # Authentication middleware
│   │   ├── file-upload.middleware.js # File upload handling
│   │   ├── lastVisit.middleware.js  # Visit tracking
│   │   └── validation.middleware.js # Input validation
│   └── views/                       # EJS templates
├── public/
│   ├── images/                      # Uploaded product images
│   ├── main.css                     # Ultra-modern styling
│   └── main.js                      # Client-side JavaScript
├── index.js                         # Application entry point
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
```

## 🎯 Usage Guide

### Getting Started

1. **Register a new account**
   - Navigate to `/register`
   - Fill in your details (name, email, password)
   - Submit the registration form

2. **Login to your account**
   - Go to `/login`
   - Enter your credentials
   - Access the main inventory dashboard

### Managing Products

#### Adding New Products
1. Click "Add New Product" or navigate to `/new`
2. Fill in the product details:
   - **Name**: Product title
   - **Description**: Detailed description
   - **Price**: Product price (must be positive)
   - **Image**: Upload product image
3. Submit the form to add the product

#### Viewing Products
- Main dashboard displays all products in a modern table format
- Each product shows: ID, Image, Name, Description, Price, and Actions

#### Updating Products
1. Click "Edit" button on any product
2. Modify the product details
3. Save changes to update the product

#### Deleting Products
1. Click "Delete" button on any product
2. Confirm the deletion in the popup
3. Product will be removed from inventory

#### Searching Products
1. Use the search bar in the navigation
2. Enter keywords to search by name or description
3. View filtered results on the search results page

### Session Management
- **Last Visit**: Tracks and displays your last visit time
- **Logout**: Safely ends your session and clears cookies

## 🛠️ API Endpoints

### Authentication Routes
- `GET /register` - Registration page
- `POST /register` - Process registration
- `GET /login` - Login page
- `POST /login` - Process login
- `GET /logout` - Logout user

### Product Routes
- `GET /` - View all products (protected)
- `GET /new` - Add product form (protected)
- `POST /` - Create new product (protected)
- `GET /update-product/:id` - Edit product form (protected)
- `POST /update-product` - Update product (protected)
- `POST /delete-product/:id` - Delete product (protected)
- `POST /search` - Search products (protected)

## 🔧 Configuration

### Environment Variables
Create a `.env` file (optional) for configuration:
```env
PORT=3400
SESSION_SECRET=your-secret-key
```

### File Upload Configuration
- **Upload Directory**: `public/images/`
- **Supported Formats**: Common image formats (jpg, png, gif, etc.)
- **File Naming**: Timestamp + original filename

### Session Configuration
- **Secret**: Configurable session secret
- **Cookie Settings**: Secure: false (for development)
- **Session Store**: Memory (default)

## 📦 Dependencies

### Core Dependencies
- **express**: Web framework
- **ejs**: Template engine
- **express-ejs-layouts**: Layout support for EJS
- **express-session**: Session management
- **express-validator**: Input validation
- **multer**: File upload handling
- **cookie-parser**: Cookie parsing

### Development Tools
- **nodemon**: Development server (recommended)

## 🎨 Styling & Design

### Design System
- **Color Palette**: Modern dark theme with gradient accents
- **Typography**: Space Grotesk, Inter, JetBrains Mono fonts
- **Effects**: Glassmorphism, animations, hover effects
- **Layout**: Responsive grid system with Bootstrap-like utilities

### Key Design Features
- **Gradient Backgrounds**: Dynamic mesh gradients
- **Interactive Elements**: Smooth transitions and hover effects
- **Modern Cards**: Glass effect containers with subtle shadows
- **Animated Components**: Loading states, progress bars, alerts

## 🚀 Advanced Features

### File Upload System
- Automatic file naming with timestamps
- Image validation and processing
- Organized storage in public directory

### Search Functionality
- Full-text search across product names and descriptions
- Case-insensitive matching
- Real-time results display

### Validation System
- Server-side input validation
- Custom validation rules
- User-friendly error messages

### Security Features
- Session-based authentication
- Protected routes with middleware
- Input sanitization and validation

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   Error: listen EADDRINUSE :::3400
   ```
   **Solution**: Change the port in `index.js` or kill the process using port 3400

2. **File Upload Errors**
   ```bash
   Error: ENOENT: no such file or directory
   ```
   **Solution**: Ensure `public/images/` directory exists

3. **Session Issues**
   ```bash
   Cannot set headers after they are sent
   ```
   **Solution**: Check for multiple response calls in controllers

### Performance Tips
- Regularly clear uploaded images to save disk space
- Consider implementing pagination for large product lists
- Use compression middleware for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 👤 Author

**Kishalaya Chattopadhyay**
- Email: [Your Email]
- GitHub: [Your GitHub]

## 🔮 Future Enhancements

### Planned Features
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User roles and permissions
- [ ] Product categories and tags
- [ ] Advanced filtering options
- [ ] Export functionality (CSV/PDF)
- [ ] API endpoints for mobile app
- [ ] Real-time notifications
- [ ] Inventory alerts and warnings

### Technical Improvements
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Performance monitoring
- [ ] Error logging system
- [ ] API documentation with Swagger

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed description
4. Include error logs and steps to reproduce

---

**Made with ❤️ using Node.js and modern web technologies**
