import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoStatus } from '../enums/status.enum';
import { TodoModel } from '../models/todo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080';
const HTTP_OPTIONS = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json;charset=utf-8'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  cadastrar(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(`${API_URL}/app/todo`, todo, HTTP_OPTIONS);
  }

  atualizar(todo: TodoModel): Observable<any> {
    return this.http.put(`${API_URL}/app/todo`, todo, HTTP_OPTIONS);
  }

  localizarPorId(id: string): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${API_URL}/app/todo/${id}`);
  }

  listar(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${API_URL}/app/todos`);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/app/todo/${id}`);
  }

  alteraStatus(id: string, status: TodoStatus): Observable<any> {
    return this.http.patch(`${API_URL}/app/todo/${id}`, status, HTTP_OPTIONS);
  }

  /**
   * get -> buscar informação (problema: não tem corpo de requisição)
   * post -> cadastro (quando é necessário efetuar uma consulta/busca onde se tem que ter um corpo de requisição, usa-se o post)
   * put -> atualização
   * patch -> atualização parcial
   * delete -> exclusão
   */
}