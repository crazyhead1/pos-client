import React, {FC, useCallback, useState} from 'react';
import {createUseStyles} from 'react-jss';
import uploadFileCloudIcon from 'assets/upload_file_cloud_icon.svg';
import {useDropzone} from 'react-dropzone';
import {ThemeInterface} from '../../../../interfaces/theme';
import RemoveIcon from 'assets/component/RemoveIcon.svg';
import {Colors} from '../../colors';
import IconButton from '../icon-button';
import {Accept} from 'react-dropzone';

const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
  return {
    dragAndDropText: {
      color: 'rgba(48, 46, 56, 0.6)',
      '& span': {
        fontWeight: 'bold',
      },
    },
    label: {
      color: '#222b45',
      fontSize: 12,
      fontWeight: theme.font.weightSemibold,
      marginBottom: 3,
      marginLeft: 10,
    },
    uploadBox: {
      alignItems: 'center',
      background: '#F5F7FB',
      borderColor: '#E7ECF5',
      borderRadius: 10,
      borderStyle: 'dotted',
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 150,
    },
    uploadBoxActive: {
      borderColor: '#6135FB',
    },
    uploadBoxRow: {
      flexDirection: 'row',
      minHeight: '36px !important',
      alignItems: 'center',
      '& p': {
        marginTop: 'unset !important',
        marginLeft: '10px',
      },
    },
  };
});

export interface IFileUploadResponse {
  fileName: string;
  base64StringFile: string;
}

interface ComponentProps {
  label?: string;
  className?: string;
  theme?: ThemeInterface;
  acceptedFileTypes?: Accept;
  fieldValue?: string;
  type?: string;
  onChange?: (e: IFileUploadResponse) => void;
  multiple?: boolean;
}

enum LayoutType {
  Column = 'column',
  Row = 'row',
}

const FileUpload: FC<ComponentProps> = ({
  label,
  className,
  theme,
  acceptedFileTypes,
  type = LayoutType.Column,
  onChange,
  multiple,
}) => {
  const classes = useStylesFromThemeFunction({theme});
  const onDrop = useCallback(async (acceptedFiles:any) => {
    await handleFileUpload(acceptedFiles[0]);
  }, []);
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    multiple,
  });

  const handleFileUpload = async (file: File) => {
    if (file) {
      const fileBase64 = await getBase64FromFile(file);
      if (onChange)
        onChange({
          fileName: file.name,
          base64StringFile: fileBase64,
        });
    }
  };

  const files = acceptedFiles.map((file: File, i) => (
    <span
      key={file.name}
      style={{
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {file.name}
      <IconButton
        style={{
          border: `1px solid ${Colors.gray}`,
          borderRadius: 5,
          display: 'flex',
        }}
        onClick={() => remove(i)}
      >
        <RemoveIcon fill={Colors.grayLighter} />
      </IconButton>
    </span>
  ));

  const remove = (file: number) => {
    const newFiles = [...files];
    acceptedFiles.splice(file, 1);
  };

  const getBase64FromFile = async (file: File) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    await new Promise<void>((resolve, reject) => {
      reader.onload = () => resolve();
      reader.onerror = () => reject();
    });
    return btoa(reader.result as string);
  };

  return (
    <div className={className}>
      {label && <div className={classes.label}>{label}</div>}
      <div
        className={`${classes.uploadBox} ${isDragActive ? classes.uploadBoxActive : ''} ${
          type === LayoutType.Row && classes.uploadBoxRow
        }`}
        {...getRootProps()}
      >
        <img src={uploadFileCloudIcon} alt="upload-file" />

        <input {...getInputProps()} />
        <p className={classes.dragAndDropText}>
          {acceptedFiles.length <= 0 &&
            (isDragActive ? 'Drop your file here' : 'You can drag-and-drop or click to select')}
          {files}
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
