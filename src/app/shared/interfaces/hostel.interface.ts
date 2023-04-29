export interface InstitutionMasterModel {
  InstitutionID: number;
  InstitutionName: string;
  Address1: string;
  Address2: string;
  Address3: string;
  DistrictID: number;
  ProvinceID: number;
  CountryNationalityID: number;
  Url: string;
  SectorID: number;
  ChapterType: number;
  StartDate: Date | string;
  Thaluk: string;
  PostOfficeID: number;
  PostOfficeDistance: string;
  TelegraphOffice: string;
  TelegraphOfficeDistance: string;
  RailwayStation: string;
  RailwayStationDistance: string;
  ManagementAddress: string;
  SortOrder: number;
  Remarks: string;
  University_ExamBoardID: number;
  Emblem: string;
  Email: string;
  LastLoginAcademicYearID: number;
  Format: string;
  InstitutionCode: string;
  UserID: string;
  District: string;
  Province: string;
  CountyNationality: string;
}

// Add Room
export interface Room{
  id:number
  Room_number:number
  Block_name:string
  Floor:string
  Total_space:number
  Available_space:number
  // photo:string

}

//room vacate
export interface vacate{
  id:number
  hosteler_name:string
  reg_no:number
  vacating_date:string
  vacating_reason:string
}

  //asset

  export interface asset{
  id:number
  // Asset_No:number
  Asset_name:string
  Asset_type:string
  Description:string
}


  //Out pass

  export interface outPass{
    id:number
    reg_no:number
    hosteler_name:string
    Contact_no:number
    date_of_outpass:string
    time_of_departure:string
    return_time:string
    reason_outpass:string
  }

  //LEAV

  export interface leave{
    id:number
    hosteler_name:string
    Application_date:string
    Leave_from:string
    Leave_till:string
    Reason:string
    Visiting_person:string
    Guardian_details:string
  }


  export interface DeleteDialogModel {
    title?: string | undefined;
    description?: string | undefined;
    type: string ;
    id:number

    
  }
  
  //mess fee

  export interface messFee{
    id:number
    reg_no:number
    hosteler_name:string
    Period:number
    mess_charge:number
   
  }

  //hostel fee

  export interface hostelFee{
    id:number
    hosteler_name:string
    reg_no:number
    Hostel_room_number:number
    Academic_yearsession:number
    Room_rent:number
   
  }

 //totel bill

 export interface totelBill{
  id:number
  reg_no:number
  hosteler_name:string
  hostel_charge:number
  mess_charge:number
  W_E_charge:number
  Inventory_charge:number
  Penality:number
  Reducted_amount:number
  Total_amount:number
 
}


 //fee reduction

 export interface feeReduction{
  id:number
  hosteler_name:string
  reg_no:number
  Mess_charge:number
  Number_of_days_continues_absent:string
  purpose_of_leave:string
  Leave_date:string
  Leave_till:string
  Reducted_mess_charge:number
 
}

//student registeration

export interface studentregisteration{
  id:number
  Register_no:number
  Student_name:string
  Gender:string
  Admission_date:string
  Religion:string
  Category:string
  id_proof_type:string 
  Current_Class:string 
  Email:string 
  Blood_Group:string 
  date_of_birth:string
  c_number:number 
  Father_name:string 
  Mother_name:string 
  Guardian_name:string 
  Guardian_contact_no:number 
  Occupation:string 
  Address:string 
  Select_block:string

}