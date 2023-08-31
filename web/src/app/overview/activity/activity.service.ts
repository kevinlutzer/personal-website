

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from './activity.model';

@Injectable()
export class ActivityService {

  public get experience$(): Observable<Activity[]> {
    return of([
      {
        title: 'Software Developer',
        company: 'Showrunner Industries Inc.',
        activityImgUrl: '/assets/icons/showrunner_industries_inc.jpg',
        description: 'Showrunner Pro offers products to assist Hollywood film and show writers in organizing ideas, developing plot points, and building characters. There are a lot of exciting challenges we have had to solve related to security and scalability.',  
        dateStart: new Date(2020, 8, 3, 1, 1, 1, 1)
      } as Activity,
      {
        title: 'Software Developer Team Lead',
        company: 'Vendasta',
        description: 'I lead a team of 3 developers at Vendasta in our Marketplace division, while simultaneously helping to manage the backlog and business value for the projects we work on.',
        content: 'I complete individual tasks for these projects to help further them. I have found both personal fulfilment and professional growth in learning how to prioritize and manage the tasks that I take on to meet the responsibilities I have for managing my team, completing my teams project work, determining what my team works on, and following up with the success of the features we build.',
        activityImgUrl: '/assets/icons/vendasta_icon_48x48.png',
        dateStart: new Date(2019, 1, 1, 1, 1, 1, 1),
        dateFinish: new Date(2019, 9, 1, 1, 1, 1, 1),
      } as Activity,
      {
        title: 'Software Developer',
        company: 'Vendasta',
        description: 'My focus at Vendasta centred on improving the infrastructure of our Marketplace. The features that I work on are used to integrate third-party applications into our platform for our partners to resell.',
        content: 'I also build visualizations for the different applications that our partners sell to their customers in their digital stores. Recently, my team has been exposing SaaS (Software as a Service) analytics/dashboards to our partners as a means of proving how the Marketplace is positively impacting their revenue. From these feature sets, I have grown my technical knowledge of web services and utilized tonnes of different design patterns and technologies.',
        activityImgUrl: '/assets/icons/vendasta_icon_48x48.png',
        dateStart: new Date(2017, 3, 1, 1, 1, 1, 1),
        dateFinish: new Date(2020, 1, 1, 1, 1, 1, 1),
      } as Activity,
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
        title: 'Electrical Engineering Research Assistant',
        company: 'University of Saskatchewan',
        description: 'I assisted a doctorate student, at the University of Saskatchewan, with his studies in the early detection of gastrointestinal cancer.',
        content: 'The student I assisted was developing a capsule that when swallowed it could detect gastrointestinal cancer. To do this, a potential patient would digest a fluorescent liquid that would be consumed by cancerous cells. Detecting the amount of this liquid in the intestines would help determine if the patient had cancer or not. I helped develop the circuits that would be used to process sensor data coming from the liquid. I also built test chambers that would act as miniature spectroflurometers, when used with the electric circuits.',
        activityImgUrl: '/assets/icons/vendasta_icon_48x48.png',
        dateStart: new Date(2015, 4, 1, 1, 1, 1, 1),
        dateFinish: new Date(2015, 7, 1, 1, 1, 1, 1),
      } as Activity,
    ])
  }

  public get certifications$(): Observable<Activity[]> {
    return of([
      {
        title: 'Certified ScrumMaster',
        location: 'Saskatoon, SK, Canada',
        description: 'A course to become a Certified Srum Master with Scrum Alliance.',
        content: 'This certification through Scrum Alliance is meant to teach people about the role and responsibilities of a Scrum Master. In this course, I learned advanced scrum concepts as well as had and how to be an effective Scrum Master.',
        activityImgUrl: '/assets/icons/certified_scrum_master_48x48.png',
        activityUrl: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
      } as Activity,
      {
        title: 'Crucial Conversations',
        location: 'Saskatoon, SK, Canada',
        description: 'A hands-on course, to teach people to have effective \'crucial conversations\'.',
        content: 'A \'crucial conversation\' is one where the emotions are involved, the outcome will have a high impact, and the opinions of participating parties differ. This course gave me the tools and training to have these types of conversations more effectively.',
        activityImgUrl: '/assets/icons/crucial_conversations_48x48.png',
        activityUrl: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
      } as Activity
    ])
  }
}
