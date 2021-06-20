import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from '../user-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, public userRest: UserRestService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'confirm_password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'gender': new FormControl(null, []),
      'dob': new FormControl(null, []),

    'mobile_number': new FormControl(null, []),
    'address': new FormControl(null, []), 
    'maritalstatus': new FormControl(null, []),
    'nationality': new FormControl(null, []),
    'staffid': new FormControl(null, []),
    'designation': new FormControl(null, []),
    'pwmgrade': new FormControl(null, []),
    'deploymentgrade': new FormControl(null, []),  
    'JoiningDate': new FormControl(null, []),
    'confirmationdate': new FormControl(null, []),
    'wp_issue': new FormControl(null, []),
    'wp_expiry': new FormControl(null, []),
    'bank_account': new FormControl(null, []),
    'course': new FormControl(null, []),
    'username': new FormControl(null, []),

    'status': new FormControl(null, []),
    'app_role': new FormControl(null, []),

    'profile': new FormControl(null, []),
    'employment_contract': new FormControl(null, []),
    'uniform_issue': new FormControl(null, []),
    'nok': new FormControl(null, []),
    'notification_date': new FormControl(null, []),
    'notification-cancel': new FormControl(null, []),

    'registeration_date': new FormControl(null, []),
    'termination_date': new FormControl(null, []),
      

    })
  }

  get name() { return this.registerForm.get('name'); }

  get gender() { return this.registerForm.get('gender'); }

  get dob() { return this.registerForm.get('dob'); }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('confirm_password'); } 


  get mobile_number() { return this.registerForm.get('mobile_number'); }
  get address() { return this.registerForm.get('address'); }
  get maritalstatus() { return this.registerForm.get('maritalstatus'); }
  get nationality() { return this.registerForm.get('nationality'); }
  get staffid() { return this.registerForm.get('staffid'); }
  get designation() { return this.registerForm.get('designation'); } 
  get pwmgrade() { return this.registerForm.get('pwmgrade'); }
  get deploymentgrade() { return this.registerForm.get('deploymentgrade'); }
  get JoiningDate() { return this.registerForm.get('JoiningDate'); }
  get confirmationdate() { return this.registerForm.get('confirmationdate'); }
  get wp_expiry() { return this.registerForm.get('wp_expiry'); }
    get wp_issue() { return this.registerForm.get('wp_issue'); }
  get bank_account() { return this.registerForm.get('bank_account'); }
  get course() { return this.registerForm.get('course'); }

  get username() { return this.registerForm.get('username'); }
  get status() { return this.registerForm.get('status'); }
  get app_role() { return this.registerForm.get('app_role'); }
  get profile() { return this.registerForm.get('profile'); }
  get employment_contract() { return this.registerForm.get('employment_contract'); }
  get uniform_issue() { return this.registerForm.get('uniform_issue'); } 
  get nok() { return this.registerForm.get('nok'); }
  get notification_date() { return this.registerForm.get('notification_date'); }
  get notification_cancel() { return this.registerForm.get('notification_cancel'); }
  get registeration_date() { return this.registerForm.get('registeration_date'); }
  get termination_date() { return this.registerForm.get('termination_date'); }



  registerUser(){
     console.log(this.registerForm);
      this.userRest.storeUser(this.registerForm).subscribe(
        response => {
          console.log(response),

           this.router.navigateByUrl('maps', {skipLocationChange: true}).then(()=>
      this.router.navigate(['users']));
       
          
        },
        error =>{
          this.serverErrors = error.error.errors
        } 
      );
  }
  
}
