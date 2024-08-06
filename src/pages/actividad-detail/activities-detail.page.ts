import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-activities-detail',
  templateUrl: './activities-detail.page.html',
  styleUrls: ['./activities-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ActivitiesDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
