export interface User {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    status: boolean;
    
}

export interface SignIn {
    email: string;
    password: string;
}

export interface SignInResponse{
    title: string;
    status: number;
}