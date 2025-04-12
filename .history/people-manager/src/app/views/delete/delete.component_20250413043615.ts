import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.peopleService.deletePerson(this.id).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
