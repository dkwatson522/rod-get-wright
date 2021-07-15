import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons'

const DayExerciseEdit = (props) => {
  const {
    exercise,
    handleExerciseChange,
    handleExerciseDelete
  } = props

  const [showExerciseConfirmClear, setShowExerciseConfirmClear] = useState(false)

  const handleChange = (changes) => {
    handleExerciseChange(exercise.id, { ...exercise, ...changes })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExerciseConfirmClear(false)
    }, 4000)
    return () => clearTimeout(timer);
  },[showExerciseConfirmClear]);



  return(
    <div className="grid grid-cols-6 divide-x-4">
      <div className="px-4 col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Workout
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="workout"
            value={exercise.workout}
            onChange={(e) => handleChange({workout: e.target.value})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="px-4 col-span-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Description
        </label>
        <div className="mt-1">
          <textarea
            name="description"
            id="description"
            value= {exercise.description}
            onChange={(e) => handleChange({description: e.target.value})}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div
        className="overflow-hidden my-auto mx-auto"
        onClick={() => setShowExerciseConfirmClear(true)}
      >
        <div className={`relative transform transition duration-500 ease-in-out ${showExerciseConfirmClear ? '-translate-x-full' : ''}`}>
          <button
            type="button"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-sm"
          >
            <FontAwesomeIcon
              className="h-auto w-auto text-red-600"
              aria-hidden="true"
              icon={faTrashAlt}
            />
          </button>
          <button
            type="button"
            className={`absolute px-4 py-2 border border-transparent text-sm font-medium rounded-full ${showExerciseConfirmClear ? 'animate-bounce' : ''}`}
            onClick={() => handleExerciseDelete(exercise.id)}
          >
            <FontAwesomeIcon
              className="h-auto w-auto text-red-600"
              aria-hidden="true"
              icon={faTrashRestore}
            />
          </button>
        </div>
      </div>
    </div>
  )
};

export default DayExerciseEdit;
