import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  testimonios: any[] = [
    {
      titulo: "david-title",
      texto: "david-text"
    },
    {
      titulo: "fonso-title",
      texto: "fonso-text"
    },
    {
      titulo: "juan-title",
      texto: "juan-text"
    },
    {
      titulo: "antonio-title",
      texto: "antonio-text"
    }
  ];

  indiceActual: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prev(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    }
  }

  next(): void {
    if (this.indiceActual < this.testimonios.length - 1) {
      this.indiceActual++;
    }
  }
}
