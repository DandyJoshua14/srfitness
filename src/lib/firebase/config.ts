// This file is intentionally modified to prevent Firebase SDKs from being bundled,
// as they were causing client-side chunk loading errors.
// The application's authentication features are currently disabled.

// Exporting null to satisfy imports in other files that might still exist.
export const auth = null;
export const app = null;
