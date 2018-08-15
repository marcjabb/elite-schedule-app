import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import {HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailsPage } from '../pages/team-details/team-details';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApi} from '../providers/elite-api/elite-api';
import { UserSettings } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';
import {AgmCoreModule} from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    MapPage,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailsPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCekJOBdu7vFftVnOgaa29lM0Wh8rfiosk'}),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailsPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettings
  ]
})
export class AppModule {}
