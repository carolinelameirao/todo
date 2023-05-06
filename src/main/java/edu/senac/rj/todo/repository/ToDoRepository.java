package edu.senac.rj.todo.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.senac.rj.todo.model.ToDo;

@Repository("toDoRepository")
public interface ToDoRepository extends JpaRepository<ToDo, UUID> {
}
