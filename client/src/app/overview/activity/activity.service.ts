

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity } from './activity.model';

@Injectable()
export class ActivityService {

  public get experience$(): Observable<Activity[]> {
    return of([
      {
        title: 'Computer Science (B.Sc.)',
        location: 'Saskatoon SK, CA.',
        description: 'I just completed the course work for a computer science degree this last academic term. I graduate in May of 2017!',
        content: 'I started programming computers as a hobbyist early on, during my university studies. I enjoyed it so much that I decided to study computer science in an academic setting. My favourite computer science course was CMPT 332. This course was an intro to operating systems. In that class I worked with an operating system called xv6. With a partner, I had to modify different parts of the operating system to do things like create elementary threading capabilities.',
        activityImgUrl: '/assets/icons/u_of_s_logo_48x48.png',
        dateStart: new Date(2012, 9, 1, 1, 1, 1, 1),
        dateFinish: new Date(2016, 10, 1, 1, 1, 1, 1),
      } as Activity,
      {
        title: 'Electrical Engineering (B.E.)',
        location: 'Saskatoon SK, CA.',
        description: 'For four amazing years I studied electrical engineering at the University of Saskatchewan. I am so thankful to have learned so much!',
        content: 'Ever since I was a child I wanted to be an electrical engineer. Over the past year that dream came true! I graduated with my degree and a specialization in digital signal processing, as well as analog circuitry this last October. My favourite class in engineering was CME 341. In this class we designed and built a custom 4-bit microcontroller using Verilog. There was a lot of work to be done, but it was very rewarding! The microcontroller was tested and simulated using Altera Model Sim. I also really enjoyed my intro to analog electronics course. I learned about things like op-amps, discrete amplifiers, transistors, and diodes.',
        activityImgUrl: '/assets/icons/engs_coat_of_arms_48x48.jpg',
        dateStart: new Date(2012, 9, 1, 1, 1, 1, 1),
        dateFinish: new Date(2016, 10, 1, 1, 1, 1, 1),
      } as Activity,
      {
        title: 'Intermediate Software Developer',
        location: 'Saskatoon SK, CA.',
        description: 'Vendasta produces a software platform for small an medium business to manage their online presence. I work in the marketplace division and develop software for vendors to integrate their products into our platform.',
        content: 'The techstack at Vendasta is very large. In Marketplace, we use most of the newer stack which includes Angular4 for making progressive frontends. I work with golang an google\'s container engine for the backend.',
        activityImgUrl: '/assets/icons/vendasta_icon_48x48.png',
        dateStart: new Date(2017, 3, 1, 1, 1, 1, 1),
        dateFinish: new Date(2020, 1, 1, 1, 1, 1, 1),
      } as Activity,
      {
        title: 'Electrical Engineering Research Assistant',
        location: 'Saskatoon SK, CA.',
        description: 'I assisted a doctorate student, at the University of Saskatchewan, with his studies in the early detection of gastrointestinal cancer.',
        content: 'The student I assisted was developing a capsule that when swallowed it could detect gastrointestinal cancer. To do this, a potential patient would digest a fluorescent liquid that would be consumed by cancerous cells. Detecting the amount of this liquid in the intestines would help determine if the patient had cancer or not. I helped develop the circuits that would be used to process sensor data coming from the liquid. I also built test chambers that would act as miniature spectroflurometers, when used with the electric circuits.',
        activityImgUrl: '/assets/icons/vendasta_icon_48x48.png',
        dateStart: new Date(2015, 4, 1, 1, 1, 1, 1),
        dateFinish: new Date(2015, 7, 1, 1, 1, 1, 1),
      } as Activity,
    ])
  }

  public get certifications(): Observable<Activity[]> {
    return of([
      {
        title: 'Certified ScrumMaster',
        location: 'Saskatoon, SK, Canada',
        description: 'Course for being a Certified ScrumMaster.',
        content: 'This is a course describing the role and responsibility of a Scrume Master. In this course I learned advance scrum concepts as well as had and how to be an effective Scrum Master',
        activityImgUrl: '/assets/icons/certified_scrum_master_48x48.png',
        activityUrl: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
      } as Activity
    ])
  }
}
