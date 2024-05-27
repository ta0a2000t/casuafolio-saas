/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
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
export declare type PublishedFolioDataCreateFormInputValues = {
    customTemplate?: string;
};
export declare type PublishedFolioDataCreateFormValidationValues = {
    customTemplate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PublishedFolioDataCreateFormOverridesProps = {
    PublishedFolioDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customTemplate?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PublishedFolioDataCreateFormProps = React.PropsWithChildren<{
    overrides?: PublishedFolioDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PublishedFolioDataCreateFormInputValues) => PublishedFolioDataCreateFormInputValues;
    onSuccess?: (fields: PublishedFolioDataCreateFormInputValues) => void;
    onError?: (fields: PublishedFolioDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PublishedFolioDataCreateFormInputValues) => PublishedFolioDataCreateFormInputValues;
    onValidate?: PublishedFolioDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function PublishedFolioDataCreateForm(props: PublishedFolioDataCreateFormProps): React.ReactElement;
