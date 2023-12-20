import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { Libro } from "src/app/Interfaces/libro";
import { LibroService } from "src/Services/libro.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	listaLibros: Libro[] = [];

	constructor(private _libroServicio: LibroService) {}

	obtenerLibros() {
		this._libroServicio.getList().subscribe({
			next: (data) => {
				this.listaLibros = data;
			},
			error: (e) => {},
		});
	}

	ngOnInit(): void {
		this.obtenerLibros();
	}
}
