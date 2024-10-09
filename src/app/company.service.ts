import { Injectable } from '@angular/core';
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = 'http://localhost:3000/companies';

  async getAllCompanies(): Promise<Company[]> {
    const data = await fetch(`${this.url}`);
    return (await data.json()) ?? {};
  }

  async getByName(name: string): Promise<Company[]> {
    const data = await fetch(`${this.url}?name=${name}`);
    return (await data.json()) ?? {};
  }
}
