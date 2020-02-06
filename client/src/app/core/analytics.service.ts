import { Injectable } from '@angular/core';
declare const firebase: any;

@Injectable()
export class AnalyticsService {
  public setup(): void { 
        const firebaseConfig = {
            apiKey: "AIzaSyDbMvCGwA74RM8IWThqZ52FS1Vh41B7-lY",
            authDomain: "website-klutzer.firebaseapp.com",
            databaseURL: "https://website-klutzer.firebaseio.com",
            projectId: "website-klutzer",
            storageBucket: "website-klutzer.appspot.com",
            messagingSenderId: "225726413234",
            appId: "1:225726413234:web:d34ea506e171cb8fff0cab",
            measurementId: "G-ES1P5L6WNQ"
        };

        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}
