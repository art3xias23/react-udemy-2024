import {useEffect} from 'react';
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  var counter = 0;
  useEffect(() => {

  const timer = setTimeout(() => {
    counter = counter +1;
    console.log(`Timer Set ${counter}`);
    onConfirm();
  }, 3000);

    return () => {
    counter = counter +1;
    console.log(`Cleaning up ${counter}`);
      clearTimeout(timer); 
    }

  }, [onConfirm]);

    counter = counter +1;
    console.log(`Rendering ${counter}`);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
