# UPI System - Deposit & Withdrawal Management

A complete UPI payment management system with user authentication, deposit/withdrawal requests, and admin approval system built with HTML, CSS, JavaScript, Firebase Authentication, and Firestore Database.

## Features

### User Features
- ✅ User Registration (Sign Up)
- ✅ User Login (Sign In)
- ✅ Password Reset (Forgot Password)
- ✅ **Deposit Money** - Submit deposit requests with UTR verification
- ✅ **Withdraw Money** - Request withdrawals via UPI or Bank Transfer
- ✅ **Transaction History** - View all deposits and withdrawals
- ✅ User Session Management
- ✅ Responsive Design
- ✅ Modern UI/UX

### Admin Features
- ✅ **Admin Dashboard** - View all pending requests
- ✅ **Approve/Reject** - Manage deposit and withdrawal requests
- ✅ **Rejection Reasons** - Provide reasons when rejecting requests
- ✅ Real-time updates with Firestore

## Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter your project name
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

### Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **Get Started**
3. Click on **Sign-in method** tab
4. Enable **Email/Password**:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

### Step 2.5: Set Up Firestore Database

**⚠️ IMPORTANT**: You must set up Firestore Database for the deposit/withdrawal features to work!

1. Go to **Firestore Database** in Firebase Console
2. Click **Create database**
3. Start in **test mode** (for development)
4. Choose a location (e.g., `asia-south1` for India)
5. Click **Enable**

**For detailed Firestore setup instructions, see [FIREBASE_DATABASE_SETUP.md](FIREBASE_DATABASE_SETUP.md)**

### Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to "Your apps" section
4. Click the **Web icon** `</>` to add a web app
5. Register your app (give it a nickname if you want)
6. Copy the `firebaseConfig` object

### Step 4: Configure Your Project

1. Open `config.js` in your project
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Step 5: Run Your Application

#### Option A: Using a Local Server (Recommended)

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

#### Option B: Direct File Opening
- Simply open `index.html` in your browser (Note: Some features may not work due to CORS restrictions)

### Step 6: Test the Application

1. Open `http://localhost:8000/index.html` in your browser
2. Click "Sign up" to create a new account
3. Fill in the registration form
4. After signup, you'll be redirected to the user dashboard
5. Try creating a deposit or withdrawal request
6. Open `admin.html` to view and manage requests
7. Sign out and try logging in with your credentials

## File Structure

```
UPI system/
├── index.html                    # Login page
├── signup.html                   # Registration page
├── dashboard.html                # Redirects to user.html
├── user.html                     # User dashboard (deposits/withdrawals)
├── admin.html                    # Admin dashboard (approve/reject requests)
├── styles.css                    # All styling
├── config.js                     # Firebase configuration (Auth + Firestore)
├── auth.js                       # Authentication utilities
├── README.md                     # This file
├── FIREBASE_DATABASE_SETUP.md    # Detailed Firestore setup guide
└── TROUBLESHOOTING.md            # Troubleshooting guide
```

## Security Notes

- Never commit your Firebase config with sensitive data to public repositories
- Consider using environment variables for production
- Firebase automatically handles password hashing and security
- Email verification can be added for additional security

## Customization

- **Colors**: Edit the gradient colors in `styles.css` (lines with `#667eea` and `#764ba2`)
- **Styling**: Modify `styles.css` to match your brand
- **Functionality**: Extend `auth.js` for additional features

## Troubleshooting

### "Firebase: Error (auth/unauthorized-domain)"
- Add your domain to Firebase Console > Authentication > Settings > Authorized domains

### "Firebase: Error (auth/operation-not-allowed)"
- Make sure Email/Password authentication is enabled in Firebase Console

### CORS Errors
- Always use a local server (not file://) to run the application

## How to Use

### For Users:
1. **Sign Up/Login** - Create an account or log in
2. **Deposit Money**:
   - Go to Deposit tab
   - Enter amount
   - Scan admin UPI QR code (provided by admin)
   - Make payment
   - Enter UTR number from payment receipt
   - Submit request
3. **Withdraw Money**:
   - Go to Withdraw tab
   - Enter amount
   - Choose UPI or Bank Transfer
   - Fill in required details
   - Submit request
4. **View History** - Check status of all transactions

### For Admins:
1. **Access Admin Panel** - Navigate to `admin.html`
2. **View Requests** - See all pending deposits and withdrawals
3. **Approve/Reject** - Click buttons to manage requests
4. **Provide Reasons** - When rejecting, enter a reason

## Next Steps

You can extend this system with:
- Email verification
- Social login (Google, Facebook, etc.)
- Admin role-based access control
- Email notifications for approvals/rejections
- QR code generator for admin UPI
- Transaction limits and validations
- User wallet balance tracking

## Support

For Firebase documentation, visit: https://firebase.google.com/docs/auth/web/start

