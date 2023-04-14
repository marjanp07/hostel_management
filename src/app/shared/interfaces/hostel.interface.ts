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
  Room_name:string
  Block_name:string
  Floor:number
  Total_space:number
  Available_space:number
  photo:string

}

//room vacate
export interface vacate{

  hosteler_name:string
  reg_no:number
  vacating_date:string
  vacating_reason:string



}