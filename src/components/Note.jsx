import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) { {/* creates the Note Component */}
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon /> {/* renders the DeleteIcon MUI's Component */}
      </button>
    </div>
  );
}

export default Note;

