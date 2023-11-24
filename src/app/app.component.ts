import { Component ,OnInit} from '@angular/core';
import { Movies } from './MoviesInterface';
// import{Movies} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';

constructor(){}
firstName:string='Sarah'
lastname:string="fawzy"

msg:string="new msg"

btn:boolean=true
path:string="../assets/images/large-image.jpg"

value:string=''
movie:Movies[]=[
  {
    title:"aaa",
    actor:"actor1",
    year:2010
  },
  {
    title:"bbb",
    actor:"actor2",
    year:2012
  },
  {
    title:'ccc',
    actor:'actor3',
    year:2013}

]

num:number=0
val:boolean=false
onKeyUp($event:any){
  console.log($event)
  console.log($event.target.value)
}
count:number=10
countDown($event:any){
if($event.keyCode===32){
  this.count--
}
}

ngOnInit():void{}

}
