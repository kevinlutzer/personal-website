export const MODEL = 'Project';

export class Project {
    constructor(
      public name: string, public description: string, public imageUrl: string, public githubUrl: string, public tags: string[], public startDate: Date, public endDate?: Date
    ){}
}

export const Projects = [
  new Project(
    "BizPulse", 
    "BizPulse is a SaaS platform that provides key metrics of small businesses to support acquisition decisions.",
    "/assets/projects/biz_image.png",
    "",
    ["Rust", "Go", "Selenium", "Digital Ocean"],
    new Date("April 23, 2025")
),
  new Project(
    "Strato Connect", 
    "Strato Connect is an RF module used to send AX.25 formatted data with (G)FSK modulation over I2C. Connect a host MCU or computer to this module, and you can communicate with any AX.25 supported receiver up to 100 kilometers line of sight.",
    "/assets/projects/strato_connect_pcb_v2_504x336.jpg",
    "https://github.com/kevinlutzer/strato-connect",
    ["RF", "C++", "Arduino", "AVR", "KiCAD"],
    new Date("Jan 11, 2022")
    ),
  new Project(
    "RP Ducky", 
    "A RP2040 based keystroke injector that uses standard Ducky Script (https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference). Unlike the original Rubber Ducky from Hak5, this module does not require the scripts to be loaded over an SD card. Instead, you can start the RP Ducky in USB Storage mode to both update the code and the scripts on the device.",
    "/assets/projects/rp_ducky_v4_684x456.jpg",
    "https://github.com/kevinlutzer/rp-ducky",
    ["RP2040", "KiCAD", "Circuit Python"],
    new Date("March 11, 2022")
  ),
  new Project(
    "Electronic Business Card", 
    "The purpose of this project was to demonstrate some of my skills as an Electrical Engineer to potential employers. This project required me to build and prototype a tri-state circuit, add controls with a STM32G ARM microcontroller and design/manufacture a custom printed circuit board. When you plug the device into a standard USB2A port it scrolls my portfolio website's URL across the matrix display. I designed this device to cost about $2.50 CAD per populated board.",
    "/assets/projects/business_card_v4.jpg",
    "https://github.com/kevinlutzer/business-card/",
    ["C++", "ARM Cortex-M", "KiCAD"],
    new Date("Jan 7, 2017")
  ),
  new Project(
    "Room Environment Monitor",
    "The Room Environment Monitor project was something that I started back in 2017. I wanted a small IoT device that could tell me if there was a concerning amount of volatile organic compounds (VOCs) and CO2 in my workshop. I built the first version based on a Raspberry Pi Zero and CCS811 sensor. I went through multiple iterations of the project with the overall objective to reduce cost. At that time CCS811s cost about 40 dollars alone bringing the total bill of materials to about 70 CAD. Fast forward a few years later and IKEA released their Vindriktning monitor which uses a PM1006 sensor to measure 2.5um matter in the air. I designed my latest version of the Room Environment Monitor to replace the controller inside and make use of the device's case.",
    "/assets/projects/room_environment_monitor_v3_582x388.jpg",
    "https://github.com/kevinlutzer/room-environment-monitor",
    ["C++", "Arduino", "ESP32", "KiCAD", "IoT", "Google Cloud"],
    new Date("Dec 1, 2017")
  ),
  new Project(
    "RF Dummy Load",
    "A simple RF Dumy Load based on the RFP1109 commonly found resistor.",
    "/assets/projects/rf-dummy-load_446x298.png",
    "https://github.com/kevinlutzer/rf-dummy-load",
    ["KiCAD", "RF"],
    new Date("Jan 1, 2023")
  ),
  new Project(
    "RF Mixer | Diode Ring Modulator",
    "This was a mixer I designed for a super hyderodyne receiver. It uses a ring diode circuit",
    "/assets/projects/rf-mixer_446x298.png",
    "https://github.com/kevinlutzer/diode-ring-modulator",
    ["KiCAD", "RF"],
    new Date("July 1, 2023")
  ),
];
