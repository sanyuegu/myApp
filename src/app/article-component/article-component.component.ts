import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

  @Input()
  private name: number;

  @Output()
  putRingOnIt: EventEmitter<string>;
  private city: string[];
  loading: boolean;
  public data: any;

  constructor(public http: HttpClient) {
    this.putRingOnIt = new EventEmitter();
    this.city = ['杭州', '合肥', '北京', '上海', '重庆'];

    this.makeRequest();
  }

  ngOnInit() {
  }

  liked(): void {
    this.putRingOnIt.emit('gg');
  }

  makeRequest(): void {
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(res => {
        console.log(res);
        this.data = res;
      });
  }

}


