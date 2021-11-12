import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => { // beforEach carga por cada enunciado cierta configuracion
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => { // Primer test, deberia poder instanciarse la clase
    expect(service).toBeTruthy();
  });
});
