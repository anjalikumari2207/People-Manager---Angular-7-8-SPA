import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  person: any = {};
  id: number;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.peopleService.getPerson(this.id).subscribe(data => {
      this.person = data;
    });
  }

  updatePerson() {
    this.peopleService.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
