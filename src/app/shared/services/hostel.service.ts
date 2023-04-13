import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/hostel/room.model';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  baseApiUrl: string | undefined;

  constructor(private httpClient: HttpClient,
    @Inject("BASE_URL") baseUrl:string
    ) { 
      this.baseApiUrl = baseUrl
    }


  createPolicy1(product: Room):Observable<Room>{
      
  console.log(product);
  
      
    return this.httpClient.post<Room>(this.baseApiUrl+'/api/Class1',product);
    
}

/// gwtroom 
}
