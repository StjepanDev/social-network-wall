import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public userService:UserService, private router:Router){

  }

  
  ngOnInit(): void {
    if(this.userService.user === undefined || this.userService.user === null) {
      const str = localStorage.getItem('user');
      if(str) {
      this.userService.user = JSON.parse(str);
    } else {
      this.router.navigate(['/login'])
    }
  }
}

postSchema = {
  username:'',
  imageURL:'',
  text:'',
  likes:[],
  comment:[{
    username:'',
    comment:''
}]
}

}