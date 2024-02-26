/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SocialLinksCreateFormInputValues = {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    facebook?: string;
};
export declare type SocialLinksCreateFormValidationValues = {
    github?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    youtube?: ValidationFunction<string>;
    tiktok?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialLinksCreateFormOverridesProps = {
    SocialLinksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    github?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin?: PrimitiveOverrideProps<TextFieldProps>;
    twitter?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    youtube?: PrimitiveOverrideProps<TextFieldProps>;
    tiktok?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialLinksCreateFormProps = React.PropsWithChildren<{
    overrides?: SocialLinksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SocialLinksCreateFormInputValues) => SocialLinksCreateFormInputValues;
    onSuccess?: (fields: SocialLinksCreateFormInputValues) => void;
    onError?: (fields: SocialLinksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SocialLinksCreateFormInputValues) => SocialLinksCreateFormInputValues;
    onValidate?: SocialLinksCreateFormValidationValues;
} & React.CSSProperties>;
export default function SocialLinksCreateForm(props: SocialLinksCreateFormProps): React.ReactElement;
