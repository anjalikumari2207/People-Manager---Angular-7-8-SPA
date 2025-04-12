import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    this.router.navigate(['/delete', id]);
  }
}
