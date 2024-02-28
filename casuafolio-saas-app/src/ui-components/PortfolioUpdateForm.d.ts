/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Portfolio } from "../API.ts";
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
export declare type PortfolioUpdateFormInputValues = {
    isPublished?: boolean;
    intro?: string;
    photos?: string[];
    firstName?: string;
    lastName?: string;
    resumeLink?: string;
};
export declare type PortfolioUpdateFormValidationValues = {
    isPublished?: ValidationFunction<boolean>;
    intro?: ValidationFunction<string>;
    photos?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    resumeLink?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioUpdateFormOverridesProps = {
    PortfolioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    photos?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    resumeLink?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PortfolioUpdateFormProps = React.PropsWithChildren<{
    overrides?: PortfolioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    portfolio?: Portfolio;
    onSubmit?: (fields: PortfolioUpdateFormInputValues) => PortfolioUpdateFormInputValues;
    onSuccess?: (fields: PortfolioUpdateFormInputValues) => void;
    onError?: (fields: PortfolioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PortfolioUpdateFormInputValues) => PortfolioUpdateFormInputValues;
    onValidate?: PortfolioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PortfolioUpdateForm(props: PortfolioUpdateFormProps): React.ReactElement;
