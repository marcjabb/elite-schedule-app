import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StandingsPage } from '../standings/standings';
import { TeamDetailsPage } from '../team-details/team-details';
import { MyTeamsPage } from '../my-teams/my-teams';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  public team: any = {};
  public teamDetailTab = TeamDetailsPage;
  public standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
    //this.navCtrl.push(MyTeamsPage)
    this.navCtrl.popToRoot();
  }

}
