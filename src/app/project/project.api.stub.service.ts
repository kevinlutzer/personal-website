import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from './project'

@Injectable()
export class ProjectApiStubService {

  constructor() { }

  public getAllProject(): Observable<Project[]> {
    return Observable.of(
    [
        {
          name: 'Project 1',
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'https://00e9e64bacbf24ddbbf31bfa72fbaa7395dbd67893c15cd23f-apidata.googleusercontent.com/download/storage/v1/b/personal-website-156005.appspot.com/o/business_card_256x256.jpg?qk=AD5uMEtojFWbD6xW9fq8q4M7paq58p47k82noWcUpGfB821MGGcuSQldIGd8-pWPXLmm4XfUrErJw_P8Rydjr3OgXuNAkwx0sltUbyVHOhmGdb8LluuVj8mxihuuXfjFJ_KxnJIJjNUtYwf-6-g7hMrpQF_8Ixn3vdpQcSoGmcz5sLbRkMcB4pwQIObRLl_Ih8bxZtRPLe1NmpwVCq6RfJjyaV4x6-w7jOYW3WE7VW_zivwgicL95TvOm2T3pT1rsOIV11CqXSSQGtAafmz0uvTI9DjIwNrmxyoNMplL3R6qS5w-2glDoSIKwhyeH5GjvAU576VrYuEqxuh-UJeSXc3mPU3XMhfsofuQ5jEc2EvqE6mO7HgjlOH9LzSMEr9z_mpDWtzd_DxOrvc7wxBZIQ8SCGaY8NyJyw0VeBxFAZicZ1e9nI3HTFF7T3B2-cKdT4zqPbzLHdURjHVK3AywQPxdolqvcnP3Yg4xpoNyU79r5p6F9kqZAHxikb3o0Z6KRu1PBTTTeORDhy8oCWFJ1PvKcbugu4s_I7VvOPp25OiOfTzDmodiXWt3XD3PeIsTjSPe0n8gezAe43btFP79TGvzzGo4wjABTqLFf1rrFvtw5UPDJIM5wumDhExndP5xicAgQUkPYsVc-XSrWotFdscYZ2gscnpzDAule86fPFHWppkoGOYcLVC-wuXff6Q9l_TRbI5hXt_GK9dTgJUcBkJmlUXx885Z74EhZgfbnqOvNGbBqEsYRnsuPfeUR7VtLqpf36z1UD6g-XkMIfGw-meM2xo0Qp06jvNobAqN3TJ8Jap2pM0k-tE7d2di5s5X65cdIhAHo1Cr',
          githubUrl: 'https://github.com/kml183/business-card',
          tags: ['electronics', 'embedded systems'],
        } as Project,
        {
          name: 'Project 2',
          tagline: 'This is a good project',
          description: 'This is the project',
          imageUrl: 'https://00e9e64bacbf24ddbbf31bfa72fbaa7395dbd67893c15cd23f-apidata.googleusercontent.com/download/storage/v1/b/personal-website-156005.appspot.com/o/business_card_256x256.jpg?qk=AD5uMEtojFWbD6xW9fq8q4M7paq58p47k82noWcUpGfB821MGGcuSQldIGd8-pWPXLmm4XfUrErJw_P8Rydjr3OgXuNAkwx0sltUbyVHOhmGdb8LluuVj8mxihuuXfjFJ_KxnJIJjNUtYwf-6-g7hMrpQF_8Ixn3vdpQcSoGmcz5sLbRkMcB4pwQIObRLl_Ih8bxZtRPLe1NmpwVCq6RfJjyaV4x6-w7jOYW3WE7VW_zivwgicL95TvOm2T3pT1rsOIV11CqXSSQGtAafmz0uvTI9DjIwNrmxyoNMplL3R6qS5w-2glDoSIKwhyeH5GjvAU576VrYuEqxuh-UJeSXc3mPU3XMhfsofuQ5jEc2EvqE6mO7HgjlOH9LzSMEr9z_mpDWtzd_DxOrvc7wxBZIQ8SCGaY8NyJyw0VeBxFAZicZ1e9nI3HTFF7T3B2-cKdT4zqPbzLHdURjHVK3AywQPxdolqvcnP3Yg4xpoNyU79r5p6F9kqZAHxikb3o0Z6KRu1PBTTTeORDhy8oCWFJ1PvKcbugu4s_I7VvOPp25OiOfTzDmodiXWt3XD3PeIsTjSPe0n8gezAe43btFP79TGvzzGo4wjABTqLFf1rrFvtw5UPDJIM5wumDhExndP5xicAgQUkPYsVc-XSrWotFdscYZ2gscnpzDAule86fPFHWppkoGOYcLVC-wuXff6Q9l_TRbI5hXt_GK9dTgJUcBkJmlUXx885Z74EhZgfbnqOvNGbBqEsYRnsuPfeUR7VtLqpf36z1UD6g-XkMIfGw-meM2xo0Qp06jvNobAqN3TJ8Jap2pM0k-tE7d2di5s5X65cdIhAHo1Cr',
          githubUrl: 'https://github.com/kml183/business-card',
          tags: ['electronics', 'embedded systems'],
        } as Project
    ])
    .share();
  }
}

export interface Project {
    name: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    tags: string[];
}