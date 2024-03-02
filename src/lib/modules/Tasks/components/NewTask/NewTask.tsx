'use client'
import Avatar from '@/lib/components/commons/Avatar/Avatar'
import Button from '@/lib/components/commons/Button/Button'
import React, { useState } from 'react'
import { Calendar, Clock, Maximize2, PlusSquare, Sun, Unlock } from 'react-feather'
import TypeNewTask from '../TypeNewTask/TypeNewTask'
import { useForm } from '@/lib/hooks/useForm'

export default function NewTask() {
  const [addingTask, setAddingTask] = useState<boolean>(false)


  const [formValues, handleInputChange, reset] = useForm({
    task_text: '',
  });
  const { task_text } = formValues;

  const handleAddNewTask = () => {
    reset()
    !addingTask && setAddingTask(!addingTask)
  }

  return (
    <button onClick={handleAddNewTask} className={`  w-full `}>

      {
        addingTask
          ? <TypeNewTask task_text={task_text} handleInputChange={handleInputChange} cancel_new_task={() => { }} submit_task={() => { }} />
          : <section className='flex flex-row justify-start items-center'> <PlusSquare color='#007FFF' /><p className='text-[#8A94A6]'>Type to add a new task</p> </section>
      }
    </button>
  )
}
