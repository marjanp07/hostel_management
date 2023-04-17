import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room, asset, vacate } from '../interfaces/hostel.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
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
  
  
      
    return this.httpClient.post<vacate>(this.baseApiUrl+'api/vacates',product);
    
}

readdata(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/AddRooms');
  }


readvacatedata(){
  
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/vacates');
  }

postassetdata(product: asset):Observable<asset>{

  console.log(product);


  
return this.httpClient.post<asset>(this.baseApiUrl+'api/vacates',product);

}















saveRoom(formDatas:any,image:any)
{
  let formData = new FormData();
  console.log(formDatas.Room_name)
  formData.append('Room_name', formDatas.Room_name);
  formData.append('Block_name', formDatas.Block_name);
  formData.append('Floor', formDatas.Floor);
  formData.append('Total_space', formDatas.Total_space);
  formData.append('Available_space', formDatas.Available_space);
  formData.append('photo', image);
  return this.httpClient.post(this.baseApiUrl + "api/AddRooms", formData)
      .pipe(map(data => {})).subscribe(result => {
        return result;
      })
}
}
