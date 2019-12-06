import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseUrl = "http:localhost:5000/api/auth/";

  login(model: any) {
    console.log(this.baseUrl);
    return this.http.post("http:localhost:5000/api/auth/login", model).pipe(
      map((response: any) => {
        console.log(response);
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
}
