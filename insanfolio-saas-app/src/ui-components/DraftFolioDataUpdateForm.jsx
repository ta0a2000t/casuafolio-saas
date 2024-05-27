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
import { getDraftFolioData } from "../graphql/queries";
import { updateDraftFolioData } from "../graphql/mutations";
const client = generateClient();
export default function DraftFolioDataUpdateForm(props) {
  const {
    id: idProp,
    draftFolioData: draftFolioDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customTemplate: "",
  };
  const [customTemplate, setCustomTemplate] = React.useState(
    initialValues.customTemplate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = draftFolioDataRecord
      ? { ...initialValues, ...draftFolioDataRecord }
      : initialValues;
    setCustomTemplate(
      typeof cleanValues.customTemplate === "string" ||
        cleanValues.customTemplate === null
        ? cleanValues.customTemplate
        : JSON.stringify(cleanValues.customTemplate)
    );
    setErrors({});
  };
  const [draftFolioDataRecord, setDraftFolioDataRecord] = React.useState(
    draftFolioDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDraftFolioData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDraftFolioData
        : draftFolioDataModelProp;
      setDraftFolioDataRecord(record);
    };
    queryData();
  }, [idProp, draftFolioDataModelProp]);
  React.useEffect(resetStateValues, [draftFolioDataRecord]);
  const validations = {
    customTemplate: [{ type: "JSON" }],
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
          customTemplate: customTemplate ?? null,
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
            query: updateDraftFolioData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: draftFolioDataRecord.id,
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
      {...getOverrideProps(overrides, "DraftFolioDataUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Custom template"
        isRequired={false}
        isReadOnly={false}
        value={customTemplate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customTemplate: value,
            };
            const result = onChange(modelFields);
            value = result?.customTemplate ?? value;
          }
          if (errors.customTemplate?.hasError) {
            runValidationTasks("customTemplate", value);
          }
          setCustomTemplate(value);
        }}
        onBlur={() => runValidationTasks("customTemplate", customTemplate)}
        errorMessage={errors.customTemplate?.errorMessage}
        hasError={errors.customTemplate?.hasError}
        {...getOverrideProps(overrides, "customTemplate")}
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
          isDisabled={!(idProp || draftFolioDataModelProp)}
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
              !(idProp || draftFolioDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
