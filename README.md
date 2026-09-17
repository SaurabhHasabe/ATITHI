# 🏡 ATITHI

A full-stack accommodation listing platform inspired by Airbnb, built with the MERN ecosystem (specifically Node, Express, MongoDB, and EJS). ATITHI connects hosts and travelers, allowing users to browse, create, edit, manage property listings, and share their experiences through reviews.

---

## 🚀 Features

- **🔐 Secure Authentication:** User signup, login, and logout functionalities using Passport.js.
- **🛡️ Authorization:** Route protection and role-based permissions (only owners can edit/delete their listings or reviews).
- **🏡 Listing Management (CRUD):** Create, read, update, and delete property listings seamlessly.
- **⭐ Reviews & Ratings:** Users can leave authentic reviews and ratings for the properties they've visited.
- **🔔 Interactive UI Feedback:** Flash messages to notify users about success and error events.
- **✅ Robust Validation:** Server-side validation using Joi and database-level constraints using Mongoose.
- **🎨 Responsive Design:** Clean and responsive user interface built with Bootstrap and EJS templating.

---

## 🛠️ Tech Stack

**Frontend**
- HTML5 & CSS3
- Bootstrap 5
- EJS (Embedded JavaScript Templates)
- EJS Mate (Layouts & Partials)

**Backend**
- Node.js
- Express.js
- Express Session & Connect-Flash (State & Messaging)

**Database**
- MongoDB
- Mongoose (ODM & Relational mapping for Users, Listings, and Reviews)

**Authentication & Validation**
- Passport.js (Local Strategy, passport-local-mongoose)
- Joi (Schema Description & Data Validation)

---

## 📂 Project Structure

```text
ATITHI/
├── models/         # Mongoose schemas (Listing, Review, User)
├── routes/         # Express routers (Listings, Reviews, Users)
├── views/          # EJS templates & layouts
│   ├── includes/   # Navbar, Footer, Flash messages
│   ├── layouts/    # Boilerplate wrapper
│   ├── listings/   # Listing CRUD templates
│   └── users/      # Authentication templates
├── public/         # Static assets (CSS, JS, Images)
├── utils/          # Error handling & async wrappers
├── middleware.js   # Auth and validation middlewares
├── schema.js       # Joi validation schemas
├── app.js          # Application entry point
└── package.json    # Project metadata & dependencies
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saurya1729/ATITHI.git
   cd ATITHI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   Ensure you have [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally on port `27017` (or update the `MONGO_URL` in `app.js` with your cloud database URI).

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and visit:
   ```text
   http://localhost:8080/listings
   ```

---

## 📸 Preview

*(Screenshots and demo GIFs will be added soon.)*

---

## 🎯 Learning Outcomes

Building ATITHI helped solidify concepts in:
- **MVC Architecture:** Structuring scalable applications.
- **Authentication pipeline:** Managing cookies, sessions, and secure access with Passport.
- **Relational Data Mapping:** Establishing connections between Users, Listings, and Reviews in MongoDB.
- **Error Handling:** Centralizing error catching and displaying intuitive developer & user error pages.
- **Express Middleware:** Writing custom middlewares for route authentication and data validation.

---

## 🔮 Future Improvements

- [ ] **Image Uploads:** Migrate local static images to Cloudinary.
- [ ] **Interactive Maps:** Integrate Mapbox for exact property locations.
- [ ] **Search & Filters:** Enable querying by location, price, and category.
- [ ] **Booking System:** Allow users to book dates and integrate a payment gateway.

---

## 👨💻 Author

**Saurabh Hasabe**

- GitHub: [SaurabhHasabe](https://github.com/SaurabhHasabe)

---

## 📄 License

This project is developed for learning purposes and is licensed under the MIT License.
