export default function ModalContent({ onClose }) {
    return (
      <div className="modal">
        <div className="modalContent">
          <h3>Congratulations!</h3>
          <p>You are one of the few lucky people that actually found my easter egg!</p>
          <button className="submit" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }