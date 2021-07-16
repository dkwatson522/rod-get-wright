import React, { useState, useEffect, useContext } from 'react';
import Day from './Day';
import { DayContext } from './App';

export default function Schedule( {handleModalOpen, handleDayChange, workouts, setWorkouts, days, handleWorkoutDelete} ) {
  const { handleScheduleClear } = useContext(DayContext)

  const [showConfirmClear, setShowConfirmClear] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfirmClear(false)
    }, 4000)
    return () => clearTimeout(timer);
  },[showConfirmClear]);

  return (
    <div className="bg-gray-100 px-4 py-5 rounded-sm border-b border-gray-200 sm:px-6">
      <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
        <form>
          <div
            className="overflow-hidden"
            onClick={() => setShowConfirmClear(true)}
          >
            <div className={`relative transform transition duration-500 ease-in-out ${showConfirmClear ? '-translate-x-full' : ''}`}>
              <button
                type="button"
                className='px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-blue-800 hover:bg-blue-700'
              >
                Clear Schedule
              </button>
              <button
                type="button"
                className="absolute px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-red-300 bg-red-600 w-full h-full"
                onClick={handleScheduleClear}
              >
                Confirm?
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4 flex-shrink-0">

        </div>
      </div>
      <div className="mx-auto max-w-xl">
        {days.map(day => {
          return (
            <Day
              key={day.id} {...day}
              day={day}
              handleModalOpen={handleModalOpen}
              handleDayChange={handleDayChange}
              handleWorkoutDelete={handleWorkoutDelete}
            />
          )
        })}
      </div>
    </div>
  )
}
