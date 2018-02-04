import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Activity } from './activity.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';

@Injectable()
export class ActivityStubService {
    public getAllActivities(): Observable<Activity[]> {
        return Observable.of([
            {
                title: 'Software Developer Level 10',
                location: 'Vendasta\'s Saskatoon HQ',
                description: 'Vendasta produces a software platform for small an medium business to manage their online presence. I work in the marketplace division and develop software for vendors to integrate their products into our platform.',
                content: 'The techstack at Vendasta is very large. In Marketplace, we use most of the newer stack which includes Angular4 for making progressive frontends. I work with golang an google\'s container engine for the backend',
                activityImgUrl: 'https://storage.googleapis.com/klutzer-personal-website-images/icons/vendasta_icon_48x48.png',
                activityUrl: 'https://vendasta.com',
                dateStart: 'March 2017'
            } as Activity,
            {
                title: 'Computer Science(B.Sc.)',
                location: 'University of Saskatchewan',
                description: 'I just completed the course work for a computer science degree this last academic term. I graduate in May of 2017!',
                content: 'I  started programming computers as a hobbyist early on, during my university studies. I enjoyed it so much that I decided to study computer science in an academic setting. My favourite computer science course was CMPT 332. This course was an intro to operating systems. In that class I worked with an operating system called xv6. With a partner, I had to modify different parts of the operating system to do things like create elementary threading capabilities.',
                activityImgUrl: 'https://storage.googleapis.com/klutzer-personal-website-images/icons/u_of_s_logo_48x48.png',
                dateStart: 'Sept 2014',
                dateFinish: 'January 2017'
            } as Activity,
            {
                title: 'Electrical Engineering(B.E.)',
                location: 'University of Saskatchewan',
                description: 'For four amazing years I studied electrical engineering at the University of Saskatchewan. I am so thankful to have learned so much!',
                content: 'Ever since I was a child I wanted to be an electrical engineer. Over the past year that dream came true! I graduated with my degree and a specialization in digital signal processing, as well as analog circuitry this last October. My favourite class in engineering was CME 341. In this class we designed and built a custom 4-bit microcontroller using Verilog. There was a lot of work to be done, but it was very rewarding! The microcontroller was tested and simulated using Altera Model Sim. I also really enjoyed my intro to analog electronics course. I learned about things like op-amps, discrete amplifiers, transistors, and diodes.',
                activityImgUrl: 'https://storage.googleapis.com/klutzer-personal-website-images/icons/engs_coat_of_arms_48x48.jpg',
                dateStart: 'Sept 2014',
                dateFinish: 'October 2016'
            } as Activity,
            {
                title: 'Electrical Engineering Research Assistant',
                location: 'University of Saskatchewan',
                description: 'I assisted a doctorate student, at the University of Saskatchewan, with his studies in the early detection of gastrointestinal cancer.',
                content: 'The student I assisted was developing a capsule that when swallowed it could detect gastrointestinal cancer. To do this, a potential patient would digest a fluorescent liquid that would be consumed by cancerous cells. Detecting the amount of this liquid in the intestines would help determine if the patient had cancer or not. I helped develop the circuits that would be used to process sensor data coming from the liquid. I also built test chambers that would act as miniature spectroflurometers, when used with the electric circuits.',
                activityImgUrl: 'https://storage.googleapis.com/klutzer-personal-website-images/icons/engs_coat_of_arms_48x48.jpg',
                dateStart: 'May 2015',
                dateFinish: 'August 2015'
            } as Activity,

        ])
        .share();
    }
}
