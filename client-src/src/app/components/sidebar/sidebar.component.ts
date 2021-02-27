import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  showSidebar:boolean = true;

  ngOnInit() {
  }

  toogleNav() {
    console.log("Toogle that nav!");
    this.showSidebar = !this.showSidebar;
  }

}

/*
<script>
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft= "50px";
  }
</script>
*/