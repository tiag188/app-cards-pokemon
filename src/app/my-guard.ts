import { CanActivate } from "@angular/router";

class MyGuard implements CanActivate {
    canActivate() {
      return true;
    }
  }