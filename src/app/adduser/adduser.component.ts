import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
userrole ={name:'',email:'',phoneno:0};
  constructor(private crud:CrudService,private router:Router){}

  storedata(){
    this.crud.adduser(this.userrole).subscribe((data:{})=>{
      this.router.navigate(['/list']);
    },
    (error) => {
      console.error('Error adding user:', error);
      // Handle errors here
    });
  }

}
