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
export declare type DraftFolioDataCreateFormInputValues = {
    customData?: string;
};
export declare type DraftFolioDataCreateFormValidationValues = {
    customData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DraftFolioDataCreateFormOverridesProps = {
    DraftFolioDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customData?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type DraftFolioDataCreateFormProps = React.PropsWithChildren<{
    overrides?: DraftFolioDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DraftFolioDataCreateFormInputValues) => DraftFolioDataCreateFormInputValues;
    onSuccess?: (fields: DraftFolioDataCreateFormInputValues) => void;
    onError?: (fields: DraftFolioDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DraftFolioDataCreateFormInputValues) => DraftFolioDataCreateFormInputValues;
    onValidate?: DraftFolioDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function DraftFolioDataCreateForm(props: DraftFolioDataCreateFormProps): React.ReactElement;
