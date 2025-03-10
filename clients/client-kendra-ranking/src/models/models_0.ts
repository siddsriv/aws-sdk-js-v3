// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KendraRankingServiceException as __BaseException } from "./KendraRankingServiceException";

/**
 * <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A conflict occurred with the request. Please fix any
 *             inconsistencies with your resources and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Sets additional capacity units configured for your
 *             rescore execution plan. A rescore execution plan is an
 *             Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API. You can add and
 *             remove capacity units to fit your usage requirements.</p>
 * @public
 */
export interface CapacityUnitsConfiguration {
  /**
   * <p>The amount of extra capacity for your rescore execution
   *             plan.</p>
   *          <p>A single extra capacity unit for a rescore execution
   *             plan provides 0.01 rescore requests per second. You can add
   *             up to 1000 extra capacity units.</p>
   * @public
   */
  RescoreCapacityUnits: number | undefined;
}

/**
 * <p>A key-value pair that identifies or categorizes a rescore
 *             execution plan. A rescore execution plan is an
 *             Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API. You can also use
 *             a tag to help control access to a rescore execution plan.
 *             A tag key and value can consist of Unicode letters, digits,
 *             white space, and any of the following symbols: _ . : / = + - @.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag. Keys are not case sensitive and must
   *             be unique.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value associated with the tag. The value can be an
   *             empty string but it can't be null.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRescoreExecutionPlanRequest {
  /**
   * <p>A name for the rescore execution plan.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the rescore execution plan.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>You can set additional capacity units to meet the
   *             needs of your rescore execution plan. You are given a single
   *             capacity unit by default. If you want to use the default
   *             capacity, you don't set additional capacity units. For more
   *             information on the default capacity and additional capacity
   *             units, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html">Adjusting
   *                 capacity</a>.</p>
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;

  /**
   * <p>A list of key-value pairs that identify or categorize your
   *             rescore execution plan. You can also use tags to help control
   *             access to the rescore execution plan. Tag keys and values can
   *             consist of Unicode letters, digits, white space, and any of
   *             the following symbols: _ . : / = + - @.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token that you provide to identify the request to create
   *             a rescore execution plan. Multiple calls to the
   *             <code>CreateRescoreExecutionPlanRequest</code> API with the
   *             same client token will create only one rescore execution plan.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRescoreExecutionPlanResponse {
  /**
   * <p>The identifier of the rescore execution plan.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rescore
   *             execution plan.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>An issue occurred with the internal server used for
 *             your Amazon Kendra Intelligent Ranking service.
 *             Please wait a few minutes and try again, or contact
 *             <a href="http://aws.amazon.com/contact-us/">Support</a>
 *             for help.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have exceeded the set limits for your
 *             Amazon Kendra Intelligent Ranking service. Please
 *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>
 *             for more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.
 *             Please reduce the number of requests and try again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input fails to satisfy the constraints set by
 *             the Amazon Kendra Intelligent Ranking service.
 *             Please provide the correct input and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteRescoreExecutionPlanRequest {
  /**
   * <p>The identifier of the rescore execution plan that you
   *             want to delete.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The resource you want to use doesn't exist. Please
 *             check you have provided the correct resource and try
 *             again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeRescoreExecutionPlanRequest {
  /**
   * <p>The identifier of the rescore execution plan that you want
   *             to get information on.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RescoreExecutionPlanStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type RescoreExecutionPlanStatus = (typeof RescoreExecutionPlanStatus)[keyof typeof RescoreExecutionPlanStatus];

/**
 * @public
 */
export interface DescribeRescoreExecutionPlanResponse {
  /**
   * <p>The identifier of the rescore execution plan.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rescore execution
   *             plan.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name for the rescore execution plan.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the rescore execution plan.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The capacity units set for the rescore execution plan.
   *             A capacity of zero indicates that the rescore execution
   *             plan is using the default capacity. For more information on the
   *             default capacity and additional capacity units, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html">Adjusting
   *                 capacity</a>.</p>
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;

  /**
   * <p>The Unix timestamp of when the rescore execution plan was
   *             created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp of when the rescore execution plan was
   *             last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The current status of the rescore execution plan. When the
   *             value is <code>ACTIVE</code>, the rescore execution plan is
   *             ready for use. If the <code>Status</code> field value is
   *             <code>FAILED</code>, the <code>ErrorMessage</code> field
   *             contains a message that explains why.</p>
   * @public
   */
  Status?: RescoreExecutionPlanStatus | undefined;

  /**
   * <p>When the <code>Status</code> field value is
   *             <code>FAILED</code>, the <code>ErrorMessage</code> field
   *             contains a message that explains why.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListRescoreExecutionPlansRequest {
  /**
   * <p>If the response is truncated, Amazon Kendra Intelligent
   *             Ranking returns a pagination token in the response. You can use
   *             this pagination token to retrieve the next set of rescore
   *             execution plans.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of rescore execution plans to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information for a rescore execution plan. A rescore
 *             execution plan is an Amazon Kendra Intelligent Ranking
 *             resource used for provisioning the <code>Rescore</code> API.</p>
 * @public
 */
export interface RescoreExecutionPlanSummary {
  /**
   * <p>The name of the rescore execution plan.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the rescore execution plan.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Unix timestamp when the rescore execution plan
   *             was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Unix timestamp when the rescore execution plan
   *             was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The current status of the rescore execution plan. When
   *             the value is <code>ACTIVE</code>, the rescore execution
   *             plan is ready for use.</p>
   * @public
   */
  Status?: RescoreExecutionPlanStatus | undefined;
}

/**
 * @public
 */
export interface ListRescoreExecutionPlansResponse {
  /**
   * <p>An array of summary information for one or more rescore
   *             execution plans.</p>
   * @public
   */
  SummaryItems?: RescoreExecutionPlanSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Kendra Intelligent
   *             Ranking returns a pagination token in the response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request information for listing tags associated with
 *             a rescore execution plan. A rescore execution plan is an
 *             Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rescore execution
   *             plan to get a list of tags for.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an
 *             HTTP 200 response.</p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the rescore execution
   *             plan.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The resource you want to use is unavailable. Please
 *             check you have provided the correct resource
 *             information and try again.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about a document from a search service such
 *             as OpenSearch (self managed). Amazon Kendra Intelligent
 *             Ranking uses this information to rank and score on.</p>
 * @public
 */
export interface Document {
  /**
   * <p>The identifier of the document from the search service.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The optional group identifier of the document from the search
   *             service. Documents with the same group identifier are grouped
   *             together and processed as one document within the service.</p>
   * @public
   */
  GroupId?: string | undefined;

  /**
   * <p>The title of the search service's document.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The body text of the search service's document.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>The title of the search service's document represented as
   *             a list of tokens or words. You must choose to provide
   *             <code>Title</code> or <code>TokenizedTitle</code>. You cannot
   *             provide both.</p>
   * @public
   */
  TokenizedTitle?: string[] | undefined;

  /**
   * <p>The body text of the search service's document represented
   *             as a list of tokens or words. You must choose to provide
   *             <code>Body</code> or <code>TokenizedBody</code>. You cannot
   *             provide both.</p>
   * @public
   */
  TokenizedBody?: string[] | undefined;

  /**
   * <p>The original document score or rank from the search service.
   *             Amazon Kendra Intelligent Ranking gives the document a new
   *             score or rank based on its intelligent search algorithms.</p>
   * @public
   */
  OriginalScore: number | undefined;
}

/**
 * @public
 */
export interface RescoreRequest {
  /**
   * <p>The identifier of the rescore execution plan. A rescore
   *             execution plan is an Amazon Kendra Intelligent Ranking
   *             resource used for provisioning the <code>Rescore</code> API.</p>
   * @public
   */
  RescoreExecutionPlanId: string | undefined;

  /**
   * <p>The input query from the search service.</p>
   * @public
   */
  SearchQuery: string | undefined;

  /**
   * <p>The list of documents for Amazon Kendra Intelligent
   *             Ranking to rescore or rank on.</p>
   * @public
   */
  Documents: Document[] | undefined;
}

/**
 * <p>A result item for a document with a new relevancy score.</p>
 * @public
 */
export interface RescoreResultItem {
  /**
   * <p>The identifier of the document from the search service.</p>
   * @public
   */
  DocumentId?: string | undefined;

  /**
   * <p>The relevancy score or rank that Amazon Kendra
   *             Intelligent Ranking gives to the result.</p>
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface RescoreResult {
  /**
   * <p>The identifier associated with the scores that
   *             Amazon Kendra Intelligent Ranking gives to the
   *             results. Amazon Kendra Intelligent Ranking
   *             rescores or re-ranks the results for the search service.</p>
   * @public
   */
  RescoreId?: string | undefined;

  /**
   * <p>A list of result items for documents with new relevancy
   *             scores. The results are in descending order.</p>
   * @public
   */
  ResultItems?: RescoreResultItem[] | undefined;
}

/**
 * <p>The request information for tagging a rescore execution
 *             plan. A rescore execution plan is an Amazon Kendra
 *             Intelligent Ranking resource used for provisioning the
 *             <code>Rescore</code> API.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rescore execution
   *             plan to tag.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to a rescore execution plan.
   *             If a tag already exists, the existing value is replaced
   *             with the new value.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>If the action is successful, the service sends back an
 *             HTTP 200 response with an empty HTTP body.</p>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request information to remove a tag from a rescore
 *             execution plan. A rescore execution plan is an
 *             Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rescore execution
   *             plan to remove the tag.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the rescore execution
   *             plan. If a tag key does not exist on the resource, it is
   *             ignored.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>If the action is successful, the service sends back an
 *             HTTP 200 response with an empty HTTP body.</p>
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateRescoreExecutionPlanRequest {
  /**
   * <p>The identifier of the rescore execution plan that you want
   *             to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A new name for the rescore execution plan.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A new description for the rescore execution plan.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>You can set additional capacity units to meet the needs
   *             of your rescore execution plan. You are given a single capacity
   *             unit by default. If you want to use the default capacity, you
   *             don't set additional capacity units. For more information on the
   *             default capacity and additional capacity units, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html">Adjusting capacity</a>.</p>
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;
}
