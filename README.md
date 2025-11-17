# FitProgress — Mobile (Expo) — Starter (Enhanced)

This enhanced starter includes:
- SQLite local persistence (expo-sqlite) with helper functions in `src/services/db.ts`.
- Backend food search integration via `src/services/api.ts` (points to http://10.0.2.2:4000 by default).
- Firebase placeholders for Auth + Firestore sync (`src/firebaseConfig.ts`) — you must supply your own config to enable.
- Weekly analytics screen with charts (`WeeklyAnalyticsScreen.tsx`) that reads logs from SQLite.
- Auth screen placeholder and automatic DB init in `App.tsx`.

## Quick steps to run (locally)
1. Install Node.js (14+) and Yarn or npm.
2. In the `mobile` folder run:
   ```
   npm install
   npx expo start
   ```
3. Start the backend server:
   ```
   cd ../backend
   npm install
   npm start
   ```
4. For Android emulator: default backend URL is `http://10.0.2.2:4000`. Replace `BACKEND_BASE` in `src/services/api.ts` if using a different environment or Expo tunnel.
5. To enable Firebase Auth / Firestore:
   - Create a Firebase project and add web app credentials.
   - Update `src/firebaseConfig.ts` with your project's config.
   - Uncomment Firestore sync code in `src/services/api.ts` and implement per-user collections.

## Notes & Next steps
- The SQLite schema is minimal; extend it to store structured meals and workouts.
- The backend is an in-memory MVP; replace with MongoDB or Firestore for production.
