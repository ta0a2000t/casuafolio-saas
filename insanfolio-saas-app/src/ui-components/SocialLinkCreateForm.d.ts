/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SocialLinkCreateFormInputValues = {
    SocialPlatformType?: string;
    urlPostfix?: string;
};
export declare type SocialLinkCreateFormValidationValues = {
    SocialPlatformType?: ValidationFunction<string>;
    urlPostfix?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialLinkCreateFormOverridesProps = {
    SocialLinkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SocialPlatformType?: PrimitiveOverrideProps<SelectFieldProps>;
    urlPostfix?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialLinkCreateFormProps = React.PropsWithChildren<{
    overrides?: SocialLinkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SocialLinkCreateFormInputValues) => SocialLinkCreateFormInputValues;
    onSuccess?: (fields: SocialLinkCreateFormInputValues) => void;
    onError?: (fields: SocialLinkCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SocialLinkCreateFormInputValues) => SocialLinkCreateFormInputValues;
    onValidate?: SocialLinkCreateFormValidationValues;
} & React.CSSProperties>;
export default function SocialLinkCreateForm(props: SocialLinkCreateFormProps): React.ReactElement;
