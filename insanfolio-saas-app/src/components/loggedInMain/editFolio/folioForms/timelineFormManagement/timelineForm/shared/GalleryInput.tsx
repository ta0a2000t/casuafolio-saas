import React, { useState, useEffect } from 'react';
import { Modal, Upload } from 'antd';
import { Form, GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import Text from 'antd/es/typography/Text';

import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface DraggableUploadListItemProps {
    originNode: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    file: UploadFile<any>;
  }


  const DraggableUploadListItem = ({ originNode, file }: DraggableUploadListItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
      id: file.uid,
    });
  
    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: 'move',
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        // prevent preview event when drag end
        className={isDragging ? 'is-dragging' : ''}
        {...attributes}
        {...listeners}
      >
        {/* hide error tooltip when dragging */}
        {file.status === 'error' && isDragging ? originNode.props.children : originNode}
      </div>
    );
  };

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const GalleryInput: React.FC<{ galleryLabel: string, maxImages: number, formPath: (string | number)[] }> = ({ galleryLabel, maxImages, formPath }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const form = Form.useFormInstance();

    


    // Helper function to convert URLs to UploadFile objects
    const urlsToUploadFiles = (urls: string[]): UploadFile[] => {
      return urls.map((url, index) => ({
          uid: `-converted-${index}`, // Generating a unique ID
          name: `Image ${index + 1}`, // Placeholder name, adjust as needed
          status: 'done', // Assuming these are already uploaded
          url: url,
      }));
  };

  // Initialize fileList from form values if present
  const initialUrls: string[] = form.getFieldValue(formPath) || [];
  const [fileList, setFileList] = useState<UploadFile[]>(urlsToUploadFiles(initialUrls));

  // Effect to update form values when fileList changes
  useEffect(() => {
      // Update form value to an array of URLs extracted from fileList
      const updatedUrls = fileList.map(file => file.url || '');
      form.setFieldValue(formPath, updatedUrls );
  }, [fileList, form, formPath]);

  // Ensure to update fileList on component mount if the form has initial values
  useEffect(() => {
      const initialFormUrls: string[] = form.getFieldValue(formPath) || [];
      setFileList(urlsToUploadFiles(initialFormUrls));
  }, []); // Empty dependency array means this runs once on mount


  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };



  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  return (
    <div style={{minHeight:100, minWidth:100}}>
        <Text>{galleryLabel}</Text>

    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
    <SortableContext items={fileList.map((i) => i.uid)} strategy={verticalListSortingStrategy}>
    <ImgCrop rotationSlider>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={handlePreview}
        itemRender={(originNode, file) => (
            <DraggableUploadListItem originNode={originNode} file={file} />
          )}
      >
        {fileList.length < maxImages && '+ Upload'}
      </Upload>

      
    </ImgCrop>

    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
        </SortableContext>
      </DndContext>
</div>
    
  );
};



export default GalleryInput;