import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { state } from '@angular/animations';
import { delay } from 'rxjs';
import { NavMenuDto } from 'src/app/core/dto/nav-menu';
import { NavService } from 'src/app/core/services/nav/nav.service';
import { NgIfContext } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})

export class SideNavBarComponent implements OnInit ,AfterViewInit{
  @ViewChild(MatSidenav)
  sideNav!:MatSidenav;
  navServiceList:NavMenuDto=new NavMenuDto('',[])

haschildren: TemplateRef<NgIfContext<boolean>>;
item: any;


  constructor( private breakpoint :BreakpointObserver,private _navService: NavService ,private _authService:AuthService) {}
  ngAfterViewInit(): void {
    this.breakpoint.observe(['(max-width:800px)']).pipe(delay(1)).subscribe((state:BreakpointState)=>{
      if(state.matches){
        this.sideNav.mode='over';
        this.sideNav.close();
      }else{
        this.sideNav.mode='side';
        this.sideNav.open();
      }
    });
  }


  onItemClicked(){
    if(this.sideNav.mode === 'over'){
      this.sideNav.close();
    }
  }
  onLoggedoutClicked(){}
  ngOnInit(): void {
this._authService.logout();
  }




}
