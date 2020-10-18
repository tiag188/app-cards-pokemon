import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListService } from './services/list.service';

describe('ListService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ListService]
    }));

    it('should be created', () => {
        const service: ListService = TestBed.get(ListService);
        expect(service).toBeTruthy();
    });

    it('should have getCards function', () => {
        const service: ListService = TestBed.get(ListService);
        expect(service.getCards).toBeTruthy();
    });

    it('should have handleError function', () => {
        const service: ListService = TestBed.get(ListService);
        expect(service.handleError).toBeTruthy();
    });

    
});
