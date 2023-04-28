import { Component } from '@angular/core';

@Component({
  selector: 'app-converte',
  templateUrl: './converte.component.html',
  styleUrls: ['./converte.component.css']
})
export class ConverteComponent {
Real : number =0;
Dolar : number =0;
Euro : number =0;
Libra : number = 0;

Resultado1 : number = 0;
Resultado2 : number = 0;
Resultado3 : number = 0;

Calcular (): void {
this.Resultado1 = this.Real/this.Dolar;
this.Resultado2 = this.Real/this.Euro;
this.Resultado3 = this.Real/this.Libra;
}
}
