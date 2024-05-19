import './ConfirmDelete.scss';

interface ConfirmationDialogProps {
  onDelete: () => void;
  onCancel: () => void;
}

const ConfirmaDelete: React.FC<ConfirmationDialogProps> = ({onDelete,onCancel}) => {

  const handleDelete = () => {
    onDelete();
    
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="BY_confirmDelete">
      <div className="dialog-content">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this project?</p>
        <div className="button-group">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ConfirmaDelete;