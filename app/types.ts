/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StudentFormState {
    errors?: StringMap;
    successMsg?: string;
    data?: any;
    blurs?: StringToBooleanMap;
  }
  
  export interface StringMap {
    [key: string]: string;
  }
  
  export interface StringToBooleanMap {
    [key: string]: boolean;
  }