'use client'
import Avatar from "@/lib/components/commons/Avatar/Avatar";
import Button from "@/lib/components/commons/Button/Button";
import { Calendar, Clock, Maximize2, PlusSquare, Sun, Unlock } from "react-feather";

export default function TypeNewTask({ task_text, handleInputChange, cancel_new_task, submit_task }: { task_text: string, handleInputChange: () => void, cancel_new_task: any, submit_task: any }) {
  const styles = {
    color: 'text-[#8A94A6]'
  }

  return (
    <article className='flex flex-col w-full border border-primary-50 p-2 rounded-md shadow-sm'>
      <section className='flex flex-row gap-2 justify-start items-center pt-2 px-4 pb-4'>
        <PlusSquare color='#007FFF' size={24} />
        <input
          onChange={handleInputChange}
          id="task_text"
          name="task_text"
          value={task_text}
          className='w-full bg-transparent focus:outline-0 focus:ring-0'
          placeholder='Type to add a new task' />
        <Avatar avatar_url='' size={12} />
      </section>
      <section className='flex flex-row justify-between w-full '>
        <section className={` flex gap-1 items-center`}>
          <Button disabled={task_text ? false : true} backgroundColor='bg-blue-50' onClick={cancel_new_task} margin="mr-6"><Maximize2 color="#4E5D78" /><span>Open</span></Button>
          <Button disabled={task_text ? false : true} backgroundColor='bg-transparent' color="text-primary-300" border='border-primary-300' onClick={submit_task}><Calendar /><span>Today</span></Button>
          <Button disabled={task_text ? false : true} backgroundColor='bg-transparent' color="text-primary-300" border='border-primary-300' onClick={cancel_new_task}><Unlock /><span>Public</span></Button>
          <Button disabled={task_text ? false : true} backgroundColor='bg-transparent' color="text-primary-300" border='border-primary-300' onClick={submit_task}><Sun /><span>Highlight</span></Button>
          <Button disabled={task_text ? false : true} backgroundColor='bg-transparent' color="text-primary-300" border='border-primary-300' onClick={submit_task}><Clock /><span>Estimation</span></Button>
        </section>
        <section className='flex gap-1 items-center transition-all duration-250'>
          <Button backgroundColor="bg-cerulean_blue-50" color="text-[#12142C]" onClick={cancel_new_task}>Cancel</Button>
          {
            task_text
              ? <Button backgroundColor="bg-cerulean_blue-800" color="text-white" onClick={submit_task}>Add</Button>
              : <Button backgroundColor="bg-cerulean_blue-800" color="text-white" onClick={submit_task}>ok</Button>
          }

        </section>
      </section>
    </article>
  )
}