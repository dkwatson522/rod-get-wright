// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

export default function Exercise(props) {
  const {
    id,
    workout,
    description
  } = props

  return (
    <>
      <li
        key={id}
        className="grid grid-cols-3 relative bg-gray-100 py-2 px-4 my-2 rounded-md"
      >
        <div className="col-span-1">
          <div className="block focus:outline-none">
            <p className="text-sm text-center font-medium text-gray-900">{workout}</p>
          </div>
        </div>
        <div className="flex items-center justify-around col-span-2">
          <p className="text-sm text-center text-gray-600">{description}</p>
        </div>
      </li>
    </>
  )
}
