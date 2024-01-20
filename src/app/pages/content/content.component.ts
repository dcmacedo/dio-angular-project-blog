import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCover: string = "https://site-porque.s3.amazonaws.com/103885969_m.jpg"
  @Input()
  contentTitle: string = "MINHA NOTICIA"
  @Input()
  contentDescription: string = "Olá Mundo!"
}
