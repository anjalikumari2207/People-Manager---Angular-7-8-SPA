import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { EditComponent } from './views/edit/edit.component';
import { DeleteComponent } from './views/delete/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
