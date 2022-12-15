import { Component,OnInit} from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {

  constructor(private fb:FormBuilder){

  }
  ngOnInit():void{

  }


  createAccountForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required, Validators.maxLength(10)]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })
}
