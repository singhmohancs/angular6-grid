import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class SmartTableService {
  constructor(private baseService:BaseService) {}

  getData(limit, offset ) {
    let params = { 
      num: '4692568482',
      limit: limit,
      offset: offset
    }
    return this.baseService.get('/api/rules/5acdd58b34841d512a2aac5f', params);
  }
}
