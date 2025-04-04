// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerA2IRuntimeServiceException as __BaseException } from "./SageMakerA2IRuntimeServiceException";

/**
 * @public
 */
export interface DeleteHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want to delete.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanLoopResponse {}

/**
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
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
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
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
 * <p>You exceeded
 *       the
 *       maximum number of requests.</p>
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
 * <p>The
 *       request isn't valid. Check the syntax and try again.</p>
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
export interface DescribeHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want information about.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * <p>Information about where the human output will be stored.</p>
 * @public
 */
export interface HumanLoopOutput {
  /**
   * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.</p>
   * @public
   */
  OutputS3Uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HumanLoopStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type HumanLoopStatus = (typeof HumanLoopStatus)[keyof typeof HumanLoopStatus];

/**
 * @public
 */
export interface DescribeHumanLoopResponse {
  /**
   * <p>The creation time when Amazon Augmented AI created the human loop.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why a human loop failed. The failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A failure code that identifies the type of failure.</p>
   *          <p>Possible values: <code>ValidationError</code>, <code>Expired</code>,
   *         <code>InternalError</code>
   *          </p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>The status of the human loop. </p>
   * @public
   */
  HumanLoopStatus: HumanLoopStatus | undefined;

  /**
   * <p>The name of the human loop. The name must be lowercase, unique within the Region in your
   *       account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   * @public
   */
  HumanLoopArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object that contains information about the output of the human loop.</p>
   * @public
   */
  HumanLoopOutput?: HumanLoopOutput | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListHumanLoopsRequest {
  /**
   * <p>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Optional. The order for displaying results. Valid values: <code>Ascending</code> and
   *         <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A token to display the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return. If the total number of available items is more than
   *       the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in
   *       the output. You can use this token to display the next page of results. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about the human loop.</p>
 * @public
 */
export interface HumanLoopSummary {
  /**
   * <p>The name of the human loop.</p>
   * @public
   */
  HumanLoopName?: string | undefined;

  /**
   * <p>The status of the human loop. </p>
   * @public
   */
  HumanLoopStatus?: HumanLoopStatus | undefined;

  /**
   * <p>When Amazon Augmented AI created the human loop.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The reason why the human loop failed. A failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition used to configure the human
   *       loop.</p>
   * @public
   */
  FlowDefinitionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListHumanLoopsResponse {
  /**
   * <p>An array of objects that contain information about the human loops.</p>
   * @public
   */
  HumanLoopSummaries: HumanLoopSummary[] | undefined;

  /**
   * <p>A token to display the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Your request has the same name as another active human loop but has different input data. You cannot start two
 *     human loops with the same name and different input data.</p>
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
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your AWS account. For a list of
 *       Amazon A2I service quotes, see <a href="https://docs.aws.amazon.com/general/latest/gr/a2i.html">Amazon Augmented AI Service Quotes</a>. Delete some resources or request an increase in your
 *       service quota. You can request a quota increase using Service Quotas or the AWS Support
 *       Center. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
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
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;

/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content.</p>
   *          <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>
   * @public
   */
  ContentClassifiers: ContentClassifier[] | undefined;
}

/**
 * <p>An object containing the human loop input in JSON format.</p>
 * @public
 */
export interface HumanLoopInput {
  /**
   * <p>Serialized input from the human loop. The input must be a string representation of a file in JSON format.</p>
   * @public
   */
  InputContent: string | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopRequest {
  /**
   * <p>The name of the human loop.</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition associated with this human
   *       loop.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object that contains information about the human loop.</p>
   * @public
   */
  HumanLoopInput: HumanLoopInput | undefined;

  /**
   * <p>Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data
   *       is free of personally identifiable information and/or free of adult content.</p>
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   * @public
   */
  HumanLoopArn?: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want to stop.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopResponse {}
