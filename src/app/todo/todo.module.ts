import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SharedComponent } from './shared/shared.component';
import { TodoService } from './services/todo.service';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'

const materialModule = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    ViewComponent,
    SharedComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModule,
    RouterModule,
  ],

  exports: [
    CreateComponent,
    EditComponent,
    ListComponent,
    ViewComponent,
    SharedComponent,
  ],

  providers: [TodoService]
})
export class TodoModule { }
