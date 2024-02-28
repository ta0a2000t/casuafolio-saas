/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CharityCreateFormInputValues = {
    isPublished?: boolean;
    intro?: string;
    photos?: string[];
};
export declare type CharityCreateFormValidationValues = {
    isPublished?: ValidationFunction<boolean>;
    intro?: ValidationFunction<string>;
    photos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharityCreateFormOverridesProps = {
    CharityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    photos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharityCreateFormProps = React.PropsWithChildren<{
    overrides?: CharityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CharityCreateFormInputValues) => CharityCreateFormInputValues;
    onSuccess?: (fields: CharityCreateFormInputValues) => void;
    onError?: (fields: CharityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharityCreateFormInputValues) => CharityCreateFormInputValues;
    onValidate?: CharityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CharityCreateForm(props: CharityCreateFormProps): React.ReactElement;
