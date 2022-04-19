import { ServersService } from './../servers.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

interface Server {
  id: number,
  name: string,
  status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private ServersService: ServersService) {};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> {
    return this.ServersService.getServer(+route.params['id']);
  }

}
