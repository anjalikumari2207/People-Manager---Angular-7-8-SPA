import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { EditComponent } from './views/edit/edit.component';
import { DeleteComponent } from './views/delete/delete.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
