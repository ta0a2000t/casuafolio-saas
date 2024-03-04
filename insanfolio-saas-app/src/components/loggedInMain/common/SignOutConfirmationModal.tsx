import React from 'react';
import { Modal } from 'antd';
import { signOut } from 'aws-amplify/auth';

interface SignOutConfirmationModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const SignOutConfirmationModal: React.FC<SignOutConfirmationModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  const handleSignOut = async () => {
    try {
      await signOut();
      onConfirm(); // Navigate or perform additional actions on confirm
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Modal
      title="Confirm Sign Out"
      open={isVisible}
      onOk={handleSignOut}
      onCancel={onCancel}
      okText="Sign Out"
      cancelText="Cancel"
      okButtonProps={{ danger: true }} // This makes the OK button a danger button

    >
      Are you sure you want to sign out?
    </Modal>
  );
};

export default SignOutConfirmationModal;
