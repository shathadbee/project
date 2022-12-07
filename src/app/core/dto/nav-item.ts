export class NavItemDto{
  displayName:string;
  route:string;
  icon:string;
  children!:NavItemDto[];

constructor (displayName:string,
  route:string,
  icon:string,
  children?:NavItemDto[]

){
 this.displayName=displayName;
 this.icon=icon;
 this.route=route;
 this.children=children? children:[];
}
}
