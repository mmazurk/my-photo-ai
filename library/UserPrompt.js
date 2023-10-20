
function UserPrompt({date, promptText, remove}) {


    return (
        <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <strong>{date}:</strong>&nbsp;{promptText}
        </span>
        <div>
          <button className="btn btn-outline-primary btn-sm mr-2">
            Run Again
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={remove}>
            Remove Prompt
          </button>
        </div>
      </li>
      </>
    )
}

export default UserPrompt;