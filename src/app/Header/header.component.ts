import { Component } from "@angular/core";
import { TopMenu } from "./top-menu/top-menu";
import { MainMenu } from "./main-menu/main-menu";
@Component({
    selector:'app-header',
   // template :'<h1>hello</h1>',
   imports:[TopMenu,MainMenu],
    templateUrl:'./header.component.html',
   // styles:['a{text-decoration: none; margin:0 10px;}','button{padding: 10px 20px;}','.ekart--header{width:100px; height: 70px;}']
    styleUrls:['./header.component.css']
}    
)
export class HeaderComponent{

}