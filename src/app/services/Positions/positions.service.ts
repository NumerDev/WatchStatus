import { WebRequestService } from './../WebRequest/web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(private webReqService: WebRequestService) {}

  createPosition(obj: any) {
    return this.webReqService
      .post('addPosition', {
        title: obj.title,
        type: obj.type,
        genre: {
          action: obj.genre.action,
          scifi: obj.genre.scifi,
          romanse: obj.genre.romanse,
          horror: obj.genre.horror,
          drama: obj.genre.drama,
          adventure: obj.genre.adventure,
        },
        season: obj.season,
        episode: obj.episode,
      })
      .subscribe((res: any) => {
        console.log('Position added');
        console.log(res);
      });
  }

  getPosition() {
    return this.webReqService.get('');
  }
}