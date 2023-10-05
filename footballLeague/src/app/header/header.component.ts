import { Component, OnInit } from '@angular/core';
import { countries } from 'src/app/shared/constants/countries.const'
import { LeagueService } from '../shared/service/league.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  countries: string[] = countries;
  private subscription = new Subject<void>();

  constructor(
    private leagueService: LeagueService
  ) {}

  ngOnInit(): void {
  }

  selectedCountry(country: string): void {
    this.leagueService.getIdForSelectedCountry()
    .pipe(takeUntil(this.subscription))
    .subscribe((res: any) => {
          const abc = res; 
    })
    
  }
}
