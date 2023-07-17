export const MODEL = 'Project';

export class Project {
    constructor(
      public name: string, public description: string, public imageUrl: string, public githubUrl: string, public tags: string[], public startDate: Date, public endDate?: Date
    ){}
}

export const Projects = [
  new Project(
    "RP Ducky", 
    "RP Ducky is a “bad usb” device that runs Ducky Script. Ducky Script is a scripting language invented by Hak5 to automate keystroke injections on a host computer. I built this device as I wanted a tool that I could use to update my Raspberry Pi clusters without needing to upload new code to an SD card unlike the Rubbery Ducky from Hak5. It's based around the RP2040 silicon from the Raspberry Pi Foundation.",
    "",
    "https://github.com/kevinlutzer/rp-ducky",
    ["electronics", "custom pcb"],
    new Date("March 11, 2022")
  ),
  new Project(
    "Strato Connect", 
    "Strato Connect is a small radio modem that transmits messages over frequency key shifting (FSK) using the AX.25 data link protocol. By transmitting over AX.25, it makes it easy for a primary controller board to transmit information using APRS.  I wanted a small radio modem that I could reuse with different controllers for both high altitude balloon and hobby rocket projects.",
    "",
    "https://github.com/kevinlutzer/strato-connect/",
    [],
    new Date("Jan 11, 2023")
  ),
  new Project(
    "Electronic Business Card V2", 
    "The v2 version of the original business card portfolio project. I wanted to take a nother crack at this idea with the main focus being the led matrix size.",
    "https://storage.cloud.google.com/website-klutzer-images/projects/business_card_website_446x298.png",
    "https://github.com/kevinlutzer/business-card/",
    ["electronics", "custom pcb", "eagle"],
    new Date("Jan 11, 2020")
  ),
  new Project(
    "Room Environment Monitor",
    "I made a small device to determine the air quality between my work and bedrooms. I entered this project as an exhibit for the 2018 Saskatoon Maker Faire. This device tracks air quality and room temperature, and then sends the data to be processed by Google IOT Core.",
    "https://storage.cloud.google.com/website-klutzer-images/projects/room-environment-monitor_446x298.jpg",
    "https://github.com/kevinlutzer/room-environment-monitor",
    [],
    new Date("Apr 17, 2018")
  ),
];
