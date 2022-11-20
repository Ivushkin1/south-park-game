import './modal.css';

function Modal({ setFinished, finished }) {
  function rePlay() {
    setFinished(false);
  }
  return (
    <div className={finished ? 'modal active' : 'modal'}>
      <h1>Congrats</h1>
      <button className="btn" onClick={rePlay}>
        PLAY
      </button>
    </div>
  );
}

export default Modal;
