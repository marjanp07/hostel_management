import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room, vacate } from '../interfaces/hostel.interface';
import { environment } from 'src/environments/environment';
// import { Room } from 'src/app/hostel/room.model';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  baseApiUrl: string | undefined = environment.baseApiUrl;

  constructor(private httpClient: HttpClient,
    
    ) { 
    }


  createPolicy1(product: vacate):Observable<vacate>{

      console.log(product);
  
  
      
    return this.httpClient.post<vacate>(this.baseApiUrl+'api/Class1',product);
    
}

readdata(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/AddRoom')!.toPromise();
  }


/// gwtroom 
}
