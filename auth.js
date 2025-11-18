// This file contains shared authentication utilities
// Currently, authentication logic is embedded in the HTML files
// You can extract common functions here if needed

import { auth } from './config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Monitor authentication state
export function initAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (callback) {
            callback(user);
        }
    });
}

// Sign out function
export async function logout() {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error('Error signing out:', error);
        return false;
    }
}

