import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Block, Room, asset, feeReduction, hostelFee, leave, messFee, outPass, studentregisteration, totelBill, vacate } from '../interfaces/hostel.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { serialize } from 'object-to-formdata';
// import { Room } from 'src/app/hostel/room.model';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  baseApiUrl: string | undefined = environment.baseApiUrl;

  constructor(private httpClient: HttpClient,

  ) {
  }

//d
  AddVacate(product: vacate): Observable<vacate> {

    console.log(product);



    return this.httpClient.post<vacate>(this.baseApiUrl + 'api/vacates', product);

  }

  AddRooms(product: Room): Observable<Room> {

    // console.log(product, photo);
    // const form = GetFormData({
    //   addRoom: product,
      
    // })


    return this.httpClient.post<Room>(this.baseApiUrl + 'api/AddRooms',product);

  }


  readdata() {
    console.log(this.baseApiUrl);

    return this.httpClient.get<Room[]>(this.baseApiUrl + 'api/AddRooms');
  }

  readdata1() {
    console.log(this.baseApiUrl);

    return this.httpClient.get<vacate[]>(this.baseApiUrl + 'api/vacates');
  }










  postOutPass(product: outPass): Observable<outPass> {

    console.log(product);



    return this.httpClient.post<outPass>(this.baseApiUrl + 'api/outPasses', product);

  }

  getOutPass() {
    console.log(this.baseApiUrl);

    return this.httpClient.get<outPass[]>(this.baseApiUrl + 'api/outPasses');
  }

  readOutPass(id: number) {
    return this.httpClient.get<any>(this.baseApiUrl + '/api/outPasses/' + id);
  }




  // GetBlocks(id: number) {
  //   return this.httpClient.get<any>(this.baseApiUrl + '/api/AddRooms/' + id);
  // }



  updateOutPass(id: number, data: outPass) {
    console.log(id)
    console.log(data)
    return this.httpClient.put<any>(this.baseApiUrl + `/api/outPasses/${id}`, data);

  }


  updatevacate(id: number, data: vacate) {
    console.log(id)
    console.log(data)
    return this.httpClient.put<any>(this.baseApiUrl + `/api/vacates/${id}`, data);

  }

  // updateAddRoom(id: number, data: Room, photo: File) {

    // let formData = new FormData();
    // console.log(id)
    // formData.append('Room_number', data.Room_number.toString());
    // formData.append('Block_name', data.Block_name.toString());
    // formData.append('Floor', data.Floor.toString());
    // formData.append('Total_space', data.Total_space.toString());
    // formData.append('Available_space', data.Available_space.toString());
    // formData.append('photo', "");
    // formData.append('FilePath', photo);
    // formData.append('id', "");
    // return this.httpClient.post(this.baseApiUrl + `api/AddRooms/`, formData)
    // .pipe(map(data => {})).subscribe(result => {
    //   return result;
    // })



    updateAddRoom(id: number, data: Room) {
    console.log(id)
    console.log(data)
     return this.httpClient.put<any>(this.baseApiUrl+`/api/AddRooms/${id}`,data);

  }



  postassetdata(product: asset): Observable<asset> {

    console.log(product);



    return this.httpClient.post<asset>(this.baseApiUrl + 'api/Assets', product);

  }


  getasset() {
    return this.httpClient.get<any>(this.baseApiUrl + '/api/Assets');
  }



  getasset1(id: number) {
    return this.httpClient.get<any>(this.baseApiUrl + '/api/Assets/' + id);
  }






  assetupdate(id: number, data: asset) {
    console.log(id)
    console.log(data)
    return this.httpClient.put<any>(this.baseApiUrl + `/api/Assets/${id}`, data);

  }
    //  return this.httpClient.put<any>(this.baseApiUrl+`/api/Assets/${id}`,data);


     
   /////////////////// Blocks

blockupdate(id: number, data: Block) {
    console.log(id)
    console.log(data)
    return this.httpClient.put<any>(this.baseApiUrl + `/api/Blocks/${id}`, data);

  }


  postblockdata(product: Block): Observable<Block> {

    console.log(product);



    return this.httpClient.post<Block>(this.baseApiUrl + 'api/Blocks', product);

  }


  getblock() {
    return this.httpClient.get<any>(this.baseApiUrl + '/api/Blocks');
  }



///// Leave


  postleave(product: leave): Observable<leave> {

    console.log(product);



    return this.httpClient.post<leave>(this.baseApiUrl + 'api/Leaves', product);

  }






  getleave() {
    return this.httpClient.get<any>(this.baseApiUrl + 'api/Leaves');
  }





  getleave1(id: number) {
    return this.httpClient.get<any>(this.baseApiUrl + '/api/Leaves/' + id);
  }





  leaveupdate(id: number, data: leave) {
    console.log(id)
    console.log(data)
    return this.httpClient.put<any>(this.baseApiUrl + `api/Leaves/${id}`, data);

  }







  // saveRoom(formDatas: any, photo: any) {
  //   let formData = new FormData();
  //   console.log(formDatas.Room_name)
  //   formData.append('Room_name', formDatas.Room_name);
  //   formData.append('Block_name', formDatas.Block_name);
  //   formData.append('Floor', formDatas.Floor);
  //   formData.append('Total_space', formDatas.Total_space);
  //   formData.append('Available_space', formDatas.Available_space);
  //   formData.append('photo', photo);
  //   return this.httpClient.post(this.baseApiUrl + "api/AddRooms", formData)
  //     .pipe(map(data => { })).subscribe(result => {
  //       return result;
  //     })
  // }


  //////////////////// Read ///////////////////////////

  ///// read vacate data

  readvacatedata() {


    return this.httpClient.get<vacate[]>(this.baseApiUrl + 'api/vacates');
  }

  /////// read room data

  readroomdata() {


    return this.httpClient.get<Room[]>(this.baseApiUrl + 'api/AddRooms');
  }





  /////////////////////   delete   ///////////////////////////


  //// outpass delete


  confirmoutPassDelete(id: number) {
    console.log(id)
    return this.httpClient.delete<any>(this.baseApiUrl + '/api/outPasses', {
      params: {
        id
      }
    });
  }



  //// vacate delete



  confirmVacateDelete(id: number) {
    console.log(id)
    return this.httpClient.delete<any>(this.baseApiUrl + '/api/vacates', {
      params: {
        id
      }
    });
  }


  //messfee


  postmessfee(product: messFee): Observable<messFee> {

    console.log(product);



    return this.httpClient.post<messFee>(this.baseApiUrl + 'api/MessFees', product);

  }



getmessfee(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<messFee[]>(this.baseApiUrl+'api/MessFees');
  }

readmessfee(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'api/MessFees/'+id);
  }



updatemessfee(id:number,data:messFee){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`api/MessFees/${id}`,data);
   
 }


 confirmMessFeeDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/MessFees',{
    params:{
      id
    }
  });
  }



//hostelfee



posthostelfee(product: hostelFee):Observable<hostelFee>{

  console.log(product);


  
return this.httpClient.post<hostelFee>(this.baseApiUrl+'api/outPasses',product);

}

gethostelfee(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<hostelFee[]>(this.baseApiUrl+'api/outPasses');
  }

readhostelfee(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/outPasses/'+id);
  }



updatehostelfee(id:number,data:hostelFee){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/outPasses/${id}`,data);
   
 }


//totelbill



posttotelbill(product: totelBill):Observable<totelBill>{

  console.log(product);


  
return this.httpClient.post<totelBill>(this.baseApiUrl+'api/outPasses',product);

}

gettotelbill(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<totelBill[]>(this.baseApiUrl+'api/outPasses');
  }

readtotelbill(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/outPasses/'+id);
  }



updatetotelbill(id:number,data:totelBill){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/outPasses/${id}`,data);
   
 }


 //fee reduction



postfeeReduct(product: feeReduction):Observable<feeReduction>{

  console.log(product);


  
return this.httpClient.post<feeReduction>(this.baseApiUrl+'api/MessReductions',product);

}

getfeeReduct(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<feeReduction[]>(this.baseApiUrl+'api/MessReductions');
  }

feeReduct(id:number){
  return this.httpClient.get<any>(this.baseApiUrl+'/api/MessReductions/'+id);
  }



updatefeeReduct(id:number,data:feeReduction){
  console.log(id)
  console.log(data)
   return this.httpClient.put<any>(this.baseApiUrl+`/api/MessReductions/${id}`,data);
   
 }

 confirmMessFeeReductionDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/MessReductions',{
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


///// block delete


confirmblockDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/Blocks',{
    params:{
      id
    }
  });
  }


///asset delete


confirmAssetDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/Assets',{
    params:{
      id
    }
  });
  }


////// leave Delete

confirmLeaveDelete(id:number){
  console.log(id)
  return this.httpClient.delete<any>(this.baseApiUrl+'/api/Leaves',{
    params:{
      id
    }
  });
  }




/////////////// Allot Room

GetAllotRoom(){
    return this.httpClient.get<any>(this.baseApiUrl+'/api/AddRooms');
  }




//regform

readstudentdata(){
  console.log(this.baseApiUrl);
  
  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl+'api/outPasses');
  }


//admission entry post



postadmissionentry(product: Partial<studentregisteration>):Observable<studentregisteration>{

  console.log(product);


  
return this.httpClient.post<studentregisteration>(this.baseApiUrl+'api/Admissionentries',product);

}


readadmissionentry() {


  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl + 'api/Admissionentries');
}


GetAdmissionentryByBlockName(Block_name:string) {
  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl + 'api/Admissionentries?Block_name='+ Block_name );
}

Getname(reg_no:number) {
  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl + 'api/Admissionentries?reg_no='+ reg_no );
}

Getoutpassname(reg_no:number){
  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl + 'api/Admissionentries?reg_no='+ reg_no );
}



/////////// Attendance

getAttendance(){
  console.log(this.baseApiUrl);

  return this.httpClient.get<studentregisteration[]>(this.baseApiUrl + 'api/Admissionentries');
}


markAttendance(studentList: studentregisteration[]){
  console.log(this.baseApiUrl);

  return this.httpClient.post<number>(this.baseApiUrl + 'api/Admissionentries',studentList);
}













}

 function GetFormData(data: any) {
  return serialize(data, {
    indices: true
  })
}