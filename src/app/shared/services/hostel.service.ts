import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Room, asset, leave, outPass, vacate } from '../interfaces/hostel.interface';
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


  AddVacate(product: vacate):Observable<vacate>{

      console.log(product);
  
  
      
    return this.httpClient.post<vacate>(this.baseApiUrl+'api/vacates',product);
    
}

AddRooms(product: Room):Observable<Room>{

  console.log(product);


  
return this.httpClient.post<Room>(this.baseApiUrl+'api/AddRooms',product);

}


readdata(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/AddRooms');
  }

readdata1(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<vacate[]>(this.baseApiUrl+'api/vacates');
  }



postassetdata(product: asset):Observable<asset>{

  console.log(product);


  
return this.httpClient.post<asset>(this.baseApiUrl+'api/Assets',product);

}

postOutPass(product: outPass):Observable<outPass>{

  console.log(product);


  
return this.httpClient.post<outPass>(this.baseApiUrl+'api/outPasses',product);

}

getOutPass(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<outPass[]>(this.baseApiUrl+'api/outPasses');
  }

readOutPass(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/outPasses/'+id);
  }



updateOutPass(id:number,data:outPass){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/outPasses/${id}`,data);
   
 }


 updatevacate(id:number,data:vacate){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/vacates/${id}`,data);
   
 }

 updateAddRoom(id:number,data:Room){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/AddRooms/${id}`,data);
   
 }




getasset(){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/Assets');
  }



getasset1(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/Assets/'+id);
  }


  assetupdate(id:number,data:asset){
    console.log(id)
    console.log(data)
     return this.httpClient.put<any>(this.baseApiUrl+'/api/Assets/'+id,data);
     
   }







postleave(product: leave):Observable<leave>{

  console.log(product);


  
return this.httpClient.post<leave>(this.baseApiUrl+'api/vacates',product);

}






getleave(){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/Assets');
  }





getleave1(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/Assets/'+id);
  }





 leaveupdate(id:number,data:leave){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/vacates/${id}`,data);
   
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


//////////////////// Read ///////////////////////////

///// read vacate data

readvacatedata(){
  
  
  return this.httpClient.get<vacate[]>(this.baseApiUrl+'api/vacates');
  }

/////// read room data

readroomdata(){
  
  
  return this.httpClient.get<Room[]>(this.baseApiUrl+'api/AddRooms');
  }





/////////////////////   delete   ///////////////////////////


//// outpass delete


confirmoutPassDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/outPasses',{
    params:{
      id
    }
  });
  }



//// vacate delete



confirmVacateDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/vacates',{
    params:{
      id
    }
  });
  }



////// Add Room Delete

confirmAddRoomDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/AddRooms',{
    params:{
      id
    }
  });
  }









}