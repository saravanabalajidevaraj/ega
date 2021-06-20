import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from '../user-rest.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit  {
  userList: Array<object> = [];
dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject<any>();
  constructor(private route: ActivatedRoute, private userRest: UserRestService, private router: Router,private http: HttpClient) { }

  ngOnInit() {

  // this.dtOptions = {
   //   pagingType: 'full_numbers',
   //   pageLength: 2,
   //    serverSide: true,
   //   processing: true,
    //  order: [[ 1, "desc" ]],



  //  };

  ///  this.userRest.getUsers().subscribe(data => {
  //    this.userList = data;
  //    console.log(data);
  //    this.dtTrigger.next();
  //  });

      
      //  this.userRest.getUsers().subscribe((response) => {
    //  this.userList = response.user;
     // this.dtTrigger.next();
   // })
//
   //  this.http.get('http://localhost/ega/laravel/public/api/user-list')
    //  .subscribe(userList=> {
      //  this.userList = data;
      //  console.log(userList);
      //   this.dtTrigger.next();
   // })


  


  // this.userRest.getUsers().subscribe(data => {
   //   this.userList = data;
   //   this.dtTrigger.next();
  //  });
  
      

    this.userRest.getUsers().subscribe(
     (response) => { 
    console.log(this.userList = response.user); 
    this.userList = response.user;
        this.userList = response.user;
        //console.log(this.userList);
      //this.dtTrigger.next();


     },
   (error) => { console.log(error) }

    );
  }

  deleteUser(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.userRest.deleteUser(id).subscribe(
        (response) => console.log(response),
       
        (error) => console.log(error)

      );
         this.router.navigateByUrl('maps', {skipLocationChange: true}).then(()=>
      this.router.navigate(['users']));
        
    }
  }

  editUser(id: number) {
    this.router.navigate(['users/edit',id]);
  }
 // OnDestroy(): void {
    // Do not forget to unsubscribe the event
  //  this.dtTrigger.unsubscribe();
  //}
}