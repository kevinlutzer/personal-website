import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';

@Injectable()
export class ProjectStubService {

  constructor() { }

  public getAllProject(): Observable<Project[]> {
    return Observable.of(
    [
        {
          name: 'Raspberry Pi Robot',
          tagline: 'A small robot based off of the raspiberry pi platform',
          description: 'A small robot based around the Raspberry Pi and an off-the-shelf robot base kit. In the future I will add a custom 3D printed x-y gimble to hold a Raspberry Pi Cam. Currently for it, I have a python script that allows the robot to be controlled over a local network using SSH!',
          startDate: 'December 2016',
          imageUrl: 'https://storage-download.googleapis.com/personal-website-156005.appspot.com/rpi_robot_256x256.jpg',
          githubUrl: 'https://github.com/kml183/rpi-bot',
          tags: ['electronics', 'embedded systems', 'raspberry pi'],
        } as Project,
        {
          name: 'Simon Game',
          tagline: 'Miniturized version of the Simon Game',
          description: 'I designed a custom PCB to make a tiny compact Simon Game module. The device uses a Atmel AVR chip that is programmed in C and Assembly. This is one my most favourite projects that I have worked on!',
          startDate: 'January 2016',
          endDate: 'August 2016',
          imageUrl: 'https://storage-download.googleapis.com/personal-website-156005.appspot.com/simon_game_256x256.jpg',
          githubUrl: 'https://github.com/kml183/simon-game',
          tags: ['electronics', 'embedded systems', 'custom pcb', 'assembly'],
        } as Project,
        {
          name: 'Electronic Business Card',
          tagline: 'A portfolio project',
          description: 'A small hardware efficient USB device that displays text across a custom 4x5 LED matrix using an AVR microcontroller. I designed a custom PCB, and assembled multiple copies using a homemade solder re-flow oven. I will be working on the second revision soon.',
          startDate: 'August 2016',
          endDate: 'September 2016',
          imageUrl: 'https://storage-download.googleapis.com/personal-website-156005.appspot.com/business_card_256x256.jpg',
          githubUrl: 'https://github.com/kml183/simon-game',
          tags: ['electronics', 'embedded systems', 'custom pcb'],
        } as Project,
        {
          name: 'Sumo Bot V3',
          tagline: 'A portfolio project',
          description: 'I will be competing in the 2017 RoboGames in California. This project is my entry into the competition. I designed a custom PCB to be the robots body. It uses an Atmel AVR microcontroller programmed in C, and Assembly. In the future I will be adding a frame with sensors to the base.',
          startDate: 'July 2016',
          imageUrl: 'https://storage-download.googleapis.com/personal-website-156005.appspot.com/sumo_bot_256x256.jpg',
          githubUrl: 'https://github.com/kml183/sumo-bot-rev2',
          tags: ['electronics', 'embedded systems', 'custom pcb', 'robot'],
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