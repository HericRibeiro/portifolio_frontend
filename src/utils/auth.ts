const TOKEN_KEY = "auth_token";
const EXPIRES_KEY = "auth_expires";

export function saveToken(token: string, hours = 2) {
    const expireAt = Date.now() + hours * 60 * 60 * 1000; 
    
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EXPIRES_KEY, expireAt.toString());
}

export function getToken(): string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    const expires = localStorage.getItem(EXPIRES_KEY);

    if (!token || !expires) return null;

    if (Date.now() > Number(expires)) {
        clearAuth();
        return null;
    }

    return token;
}

export function clearAuth() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_KEY);
}

export function isAuthenticated(): boolean {
    return !!getToken();
}