import {Component, OnInit} from '@angular/core';
import {Note} from '../../core/note';
import {DataService} from '../../core/data.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  public dataSource = new NoteDataSource(this.dataService);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
}


export class NoteDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Note[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
