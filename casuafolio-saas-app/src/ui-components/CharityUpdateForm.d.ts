/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Charity } from "../API.ts";
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
export declare type CharityUpdateFormInputValues = {
    isPublished?: boolean;
    intro?: string;
    photos?: string[];
};
export declare type CharityUpdateFormValidationValues = {
    isPublished?: ValidationFunction<boolean>;
    intro?: ValidationFunction<string>;
    photos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CharityUpdateFormOverridesProps = {
    CharityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    photos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CharityUpdateFormProps = React.PropsWithChildren<{
    overrides?: CharityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    charity?: Charity;
    onSubmit?: (fields: CharityUpdateFormInputValues) => CharityUpdateFormInputValues;
    onSuccess?: (fields: CharityUpdateFormInputValues) => void;
    onError?: (fields: CharityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CharityUpdateFormInputValues) => CharityUpdateFormInputValues;
    onValidate?: CharityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CharityUpdateForm(props: CharityUpdateFormProps): React.ReactElement;
