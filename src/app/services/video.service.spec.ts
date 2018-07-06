import { TestBed, inject } from '@angular/core/testing';

import { EmbedvideoService } from './embedvideo.service';

describe('EmbedvideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbedvideoService]
    });
  });

  it('should be created', inject([EmbedvideoService], (service: EmbedvideoService) => {
    expect(service).toBeTruthy();
  }));
});
