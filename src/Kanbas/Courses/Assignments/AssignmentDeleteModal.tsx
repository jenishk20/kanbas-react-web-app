
const AssignmentDeleteModal = ({ isModalOpen, confirmDelete, cancelDelete } : {
  isModalOpen: boolean,
  confirmDelete: () => void,
  cancelDelete: () => void
}) => {
  return (
    <div
      className={`modal fade ${isModalOpen ? 'show' : ''}`}
      style={{ display: isModalOpen ? 'block' : 'none' }}
      id="deleteAssignmentModal"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden={!isModalOpen}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Are you sure you want to delete the assignment?
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={cancelDelete}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={confirmDelete}>
              Delete Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDeleteModal;
