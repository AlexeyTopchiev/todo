import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item
        
        return (
            <li key={ id }>
            <TodoListItem { ...itemProps } />
            </li>
            // ПЕРВЫЙ ВАРИАНТ (деструктуризировать, чтобы достать id и исп-ть rest-параметр,
            // чтобы сохранить оставшиеся свойства в itemProps)
        )
    })
    
  return (
      <ul>
        { elements }
      </ul>
  )
}

export default TodoList

            //  ВТОРОЙ ВАРИАНТ (но в TodoListItem передаем лишнее свойство id)
            // <li key={ item.id }> 
            // <TodoListItem { ...item } />
            // </li>
            // ТРЕТИЙ ВАРИАНТ (самый простой)
            // <li key={ item.id }> 
            // <TodoListItem label={ item.label }
            //               important={ item.important } />
            // </li>