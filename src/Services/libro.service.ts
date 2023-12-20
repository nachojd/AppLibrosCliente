import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from "src/config";
import { Observable } from "rxjs";
import { Libro } from "../app/Interfaces/libro";

@Injectable({
	providedIn: "root",
})
export class LibroService {
	private endpoint: string = environment.endPoint;
	private apiUrl: string = this.endpoint + "Libro/";

	constructor(private http: HttpClient) {}

	getList(): Observable<Libro[]> {
		return this.http.get<Libro[]>(`${this.apiUrl}Lista`);
	}
}
