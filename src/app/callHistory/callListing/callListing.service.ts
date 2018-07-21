import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';

@Injectable()
export class CallListingService {
  constructor(private baseService:BaseService) {}

  getData(limit, offset, number ) {
    let params = { 
      num: number,
      limit: limit,
      offset: offset
    }
    return this.baseService.get('/api/rules/5acdd58b34841d512a2aac5f', params);
  }

  getNumbers() {
    let params = { 
      username: 'test'
    }
    return this.baseService.get('/api/rules/5b519aea34841d68042732c4', params);
  }
}
