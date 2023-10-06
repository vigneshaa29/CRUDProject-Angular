import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{
uid=this.actroute.snapshot.params['id'];
users:any=[];

  constructor(private actroute:ActivatedRoute,private router:Router,private crud:CrudService){}
  
ngOnInit(): void {
  this.crud.getSingleUser(this.uid).subscribe((data:{})=>{
    this.users=data;
}
  );
}

updateuser(id:any,data:any) {
  this.crud.edituser(id,data).subscribe(res =>{
    this.router.navigate(['/list']);
  });
}
}
