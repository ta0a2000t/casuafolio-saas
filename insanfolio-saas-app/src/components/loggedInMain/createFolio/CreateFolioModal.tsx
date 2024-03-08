import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Button, Steps, message, Form, Spin } from 'antd';
import { FolioType , CreateFolioInput} from 'API'; // Assuming 'API' is a placeholder for actual imports
import TemplateSelection from './TemplateSelection';
import FolioDetailsForm, { FolioDetailsFormValues } from './FolioDetailsForm';
import { SmileFilled, LoadingOutlined } from '@ant-design/icons';
import { createFolioService } from 'services/folioServices';

const { Step } = Steps;

interface CreateFolioModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}
const userId = 'c78755bb-82a9-4cba-8888-b1cbaaf9df42'; // Use the actual user ID


const CreateFolioModal: React.FC<CreateFolioModalProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedFolioType, setHighlightedFolioType] = useState<FolioType | null>(null);
  const [selectTemplateTitle, setSelectTemplateTitle] = useState('Select Template');
  const [folioDetailsFormValues, setFolioDetailsFormValues] = useState<FolioDetailsFormValues | undefined>(undefined);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    switch (highlightedFolioType) {
      case FolioType.RESEARCH:
        setSelectTemplateTitle('Research');
        break;
      case FolioType.TIMELINE:
        setSelectTemplateTitle('Timeline');
        break;
      default:
        setSelectTemplateTitle('Select Template');
    }
  }, [highlightedFolioType]);


  const handleNext = () => {

    if (currentStep === 1) { // Here, validate the form before going to the next step
      form.validateFields()
        .then(() => {
          // Proceed to the next step if validation succeeds
          setCurrentStep(currentStep + 1);
          setFolioDetailsFormValues({title: form.getFieldValue('title'), description: form.getFieldValue('description')} as FolioDetailsFormValues);
        })
        .catch((errorInfo: any) => {
          // Show an error message if validation fails
          console.error('Validation failed:', errorInfo);
          messageApi.error('Please correct entries');
        });
    } else {
      // If not at a step requiring validation, just go to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  
  const handleBack = () => {
    if (currentStep === 1) {
      form.validateFields()
        .then(() => {
          setFolioDetailsFormValues({title: form.getFieldValue('title'), description: form.getFieldValue('description')} as FolioDetailsFormValues);
      })    
    }

    setCurrentStep(currentStep - 1);
  };

  const handleOk = async () => {
    console.log('Folio creation logic here');
    // Assuming setLoading and setIsModalVisible are state setter functions available in your component
    setLoading(true);
  
    try {
      await createFolioService({
        title: folioDetailsFormValues?.title,
        description: folioDetailsFormValues?.description,
        folioType: highlightedFolioType,
        userID: userId
      } as CreateFolioInput);
  
      messageApi.success('Created Folio');

      // Close the modal
      setIsModalVisible(false);
    } catch (error) {
      console.error('Failed to create folio:', error);
      messageApi.error('Failed to create Folio');
    } finally {
      // Always turn off loading indicator, whether the operation was successful or not
      setLoading(false);
    }
  };
  
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  

  const steps = [
    {
      title: selectTemplateTitle,
      content: <TemplateSelection highlightedFolioType={highlightedFolioType} setHighlightedFolioType={setHighlightedFolioType} />,
    },
    {
      title: 'Folio Details',
      content: <FolioDetailsForm form={form}
                  setFolioDetailsFormValues={setFolioDetailsFormValues}
                  folioDetailsFormValues={folioDetailsFormValues}
                />,
    },
    {
      icon: <SmileFilled />
    },
  ];

  return (
  <>
    {contextHolder}

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
      {loading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
      </div>
    ) : (
      <>
        <Steps current={currentStep}>
          {steps.map((item, index) => (
            <Step key={index} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div>{steps[currentStep].content}</div>
      </>
    )}

    </Modal>
    </>
  );
};

export default CreateFolioModal;
