import { Component } from "@angular/core";
import { UserProfile } from "./user-profile/user-profile";
import { CommonModule } from "@angular/common";

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule, UserProfile],
  templateUrl:'./app.html',
  styleUrl:'./app.css'
})

export class App{

}