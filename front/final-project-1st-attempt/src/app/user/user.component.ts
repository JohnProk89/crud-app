import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
    users: any[] = [];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.createUser(this.users).subscribe((data) => {
            this.users = data;
        });
    }
}
