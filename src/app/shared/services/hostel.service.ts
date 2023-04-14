import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../interfaces/hostel.interface';
// import { Room } from 'src/app/hostel/room.model';

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
  
  
      
    return this.httpClient.post<Room>(this.baseApiUrl+'/api/AddRoom',product);
    
}

readdata(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/AddRoom')!.toPromise();
  }


/// gwtroom 
}
