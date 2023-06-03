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

    public saveUser(user: any): void {
        window.sessionStorage.removeItem("USER");
        window.sessionStorage.setItem("USER", JSON.stringify(user));
    }
}