import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './todo/create/create.component';
import { EditComponent } from './todo/edit/edit.component';
import { ListComponent } from './todo/list/list.component';
import { SharedComponent } from './todo/shared/shared.component';
import { ViewComponent } from './todo/view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo/list', pathMatch: "full" },
  { path: 'todo/create', component: CreateComponent },
  { path: 'todo/edit/:id', component: EditComponent },
  { path: 'todo/list', component: ListComponent },
  { path: 'todo/view', component: ViewComponent },
  { path: 'todo/shared', component: SharedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
