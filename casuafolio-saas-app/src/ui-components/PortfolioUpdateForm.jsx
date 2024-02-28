/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPortfolio } from "../graphql/queries";
import { updatePortfolio } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PortfolioUpdateForm(props) {
  const {
    id: idProp,
    portfolio: portfolioModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isPublished: false,
    intro: "",
    photos: [],
    firstName: "",
    lastName: "",
    resumeLink: "",
  };
  const [isPublished, setIsPublished] = React.useState(
    initialValues.isPublished
  );
  const [intro, setIntro] = React.useState(initialValues.intro);
  const [photos, setPhotos] = React.useState(initialValues.photos);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [resumeLink, setResumeLink] = React.useState(initialValues.resumeLink);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = portfolioRecord
      ? { ...initialValues, ...portfolioRecord }
      : initialValues;
    setIsPublished(cleanValues.isPublished);
    setIntro(cleanValues.intro);
    setPhotos(cleanValues.photos ?? []);
    setCurrentPhotosValue("");
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setResumeLink(cleanValues.resumeLink);
    setErrors({});
  };
  const [portfolioRecord, setPortfolioRecord] =
    React.useState(portfolioModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPortfolio.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPortfolio
        : portfolioModelProp;
      setPortfolioRecord(record);
    };
    queryData();
  }, [idProp, portfolioModelProp]);
  React.useEffect(resetStateValues, [portfolioRecord]);
  const [currentPhotosValue, setCurrentPhotosValue] = React.useState("");
  const photosRef = React.createRef();
  const validations = {
    isPublished: [{ type: "Required" }],
    intro: [],
    photos: [],
    firstName: [{ type: "Required" }],
    lastName: [],
    resumeLink: [],
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
          isPublished,
          intro: intro ?? null,
          photos: photos ?? null,
          firstName,
          lastName: lastName ?? null,
          resumeLink: resumeLink ?? null,
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
            query: updatePortfolio.replaceAll("__typename", ""),
            variables: {
              input: {
                id: portfolioRecord.id,
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
      {...getOverrideProps(overrides, "PortfolioUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Is published"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPublished}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isPublished: value,
              intro,
              photos,
              firstName,
              lastName,
              resumeLink,
            };
            const result = onChange(modelFields);
            value = result?.isPublished ?? value;
          }
          if (errors.isPublished?.hasError) {
            runValidationTasks("isPublished", value);
          }
          setIsPublished(value);
        }}
        onBlur={() => runValidationTasks("isPublished", isPublished)}
        errorMessage={errors.isPublished?.errorMessage}
        hasError={errors.isPublished?.hasError}
        {...getOverrideProps(overrides, "isPublished")}
      ></SwitchField>
      <TextField
        label="Intro"
        isRequired={false}
        isReadOnly={false}
        value={intro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isPublished,
              intro: value,
              photos,
              firstName,
              lastName,
              resumeLink,
            };
            const result = onChange(modelFields);
            value = result?.intro ?? value;
          }
          if (errors.intro?.hasError) {
            runValidationTasks("intro", value);
          }
          setIntro(value);
        }}
        onBlur={() => runValidationTasks("intro", intro)}
        errorMessage={errors.intro?.errorMessage}
        hasError={errors.intro?.hasError}
        {...getOverrideProps(overrides, "intro")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isPublished,
              intro,
              photos: values,
              firstName,
              lastName,
              resumeLink,
            };
            const result = onChange(modelFields);
            values = result?.photos ?? values;
          }
          setPhotos(values);
          setCurrentPhotosValue("");
        }}
        currentFieldValue={currentPhotosValue}
        label={"Photos"}
        items={photos}
        hasError={errors?.photos?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("photos", currentPhotosValue)
        }
        errorMessage={errors?.photos?.errorMessage}
        setFieldValue={setCurrentPhotosValue}
        inputFieldRef={photosRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Photos"
          isRequired={false}
          isReadOnly={false}
          value={currentPhotosValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.photos?.hasError) {
              runValidationTasks("photos", value);
            }
            setCurrentPhotosValue(value);
          }}
          onBlur={() => runValidationTasks("photos", currentPhotosValue)}
          errorMessage={errors.photos?.errorMessage}
          hasError={errors.photos?.hasError}
          ref={photosRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "photos")}
        ></TextField>
      </ArrayField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isPublished,
              intro,
              photos,
              firstName: value,
              lastName,
              resumeLink,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isPublished,
              intro,
              photos,
              firstName,
              lastName: value,
              resumeLink,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Resume link"
        isRequired={false}
        isReadOnly={false}
        value={resumeLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isPublished,
              intro,
              photos,
              firstName,
              lastName,
              resumeLink: value,
            };
            const result = onChange(modelFields);
            value = result?.resumeLink ?? value;
          }
          if (errors.resumeLink?.hasError) {
            runValidationTasks("resumeLink", value);
          }
          setResumeLink(value);
        }}
        onBlur={() => runValidationTasks("resumeLink", resumeLink)}
        errorMessage={errors.resumeLink?.errorMessage}
        hasError={errors.resumeLink?.hasError}
        {...getOverrideProps(overrides, "resumeLink")}
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
          isDisabled={!(idProp || portfolioModelProp)}
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
              !(idProp || portfolioModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
