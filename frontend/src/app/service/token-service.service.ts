import { Injectable } from "@angular/core"

@Injectable({ providedIn: "root" })
export class TokenStorageService {
    constructor() {}

    signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem("SESSION");
        window.sessionStorage.setItem("SESSION", token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem("SESSION");
    }

    public getUsername(): string | null {
        const user = window.sessionStorage.getItem("USER");
        if (user != null) {
            const userObject = JSON.parse(user);
            return userObject.username;
        }
        return null;
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem("USER");
        window.sessionStorage.setItem("USER", JSON.stringify(user));
    }
}