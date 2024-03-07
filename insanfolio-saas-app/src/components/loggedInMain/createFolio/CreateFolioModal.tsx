// CreateFolioModal.tsx
import React, { useState } from 'react';
import { Modal, Button, Steps } from 'antd';
import { Folio } from 'API';

const { Step } = Steps;

interface CreateFolioModalProps {
    isModalVisible: boolean;
    setIsModalVisible: (isVisible: boolean) => void;
}
const CreateFolioModal: React.FC<CreateFolioModalProps> = ({isModalVisible, setIsModalVisible}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Select Template',
      content: 'Template Selection Content Here', // Replace with actual content/component
    },
    {
      title: 'Folio Details',
      content: 'Folio Details Form Here', // Replace with actual form component
    },
    // Add more steps as needed
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleOk = () => {
    console.log('Folio creation logic here');
    // Perform folio creation logic here
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Create New Folio"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={[
        currentStep > 0 && (
          <Button key="back" onClick={handleBack}>
            Back
          </Button>
        ),
        currentStep < steps.length - 1 && (
          <Button key="next" onClick={handleNext}>
            Next
          </Button>
        ),
        currentStep === steps.length - 1 && (
          <Button key="submit" type="primary" onClick={handleOk}>
            Create Folio
          </Button>
        ),
      ]}
    >
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div>{steps[currentStep].content}</div>
    </Modal>
  );
};

export default CreateFolioModal;
