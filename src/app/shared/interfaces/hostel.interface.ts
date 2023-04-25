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
  Room_name:string
  Block_name:string
  Floor:number
  Total_space:number
  Available_space:number
  photo:string

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
  










