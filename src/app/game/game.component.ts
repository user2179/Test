import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  template: `
    
 <nav>
   <h2><a class="game" routerLink="/wordle">Wordle</a></h2>
   <h2><a class="game" routerLink="/sudoku">Sudoku</a></h2>
  <h2> <a class="game" routerLink="/tictac">Tic tac</a></h2>
</nav>
    
  `,
  styles: [`
  .game{ 
	background-color :cyan;
	color:coral;
    border: 2px solid red;
    border-radius: 5px;
  }`
  ]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
