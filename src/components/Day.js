import React, { useState, useEffect, useContext } from 'react';
import Exercise from './Exercise';
// import { v4 as uuidv4 } from 'uuid';
import { DayContext } from './App';

export default function Day(props) {
  const { handleDaySelect, handleDayClear } = useContext(DayContext)
  const [showDayConfirmClear, setShowDayConfirmClear] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDayConfirmClear(false)
    }, 4000)
    return () => clearTimeout(timer);
  },[showDayConfirmClear]);

  const {
    handleModalOpen,
    handleDayChange,
    id,
    name,
    focus,
    exercises
  } = props

  return (
    <div>
      <div className="bg-gray-400 rounded-sm m-2 p-4">
        <div
        className="flex justify-between items-center text-xl font-bold"
        >
          <div>
            <span className="text-gray-100 p-1 mx-1">
              {name}
            </span>
            <span className="p-1 mx-1 text-gray-800" >
              {focus}
            </span>
          </div>
        </div>
        <ul className="p-2 divide-y divide-gray-200">
          {exercises.map(exercise => {
            return (
              <Exercise
                key={exercise.id} {...exercise}
                handleModalOpen={handleModalOpen}
                handleDayChange={handleDayChange}
              />
            )
          })}
        </ul>
        <div className="flex justify-center relative z-0">
          <form>
            <div
              className="overflow-hidden"
              onClick={() => setShowDayConfirmClear(true)}
            >
              <div className={`relative transform transition duration-500 ease-in-out ${showDayConfirmClear ? '-translate-x-full' : ''}`}  >
                <button
                  type="button"
                  className=' mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-gray-800 bg-yellow-600 hover:bg-yellow-700'
                >
                  Clear {name}
                </button>
                <button
                  type="button"
                  className="absolute px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-red-300 bg-red-600"
                  onClick = {() => handleDayClear(id)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
          <button
            type="button"
            className="mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-sm text-gray-800 bg-yellow-600 hover:bg-yellow-700"
            onClick = {() => handleDaySelect(id)}
          >
            Edit {name}
          </button>
        </div>
      </div>
    </div>
  )
}
