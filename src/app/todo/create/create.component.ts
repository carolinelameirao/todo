import { TodoService } from '../services/todo.service';
import { TodoModel } from './../models/todo.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TodoStatus } from '../enums/status.enum';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todoForm!: FormGroup;
  msg!: string;

  constructor(private FormBuilder: FormBuilder, private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.FormBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-zÀ-ú0-9 ]+$/),
          Validators.minLength(4),
          Validators.maxLength(150),
        ]],
    });
  }

  cadastrar() {
    const todo = this.todoForm.getRawValue() as TodoModel;
    todo.nome = this.todoForm.get('nome')!.value;
    todo.status = TodoStatus.PENDENTE;

    this.todoService.cadastrar(todo).subscribe({
      next: () => {
        this.todoForm.reset();
        this.msg = "Cadastrado com sucesso!";
      },
      error: (err) => {
        console.error(err);
        this.todoForm.reset();
        this.msg = "Falha ao cadastrar.";
      }
    });
  }

  get nome() { return this.todoForm.get('nome')!; }
}
