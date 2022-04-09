import { Component, OnInit } from '@angular/core';
import musics from './../../assets/musicList.json';

interface MusicElement {
  name: string;
  artist: string;
  date_release: string;
  audio_link: string;
  duration: string
}

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  dataSource : MusicElement[] = musics;
  displayedColumns : string[] = ["name", "artist", "date_release", "duration"];
  clickedRows = new Set<MusicElement>();

  constructor() { }

  ngOnInit(): void {
  }

}
