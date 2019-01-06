import { Component, OnInit, HostBinding } from '@angular/core';
import { splitClasses } from '@angular/compiler';
import { Game } from 'src/app/models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  game:Game={
    id:0,
    title:'',
    description:'',
    image:'',
    created_at:new Date()
  };

  constructor(private gameService:GamesService) { }

  ngOnInit() {
  }

  saveNewGame(){
    delete this.game.id;
    delete this.game.created_at;
    console.log(this.game);
    this.gameService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res)
      },
      err=>console.error(err)
    );
  }
}
