import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
      <ul>
          <li><TodoListItem label="Drink Coffee" /></li>
          <li><TodoListItem label="Build React App" important /></li>
      </ul>
  )
}

export default TodoList

// Мы можем передать любые свойства в любые Реакт-компоненты 
// Передавать в качестве свойства другому компоненту можно любые значения 
// (любой тип JS, строки, булевы, функции, массивы, объекты и тд)