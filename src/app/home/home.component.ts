import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;

  radius = 50;
  color = 'rgb(255, 213, 174)';

  longText = `An internship or apprenticeship can boost your chances of getting an oil and gas job. It's a great way to get your foot in the door and get the experience that you need. There are skilled jobs that will pay much more, as long as you pay your dues.`;

  constructor() { }

  ngOnInit(): void {
  }

}
