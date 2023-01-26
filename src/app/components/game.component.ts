import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Game } from '../models/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  @Input() pagePerRec = 0;
  currentIndex: number = 0;
  games!: Game[];
  pageNo = 1;

  constructor(private gameSvc: GameService){}

  ngOnChanges(changes: SimpleChanges){
    if(changes["pagePerRec"].currentValue == null)
      this.pagePerRec = 10;
    else
      this.pagePerRec = changes["pagePerRec"].currentValue;
      this.getAllGamesWifPagination();
  }

  ngOnInit(){
    if(this.pagePerRec == null)
      this.pagePerRec = 10;
    this.getAllGamesWifPagination();
  }

  nextPage(){
    this.pageNo++;
    this.currentIndex = this.currentIndex + this.pagePerRec;
    this.getAllGamesWifPagination();
  }

  previousPage(){
    this.pageNo--;
    this.currentIndex = this.currentIndex - this.pagePerRec;
    this.getAllGamesWifPagination();
  }

  private getAllGamesWifPagination(){
    this.gameSvc.getGames(this.pagePerRec, 
      this.currentIndex)
      .subscribe((resp)=>{
        console.log(resp);
        this.games = resp;
      })

  }

}
