/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSocialLinks } from "../graphql/queries";
import { updateSocialLinks } from "../graphql/mutations";
const client = generateClient();
export default function SocialLinksUpdateForm(props) {
  const {
    id: idProp,
    socialLinks: socialLinksModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    facebook: "",
  };
  const [github, setGithub] = React.useState(initialValues.github);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [youtube, setYoutube] = React.useState(initialValues.youtube);
  const [tiktok, setTiktok] = React.useState(initialValues.tiktok);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = socialLinksRecord
      ? { ...initialValues, ...socialLinksRecord }
      : initialValues;
    setGithub(cleanValues.github);
    setLinkedin(cleanValues.linkedin);
    setTwitter(cleanValues.twitter);
    setInstagram(cleanValues.instagram);
    setYoutube(cleanValues.youtube);
    setTiktok(cleanValues.tiktok);
    setFacebook(cleanValues.facebook);
    setErrors({});
  };
  const [socialLinksRecord, setSocialLinksRecord] =
    React.useState(socialLinksModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSocialLinks.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSocialLinks
        : socialLinksModelProp;
      setSocialLinksRecord(record);
    };
    queryData();
  }, [idProp, socialLinksModelProp]);
  React.useEffect(resetStateValues, [socialLinksRecord]);
  const validations = {
    github: [],
    linkedin: [],
    twitter: [],
    instagram: [],
    youtube: [],
    tiktok: [],
    facebook: [],
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
          github: github ?? null,
          linkedin: linkedin ?? null,
          twitter: twitter ?? null,
          instagram: instagram ?? null,
          youtube: youtube ?? null,
          tiktok: tiktok ?? null,
          facebook: facebook ?? null,
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
            query: updateSocialLinks.replaceAll("__typename", ""),
            variables: {
              input: {
                id: socialLinksRecord.id,
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
      {...getOverrideProps(overrides, "SocialLinksUpdateForm")}
      {...rest}
    >
      <TextField
        label="Github"
        isRequired={false}
        isReadOnly={false}
        value={github}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github: value,
              linkedin,
              twitter,
              instagram,
              youtube,
              tiktok,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.github ?? value;
          }
          if (errors.github?.hasError) {
            runValidationTasks("github", value);
          }
          setGithub(value);
        }}
        onBlur={() => runValidationTasks("github", github)}
        errorMessage={errors.github?.errorMessage}
        hasError={errors.github?.hasError}
        {...getOverrideProps(overrides, "github")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin: value,
              twitter,
              instagram,
              youtube,
              tiktok,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin,
              twitter: value,
              instagram,
              youtube,
              tiktok,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin,
              twitter,
              instagram: value,
              youtube,
              tiktok,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Youtube"
        isRequired={false}
        isReadOnly={false}
        value={youtube}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin,
              twitter,
              instagram,
              youtube: value,
              tiktok,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.youtube ?? value;
          }
          if (errors.youtube?.hasError) {
            runValidationTasks("youtube", value);
          }
          setYoutube(value);
        }}
        onBlur={() => runValidationTasks("youtube", youtube)}
        errorMessage={errors.youtube?.errorMessage}
        hasError={errors.youtube?.hasError}
        {...getOverrideProps(overrides, "youtube")}
      ></TextField>
      <TextField
        label="Tiktok"
        isRequired={false}
        isReadOnly={false}
        value={tiktok}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin,
              twitter,
              instagram,
              youtube,
              tiktok: value,
              facebook,
            };
            const result = onChange(modelFields);
            value = result?.tiktok ?? value;
          }
          if (errors.tiktok?.hasError) {
            runValidationTasks("tiktok", value);
          }
          setTiktok(value);
        }}
        onBlur={() => runValidationTasks("tiktok", tiktok)}
        errorMessage={errors.tiktok?.errorMessage}
        hasError={errors.tiktok?.hasError}
        {...getOverrideProps(overrides, "tiktok")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              github,
              linkedin,
              twitter,
              instagram,
              youtube,
              tiktok,
              facebook: value,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
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
          isDisabled={!(idProp || socialLinksModelProp)}
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
              !(idProp || socialLinksModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
