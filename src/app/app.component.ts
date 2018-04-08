import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  casa = undefined;

  constructor(
    private http: HttpClient) { }

  //   getConfig() {
  //     return this.http.get('http://localhost:8020/api/aluno');
  //   }

  // requisitionBack(): void{
  //   console.log("Requisicao feita para o back end")
  //   this.getConfig().subscribe(
  //     res => console.log(res)
  //   )
  // }

  // mostraData(): void{
  //   console.log(this.casa)
  // }
}

// <script>
// $('#toggleNavPosition').click(function () {
//   $('body').toggleClass('fixed-nav');
//   $('nav').toggleClass('fixed-top static-top');
// });

// </script>
// <!-- Toggle between dark and light navbar-->
// <script>
// $('#toggleNavColor').click(function () {
//   $('nav').toggleClass('navbar-dark navbar-light');
//   $('nav').toggleClass('bg-dark bg-light');
//   $('body').toggleClass('bg-dark bg-light');
// });

// </script>
