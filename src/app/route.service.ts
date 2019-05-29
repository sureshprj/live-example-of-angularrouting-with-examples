import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class Auth implements CanActivate {
  canActivate(Act:ActivatedRouteSnapshot,route:RouterStateSnapshot){
    console.log("Permission Given");
    return false;
  }
}
