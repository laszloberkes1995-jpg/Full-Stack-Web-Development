// ALT + SHIFT + F (reformat code)

function Popup({ title,togglePopup }) {
  return (
    <>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            onClick={() => togglePopup()}
            className="popup__btn"
          >
            Confirm
          </button>
          <button
            onClick={() => togglePopup()}
            className="popup__btn popup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}
export default Popup;
