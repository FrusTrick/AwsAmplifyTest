import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Username?: string | null;
  readonly Password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestModel = LazyLoading extends LazyLoadingDisabled ? EagerTestModel : LazyTestModel

export declare const TestModel: (new (init: ModelInit<TestModel>) => TestModel) & {
  copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel>) => MutableModel<TestModel> | void): TestModel;
}