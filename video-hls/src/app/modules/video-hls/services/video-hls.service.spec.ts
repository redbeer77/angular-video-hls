import { TestBed, inject } from '@angular/core/testing';

import { VideoHlsService } from './video-hls.service';

describe('VideoHlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoHlsService]
    });
  });

  it('should be created', inject([VideoHlsService], (service: VideoHlsService) => {
    expect(service).toBeTruthy();
  }));
});
