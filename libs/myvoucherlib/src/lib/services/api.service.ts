import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private baseUrl = 'https://api.jsonbin.io/v3';
	private headers = {
		'X-Master-Key': '$2b$10$5eRbA9CLdvKK/tsB5BCKle8W9Hi1sAkzEUwFpobWnEbg8bPiY2BK6',
	};

	constructor(private http: HttpClient) {}

	loadVenues(): Observable<any> {
		return this.http.get(`${this.baseUrl}/b/631aee46a1610e63862444c0`, { headers: this.headers });
	}

	purchaseVoucher(): Observable<any> {
		return this.http.get(`${this.baseUrl}/b/6311b2fde13e6063dc979a31`, { headers: this.headers });
	}
}

