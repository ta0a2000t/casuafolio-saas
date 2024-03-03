/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SocialLink } from "../API.ts";
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
export declare type SocialLinkUpdateFormInputValues = {
    SocialPlatformType?: string;
    urlPostfix?: string;
};
export declare type SocialLinkUpdateFormValidationValues = {
    SocialPlatformType?: ValidationFunction<string>;
    urlPostfix?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialLinkUpdateFormOverridesProps = {
    SocialLinkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SocialPlatformType?: PrimitiveOverrideProps<SelectFieldProps>;
    urlPostfix?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialLinkUpdateFormProps = React.PropsWithChildren<{
    overrides?: SocialLinkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    socialLink?: SocialLink;
    onSubmit?: (fields: SocialLinkUpdateFormInputValues) => SocialLinkUpdateFormInputValues;
    onSuccess?: (fields: SocialLinkUpdateFormInputValues) => void;
    onError?: (fields: SocialLinkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SocialLinkUpdateFormInputValues) => SocialLinkUpdateFormInputValues;
    onValidate?: SocialLinkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SocialLinkUpdateForm(props: SocialLinkUpdateFormProps): React.ReactElement;
