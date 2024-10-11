import { Injectable } from '@angular/core';
import {ConsoleUnit} from "./console-unit";

@Injectable({
  providedIn: 'root'
})
export class ConsoleUnitsService {

  url = 'http://localhost:3000/console-units';

  async getUnitsByConsoleId(id: string | undefined): Promise<ConsoleUnit[]> {
    const data = await fetch(`${this.url}?console_id=${id}`);
    return (await data.json()) ?? {};
  }
}
