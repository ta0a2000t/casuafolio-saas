/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSocialLink } from "../graphql/queries";
import { updateSocialLink } from "../graphql/mutations";
const client = generateClient();
export default function SocialLinkUpdateForm(props) {
  const {
    id: idProp,
    socialLink: socialLinkModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SocialPlatformType: "",
    urlPostfix: "",
  };
  const [SocialPlatformType, setSocialPlatformType] = React.useState(
    initialValues.SocialPlatformType
  );
  const [urlPostfix, setUrlPostfix] = React.useState(initialValues.urlPostfix);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = socialLinkRecord
      ? { ...initialValues, ...socialLinkRecord }
      : initialValues;
    setSocialPlatformType(cleanValues.SocialPlatformType);
    setUrlPostfix(cleanValues.urlPostfix);
    setErrors({});
  };
  const [socialLinkRecord, setSocialLinkRecord] =
    React.useState(socialLinkModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSocialLink.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSocialLink
        : socialLinkModelProp;
      setSocialLinkRecord(record);
    };
    queryData();
  }, [idProp, socialLinkModelProp]);
  React.useEffect(resetStateValues, [socialLinkRecord]);
  const validations = {
    SocialPlatformType: [{ type: "Required" }],
    urlPostfix: [{ type: "Required" }, { type: "URL" }],
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
          SocialPlatformType,
          urlPostfix,
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
            query: updateSocialLink.replaceAll("__typename", ""),
            variables: {
              input: {
                id: socialLinkRecord.id,
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
      {...getOverrideProps(overrides, "SocialLinkUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Social platform type"
        placeholder="Please select an option"
        isDisabled={false}
        value={SocialPlatformType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SocialPlatformType: value,
              urlPostfix,
            };
            const result = onChange(modelFields);
            value = result?.SocialPlatformType ?? value;
          }
          if (errors.SocialPlatformType?.hasError) {
            runValidationTasks("SocialPlatformType", value);
          }
          setSocialPlatformType(value);
        }}
        onBlur={() =>
          runValidationTasks("SocialPlatformType", SocialPlatformType)
        }
        errorMessage={errors.SocialPlatformType?.errorMessage}
        hasError={errors.SocialPlatformType?.hasError}
        {...getOverrideProps(overrides, "SocialPlatformType")}
      >
        <option
          children="Youtube"
          value="YOUTUBE"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption0")}
        ></option>
        <option
          children="Instagram"
          value="INSTAGRAM"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption1")}
        ></option>
        <option
          children="Twitter"
          value="TWITTER"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption2")}
        ></option>
        <option
          children="Linkedin"
          value="LINKEDIN"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption3")}
        ></option>
        <option
          children="Github"
          value="GITHUB"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption4")}
        ></option>
        <option
          children="Facebook"
          value="FACEBOOK"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption5")}
        ></option>
        <option
          children="Tiktok"
          value="TIKTOK"
          {...getOverrideProps(overrides, "SocialPlatformTypeoption6")}
        ></option>
      </SelectField>
      <TextField
        label="Url postfix"
        isRequired={true}
        isReadOnly={false}
        value={urlPostfix}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SocialPlatformType,
              urlPostfix: value,
            };
            const result = onChange(modelFields);
            value = result?.urlPostfix ?? value;
          }
          if (errors.urlPostfix?.hasError) {
            runValidationTasks("urlPostfix", value);
          }
          setUrlPostfix(value);
        }}
        onBlur={() => runValidationTasks("urlPostfix", urlPostfix)}
        errorMessage={errors.urlPostfix?.errorMessage}
        hasError={errors.urlPostfix?.hasError}
        {...getOverrideProps(overrides, "urlPostfix")}
      ></TextField>
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
          isDisabled={!(idProp || socialLinkModelProp)}
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
              !(idProp || socialLinkModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
