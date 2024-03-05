/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { PublishedFolioData } from "../API.ts";
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
export declare type PublishedFolioDataUpdateFormInputValues = {
    customData?: string;
};
export declare type PublishedFolioDataUpdateFormValidationValues = {
    customData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PublishedFolioDataUpdateFormOverridesProps = {
    PublishedFolioDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customData?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PublishedFolioDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: PublishedFolioDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    publishedFolioData?: PublishedFolioData;
    onSubmit?: (fields: PublishedFolioDataUpdateFormInputValues) => PublishedFolioDataUpdateFormInputValues;
    onSuccess?: (fields: PublishedFolioDataUpdateFormInputValues) => void;
    onError?: (fields: PublishedFolioDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PublishedFolioDataUpdateFormInputValues) => PublishedFolioDataUpdateFormInputValues;
    onValidate?: PublishedFolioDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PublishedFolioDataUpdateForm(props: PublishedFolioDataUpdateFormProps): React.ReactElement;
