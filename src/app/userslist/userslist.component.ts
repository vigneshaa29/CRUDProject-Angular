import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  user: any = [];

  constructor( public crud: CrudService) { }

  ngOnInit(): void {
    this.fetchusers();
  }
  fetchusers() {
    this.crud.getuser().subscribe((data: {}) => {
      this.user = data;
    });
  }

  deleteuser(id: any) {
    if (window.confirm('Do you need to delete this user ')) {
      this.crud.deleteUser(id).subscribe((data: any) => {
        this.fetchusers();
      }
      );
    }
  }
}
