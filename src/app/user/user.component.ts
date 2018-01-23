import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
    })
  }

  @Input()
  userItem:[{
  	id:number,
  	name:string
  }]

}
