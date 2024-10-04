import { Injectable } from '@angular/core';
import {Console} from "./console";

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  url = 'http://localhost:3000/consoles';

  async getConsoleById(id: string): Promise<Console | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async getAllConsoles() {
    const data = await fetch(`${this.url}`);
    return (await data.json()) ?? {};
  }
}
