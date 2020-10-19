import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsService } from './services/details.service';

describe('DetailsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DetailsService]
    }));

    it('should be created', () => {
        const service: DetailsService = TestBed.get(DetailsService);
        expect(service).toBeTruthy();
    });

    it('should have getCard function', () => {
        const service: DetailsService = TestBed.get(DetailsService);
        expect(service.getCard).toBeTruthy();
    });

    
});
