import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from './activity';

@Injectable()
export class ActivityStubService {
    public getAllActivities(): Observable<Activity[]> {
        return Observable.of([
            {
                name: 'Software Developer',
                location: 'Vendasta\'s Saskatoon HQ',
                description: 'Vendasta produces a software platform for small an medium business to manage their online presence. I work in the marketplace division and develop software for vendors to integrate their products into our platform.',
                content: 'asd',
                activityImgUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/vendasta-logo.png',
                activityUrl: 'https://vendasta.com',
                dateStart: 'March 2017'
            } as Activity,
            {
                name: 'Computer Science(B.Sc.)',
                location: 'University of Saskatchewan',
                description: 'I just completed the course work for a computer science degree this last academic term. I graduate in May of 2017!',
                content: 'I  started programming computers as a hobbyist early on, during my university studies. I enjoyed it so much that I decided to study computer science in an academic setting. My favourite computer science course was CMPT 332. This course was an intro to operating systems. In that class I worked with an operating system called xv6. With a partner, I had to modify different parts of the operating system to do things like create elementary threading capabilities.',
                activityImgUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/uofs_logo.png',
                dateStart: 'Sept 2014',
                dateFinish: 'January 2017'
            } as Activity,
            {
                name: 'Electrical Engineering(B.E.)',
                location: 'University of Saskatchewan',
                description: 'Vendasta produces a software platform for small an medium business to manage their online presence. I work in the marketplace division and develop softwarFor four amazing years I studied electrical engineering at the University of Saskatchewan. I am so thankful to have learned so much!',
                content: 'Ever since I was a child I wanted to be an electrical engineer. Over the past year that dream came true! I graduated with my degree and a specialization in digital signal processing, as well as analog circuitry this last October. My favourite class in engineering was CME 341. In this class we designed and built a custom 4-bit microcontroller using Verilog. There was a lot of work to be done, but it was very rewarding! The microcontroller was tested and simulated using Altera Model Sim. I also really enjoyed my intro to analog electronics course. I learned about things like op-amps, discrete amplifiers, transistors, and diodes.',
                activityImgUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/uofs_logo.png',
                dateStart: 'Sept 2014',
                dateFinish: 'October 2016'
            } as Activity,
            {
                name: 'Electrical Engineering Research Assistant',
                location: 'University of Saskatchewan',
                description: 'I assisted a doctorate student, at the University of Saskatchewan, with his studies in the early detection of gastrointestinal cancer.',
                content: 'The student I assisted was developing a capsule that when swallowed it could detect gastrointestinal cancer. To do this, a potential patient would digest a fluorescent liquid that would be consumed by cancerous cells. Detecting the amount of this liquid in the intestines would help determine if the patient had cancer or not. I helped develop the circuits that would be used to process sensor data coming from the liquid. I also built test chambers that would act as miniature spectroflurometers, when used with the electric circuits.',
                activityImgUrl: 'http://storage-download.googleapis.com/personal-website-156005.appspot.com/uofs_logo.png',
                dateStart: 'May 2015',
                dateFinish: 'August 2015'
            } as Activity,

        ])
        .share();
    }
}
