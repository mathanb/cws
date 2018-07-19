import { TestBed, inject } from '@angular/core/testing';

import { PaymentserviceclientService } from './paymentserviceclient.service';

describe('PaymentserviceclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentserviceclientService]
    });
  });

  it('should be created', inject([PaymentserviceclientService], (service: PaymentserviceclientService) => {
    expect(service).toBeTruthy();
  }));
});
