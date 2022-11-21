/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestModelCreateFormInputValues = {
    Username?: string;
    Password?: string;
};
export declare type TestModelCreateFormValidationValues = {
    Username?: ValidationFunction<string>;
    Password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestModelCreateFormOverridesProps = {
    TestModelCreateFormGrid?: FormProps<GridProps>;
    Username?: FormProps<TextFieldProps>;
    Password?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestModelCreateFormInputValues) => TestModelCreateFormInputValues;
    onSuccess?: (fields: TestModelCreateFormInputValues) => void;
    onError?: (fields: TestModelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TestModelCreateFormInputValues) => TestModelCreateFormInputValues;
    onValidate?: TestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestModelCreateForm(props: TestModelCreateFormProps): React.ReactElement;
