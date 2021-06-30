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
      .subscribe(() => {
        console.log('Position added');
      });
  }

  getPosition() {
    console.log('Loaded positions');
    return this.webReqService.get('');
  }

  updatePosition(obj: any, id: string) {
    return this.webReqService
      .patch(`position/${id}`, {
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
      .subscribe((res) => {
        console.log(`Updated position ${id}`);
      });
  }

  deletePosition(id: string) {
    return this.webReqService.delete(`position/${id}`).subscribe(() => {
      console.log(`Deleted position ${id}`);
    });
  }
}
