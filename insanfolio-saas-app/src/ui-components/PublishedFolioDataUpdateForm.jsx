/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPublishedFolioData } from "../graphql/queries";
import { updatePublishedFolioData } from "../graphql/mutations";
const client = generateClient();
export default function PublishedFolioDataUpdateForm(props) {
  const {
    id: idProp,
    publishedFolioData: publishedFolioDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customData: "",
  };
  const [customData, setCustomData] = React.useState(initialValues.customData);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = publishedFolioDataRecord
      ? { ...initialValues, ...publishedFolioDataRecord }
      : initialValues;
    setCustomData(
      typeof cleanValues.customData === "string" ||
        cleanValues.customData === null
        ? cleanValues.customData
        : JSON.stringify(cleanValues.customData)
    );
    setErrors({});
  };
  const [publishedFolioDataRecord, setPublishedFolioDataRecord] =
    React.useState(publishedFolioDataModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPublishedFolioData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPublishedFolioData
        : publishedFolioDataModelProp;
      setPublishedFolioDataRecord(record);
    };
    queryData();
  }, [idProp, publishedFolioDataModelProp]);
  React.useEffect(resetStateValues, [publishedFolioDataRecord]);
  const validations = {
    customData: [{ type: "Required" }, { type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          customData,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePublishedFolioData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: publishedFolioDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PublishedFolioDataUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Custom data"
        isRequired={true}
        isReadOnly={false}
        value={customData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customData: value,
            };
            const result = onChange(modelFields);
            value = result?.customData ?? value;
          }
          if (errors.customData?.hasError) {
            runValidationTasks("customData", value);
          }
          setCustomData(value);
        }}
        onBlur={() => runValidationTasks("customData", customData)}
        errorMessage={errors.customData?.errorMessage}
        hasError={errors.customData?.hasError}
        {...getOverrideProps(overrides, "customData")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || publishedFolioDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || publishedFolioDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
