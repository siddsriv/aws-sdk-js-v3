// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MTurkServiceException as __BaseException } from "./MTurkServiceException";

/**
 * @public
 */
export interface AcceptQualificationRequestRequest {
  /**
   * <p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>
   * @public
   */
  QualificationRequestId: string | undefined;

  /**
   * <p>
   *             The value of the Qualification. You can omit this value if you are using the
   *             presence or absence of the Qualification as the basis for a HIT requirement.
   *         </p>
   * @public
   */
  IntegerValue?: number | undefined;
}

/**
 * @public
 */
export interface AcceptQualificationRequestResponse {}

/**
 * <p>Your request is invalid.</p>
 * @public
 */
export class RequestError extends __BaseException {
  readonly name: "RequestError" = "RequestError";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  TurkErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestError, __BaseException>) {
    super({
      name: "RequestError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestError.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}

/**
 * <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 * @public
 */
export class ServiceFault extends __BaseException {
  readonly name: "ServiceFault" = "ServiceFault";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  TurkErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFault, __BaseException>) {
    super({
      name: "ServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFault.prototype);
    this.Message = opts.Message;
    this.TurkErrorCode = opts.TurkErrorCode;
  }
}

/**
 * @public
 */
export interface ApproveAssignmentRequest {
  /**
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   * @public
   */
  RequesterFeedback?: string | undefined;

  /**
   * <p>
   *             A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>.
   *         </p>
   * @public
   */
  OverrideRejection?: boolean | undefined;
}

/**
 * @public
 */
export interface ApproveAssignmentResponse {}

/**
 * @public
 * @enum
 */
export const AssignmentStatus = {
  Approved: "Approved",
  Rejected: "Rejected",
  Submitted: "Submitted",
} as const;

/**
 * @public
 */
export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus];

/**
 * <p> The Assignment data structure represents a single assignment
 *             of a HIT to a Worker. The assignment tracks the Worker's efforts to
 *             complete the HIT, and contains the results for later retrieval.
 *         </p>
 * @public
 */
export interface Assignment {
  /**
   * <p> A unique identifier for the assignment.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * <p> The ID of the HIT.</p>
   * @public
   */
  HITId?: string | undefined;

  /**
   * <p> The status of the assignment.</p>
   * @public
   */
  AssignmentStatus?: AssignmentStatus | undefined;

  /**
   * <p> If results have been submitted, AutoApprovalTime is the date
   *             and time the results of the assignment results are considered
   *             Approved automatically if they have not already been explicitly
   *             approved or rejected by the Requester. This value is derived from the
   *             auto-approval delay specified by the Requester in the HIT. This value
   *             is omitted from the assignment if the Worker has not yet submitted
   *             results.</p>
   * @public
   */
  AutoApprovalTime?: Date | undefined;

  /**
   * <p> The date and time the Worker accepted the assignment.</p>
   * @public
   */
  AcceptTime?: Date | undefined;

  /**
   * <p> If the Worker has submitted results, SubmitTime is the date
   *             and time the assignment was submitted. This value is omitted from the
   *             assignment if the Worker has not yet submitted results.</p>
   * @public
   */
  SubmitTime?: Date | undefined;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             approved the results, ApprovalTime is the date and time the Requester
   *             approved the results. This value is omitted from the assignment if
   *             the Requester has not yet approved the results.</p>
   * @public
   */
  ApprovalTime?: Date | undefined;

  /**
   * <p> If the Worker has submitted results and the Requester has
   *             rejected the results, RejectionTime is the date and time the
   *             Requester rejected the results.</p>
   * @public
   */
  RejectionTime?: Date | undefined;

  /**
   * <p> The date and time of the deadline for the assignment. This
   *             value is derived from the deadline specification for the HIT and the
   *             date and time the Worker accepted the HIT.</p>
   * @public
   */
  Deadline?: Date | undefined;

  /**
   * <p> The Worker's answers submitted for the HIT contained in a
   *             QuestionFormAnswers document, if the Worker provides an answer. If
   *             the Worker does not provide any answers, Answer may contain a
   *             QuestionFormAnswers document, or Answer may be empty.</p>
   * @public
   */
  Answer?: string | undefined;

  /**
   * <p> The feedback string included with the call to the
   *             ApproveAssignment operation or the RejectAssignment operation, if the
   *             Requester approved or rejected the assignment and specified feedback.</p>
   * @public
   */
  RequesterFeedback?: string | undefined;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerRequest {
  /**
   * <p>The ID of the Qualification type to use for the assigned Qualification.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>
   *             The ID of the Worker to whom the Qualification is being assigned.
   *             Worker IDs are included with submitted HIT assignments and Qualification requests.
   *         </p>
   * @public
   */
  WorkerId: string | undefined;

  /**
   * <p>The value of the Qualification to assign.</p>
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * <p>
   *             Specifies whether to send a notification email message to the Worker
   *             saying that the qualification was assigned to the Worker.
   *             Note: this is true by default.
   *         </p>
   * @public
   */
  SendNotification?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateQualificationWithWorkerResponse {}

/**
 * <p>An object representing a Bonus payment paid to a Worker.</p>
 * @public
 */
export interface BonusPayment {
  /**
   * <p>The ID of the Worker to whom the bonus was paid.</p>
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * <p>A string representing a currency amount.</p>
   * @public
   */
  BonusAmount?: string | undefined;

  /**
   * <p>The ID of the assignment associated with this bonus payment.</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>The Reason text given when the bonus was granted, if any.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The date and time of when the bonus was granted.</p>
   * @public
   */
  GrantTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const Comparator = {
  DoesNotExist: "DoesNotExist",
  EqualTo: "EqualTo",
  Exists: "Exists",
  GreaterThan: "GreaterThan",
  GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
  In: "In",
  LessThan: "LessThan",
  LessThanOrEqualTo: "LessThanOrEqualTo",
  NotEqualTo: "NotEqualTo",
  NotIn: "NotIn",
} as const;

/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITRequest {
  /**
   * <p>The ID of the HIT to extend.</p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>The number of additional assignments to request for this HIT.</p>
   * @public
   */
  NumberOfAdditionalAssignments: number | undefined;

  /**
   * <p>
   *             A unique identifier for this request, which allows you to retry the call on error
   *             without extending the HIT multiple times.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server. If the extend HIT already exists in the system
   *             from a previous call using the same <code>UniqueRequestToken</code>,
   *             subsequent calls will return an error with a message containing the request ID.
   *         </p>
   * @public
   */
  UniqueRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAdditionalAssignmentsForHITResponse {}

/**
 * <p> This data structure is the data type for the AnswerKey
 *             parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.
 *         </p>
 * @public
 */
export interface ParameterMapEntry {
  /**
   * <p> The QuestionID from the HIT that is used to identify which
   *             question requires Mechanical Turk to score as part of the
   *             ScoreMyKnownAnswers/2011-09-01 Review Policy.
   *         </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p> The list of answers to the question specified in the
   *             MapEntry Key element. The Worker must match all values in order for
   *             the answer to be scored correctly.
   *         </p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * <p> Name of the parameter from the Review policy.
 *         </p>
 * @public
 */
export interface PolicyParameter {
  /**
   * <p> Name of the parameter from the list of Review Polices.
   *         </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p> The list of values of the Parameter</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p> List of ParameterMapEntry objects.
   *         </p>
   * @public
   */
  MapEntries?: ParameterMapEntry[] | undefined;
}

/**
 * <p> HIT Review Policy data structures represent HIT review
 *             policies, which you specify when you create a HIT.
 *         </p>
 * @public
 */
export interface ReviewPolicy {
  /**
   * <p> Name of a Review Policy: SimplePlurality/2011-09-01 or
   *             ScoreMyKnownAnswers/2011-09-01
   *         </p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Name of the parameter from the Review policy.</p>
   * @public
   */
  Parameters?: PolicyParameter[] | undefined;
}

/**
 * <p> The HITLayoutParameter data structure defines parameter
 *             values used with a HITLayout. A HITLayout is a reusable Amazon
 *             Mechanical Turk project template used to provide Human Intelligence
 *             Task (HIT) question data for CreateHIT.
 *         </p>
 * @public
 */
export interface HITLayoutParameter {
  /**
   * <p> The name of the parameter in the HITLayout.
   *         </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value substituted for the parameter referenced in the
   *             HITLayout.
   *         </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HITAccessActions = {
  Accept: "Accept",
  DiscoverPreviewAndAccept: "DiscoverPreviewAndAccept",
  PreviewAndAccept: "PreviewAndAccept",
} as const;

/**
 * @public
 */
export type HITAccessActions = (typeof HITAccessActions)[keyof typeof HITAccessActions];

/**
 * <p>The Locale data structure represents a geographical region or location.</p>
 * @public
 */
export interface Locale {
  /**
   * <p> The country of the locale. Must be a valid ISO 3166 country
   *             code. For example, the code US refers to the United States of
   *             America.
   *         </p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The state or subdivision of the locale. A valid ISO 3166-2
   *             subdivision code. For example, the code WA refers to the state of
   *             Washington.</p>
   * @public
   */
  Subdivision?: string | undefined;
}

/**
 * <p>
 *             The QualificationRequirement data structure describes a Qualification that a Worker must have
 *             before the Worker is allowed to accept a HIT.
 *             A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or
 *             see the HIT in search results.
 *         </p>
 * @public
 */
export interface QualificationRequirement {
  /**
   * <p> The ID of the Qualification type for the requirement.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The kind of comparison to make against a Qualification's
   *             value. You can compare a Qualification's value to an IntegerValue to
   *             see if it is LessThan, LessThanOrEqualTo, GreaterThan,
   *             GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You
   *             can compare it to a LocaleValue to see if it is EqualTo, or
   *             NotEqualTo the LocaleValue. You can check to see if the value is In
   *             or NotIn a set of IntegerValue
   *             or LocaleValue values. Lastly, a
   *             Qualification requirement can also
   *             test if a Qualification Exists or
   *             DoesNotExist in the user's profile,
   *             regardless of its value.
   *         </p>
   * @public
   */
  Comparator: Comparator | undefined;

  /**
   * <p> The integer value to compare against the Qualification's
   *             value. IntegerValue must not be present if Comparator is Exists or
   *             DoesNotExist. IntegerValue can only be used if the Qualification type
   *             has an integer value; it cannot be used with the Worker_Locale
   *             QualificationType ID. When performing a set comparison by using the
   *             In or the NotIn comparator, you can use up to 15 IntegerValue
   *             elements in a QualificationRequirement data structure.
   *         </p>
   * @public
   */
  IntegerValues?: number[] | undefined;

  /**
   * <p> The locale value to compare against the Qualification's
   *             value. The local value must be a valid ISO 3166 country code or
   *             supports ISO 3166-2 subdivisions. LocaleValue can only be used with a
   *             Worker_Locale QualificationType ID. LocaleValue can only be used with
   *             the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use
   *             a single LocaleValue element when using the EqualTo or NotEqualTo
   *             comparators. When performing a set comparison by using the In or the
   *             NotIn comparator, you can use up to 30 LocaleValue elements in a
   *             QualificationRequirement data structure.
   *         </p>
   * @public
   */
  LocaleValues?: Locale[] | undefined;

  /**
   * <p> DEPRECATED: Use the <code>ActionsGuarded</code> field instead.
   *             If RequiredToPreview is true, the question data for the HIT will not be shown
   *             when a Worker whose Qualifications do not meet this requirement tries
   *             to preview the HIT. That is, a Worker's Qualifications must meet all
   *             of the requirements for which RequiredToPreview is true in order to
   *             preview the HIT. If a Worker meets all of the requirements where
   *             RequiredToPreview is true (or if there are no such requirements), but
   *             does not meet all of the requirements for the HIT, the Worker will be
   *             allowed to preview the HIT's question data, but will not be allowed
   *             to accept and complete the HIT. The default is false. This should not
   *             be used in combination with the <code>ActionsGuarded</code> field.
   *         </p>
   *
   * @deprecated
   * @public
   */
  RequiredToPreview?: boolean | undefined;

  /**
   * <p> Setting this attribute prevents Workers whose Qualifications do not meet
   *             this QualificationRequirement from taking the specified action. Valid arguments include
   *             "Accept" (Worker cannot accept the HIT, but can preview the HIT and see it in their search results),
   *             "PreviewAndAccept" (Worker cannot accept or preview the HIT, but can see the HIT in their search results),
   *             and "DiscoverPreviewAndAccept" (Worker cannot accept, preview, or see the HIT in their search results). It's possible for you to create a HIT with multiple
   *             QualificationRequirements (which can have different values for the ActionGuarded attribute). In this case,
   *             the Worker is only permitted to perform an action when they have met all QualificationRequirements guarding
   *             the action. The actions in the order of least restrictive to most restrictive are Discover, Preview and Accept.
   *             For example, if a Worker meets all QualificationRequirements that are set to DiscoverPreviewAndAccept, but do
   *             not meet all requirements that are set with PreviewAndAccept, then the Worker will be able to Discover, i.e. see the
   *             HIT in their search result, but will not be able to Preview or Accept the HIT. ActionsGuarded should not be used in combination with the
   *             <code>RequiredToPreview</code> field.
   *         </p>
   * @public
   */
  ActionsGuarded?: HITAccessActions | undefined;
}

/**
 * @public
 */
export interface CreateHITRequest {
  /**
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   * @public
   */
  LifetimeInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of time, in seconds, that a Worker has to complete the HIT after accepting it.
   *             If a Worker does not complete the assignment within the specified duration,
   *             the assignment is considered abandoned. If the HIT is still active
   *             (that is, its lifetime has not elapsed), the assignment becomes available
   *             for other users to find and accept.
   *         </p>
   * @public
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   * @public
   */
  Reward: string | undefined;

  /**
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   * @public
   */
  Keywords?: string | undefined;

  /**
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *             The data the person completing the HIT uses to produce the results.
   *         </p>
   *         <p>
   *             Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure,
   *             or an HTMLQuestion data structure. The XML question data must not be larger than
   *             64 kilobytes (65,535 bytes) in size, including whitespace.
   *         </p>
   *         <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>
   * @public
   */
  Question?: string | undefined;

  /**
   * <p>
   *             An arbitrary data field.
   *             The RequesterAnnotation parameter lets your application attach arbitrary data
   *             to the HIT for tracking purposes.
   *             For example, this parameter could be an identifier internal to the Requester's application
   *             that corresponds with the HIT.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT.
   *             It is not shown to the Worker, or any other Requester.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter may be different for each HIT you submit.
   *             It does not affect how your HITs are grouped.
   *         </p>
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;

  /**
   * <p>
   *             A unique identifier for this request which allows you to retry the call
   *             on error without creating duplicate HITs.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server.
   *             If the HIT already exists in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error
   *             with a message containing the HITId.
   *         </p>
   *         <note>
   *             <p>
   *                 Note: It is your responsibility to ensure uniqueness of the token.
   *                 The unique token expires after 24 hours. Subsequent calls using the same
   *                 UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *             </p>
   *         </note>
   * @public
   */
  UniqueRequestToken?: string | undefined;

  /**
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p>
   *             The HITLayoutId allows you to use a pre-existing HIT design with placeholder values
   *             and create an additional HIT by providing those values as HITLayoutParameters.
   *         </p>
   *         <p>
   *             Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *         </p>
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   * @public
   */
  HITLayoutParameters?: HITLayoutParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const HITReviewStatus = {
  MarkedForReview: "MarkedForReview",
  NotReviewed: "NotReviewed",
  ReviewedAppropriate: "ReviewedAppropriate",
  ReviewedInappropriate: "ReviewedInappropriate",
} as const;

/**
 * @public
 */
export type HITReviewStatus = (typeof HITReviewStatus)[keyof typeof HITReviewStatus];

/**
 * @public
 * @enum
 */
export const HITStatus = {
  Assignable: "Assignable",
  Disposed: "Disposed",
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
  Unassignable: "Unassignable",
} as const;

/**
 * @public
 */
export type HITStatus = (typeof HITStatus)[keyof typeof HITStatus];

/**
 * <p> The HIT data structure represents a single HIT, including
 *             all the information necessary for a Worker to accept and complete the
 *             HIT.</p>
 * @public
 */
export interface HIT {
  /**
   * <p> A unique identifier for the HIT.</p>
   * @public
   */
  HITId?: string | undefined;

  /**
   * <p>The ID of the HIT type of this HIT</p>
   * @public
   */
  HITTypeId?: string | undefined;

  /**
   * <p> The ID of the HIT Group of this HIT.</p>
   * @public
   */
  HITGroupId?: string | undefined;

  /**
   * <p> The ID of the HIT Layout of this HIT.</p>
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * <p> The date and time the HIT was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p> The title of the HIT.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p> A general description of the HIT.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> The data the Worker completing the HIT uses produce the
   *             results. This is either either a QuestionForm, HTMLQuestion or an
   *             ExternalQuestion data structure.</p>
   * @public
   */
  Question?: string | undefined;

  /**
   * <p> One or more words or phrases that describe the HIT,
   *             separated by commas. Search terms similar to the keywords of a HIT
   *             are more likely to have the HIT in the search results.</p>
   * @public
   */
  Keywords?: string | undefined;

  /**
   * <p>The status of the HIT and its assignments. Valid Values are
   *             Assignable | Unassignable | Reviewable | Reviewing | Disposed.
   *         </p>
   * @public
   */
  HITStatus?: HITStatus | undefined;

  /**
   * <p>The number of times the HIT can be accepted and completed
   *             before the HIT becomes unavailable.
   *         </p>
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * <p>A string representing a currency amount.</p>
   * @public
   */
  Reward?: string | undefined;

  /**
   * <p>The amount of time, in seconds, after the Worker submits an
   *             assignment for the HIT that the results are automatically approved by
   *             Amazon Mechanical Turk. This is the amount of time the Requester has
   *             to reject an assignment submitted by a Worker before the assignment
   *             is auto-approved and the Worker is paid.
   *         </p>
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * <p>The date and time the HIT expires.</p>
   * @public
   */
  Expiration?: Date | undefined;

  /**
   * <p> The length of time, in seconds, that a Worker has to
   *             complete the HIT after accepting it.</p>
   * @public
   */
  AssignmentDurationInSeconds?: number | undefined;

  /**
   * <p> An arbitrary data field the Requester who created the HIT
   *             can use. This field is visible only to the creator of the HIT.</p>
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;

  /**
   * <p> Indicates the review status of the HIT. Valid Values are
   *             NotReviewed | MarkedForReview | ReviewedAppropriate |
   *             ReviewedInappropriate.</p>
   * @public
   */
  HITReviewStatus?: HITReviewStatus | undefined;

  /**
   * <p> The number of assignments for this HIT that are being
   *             previewed or have been accepted by Workers, but have not yet been
   *             submitted, returned, or abandoned.</p>
   * @public
   */
  NumberOfAssignmentsPending?: number | undefined;

  /**
   * <p> The number of assignments for this HIT that are available
   *             for Workers to accept.</p>
   * @public
   */
  NumberOfAssignmentsAvailable?: number | undefined;

  /**
   * <p> The number of assignments for this HIT that have been
   *             approved or rejected.</p>
   * @public
   */
  NumberOfAssignmentsCompleted?: number | undefined;
}

/**
 * @public
 */
export interface CreateHITResponse {
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface CreateHITTypeRequest {
  /**
   * <p>
   *             The number of seconds after an assignment for the HIT has been submitted,
   *             after which the assignment is considered Approved automatically
   *             unless the Requester explicitly rejects it.
   *         </p>
   * @public
   */
  AutoApprovalDelayInSeconds?: number | undefined;

  /**
   * <p>
   *             The amount of time, in seconds, that a Worker has to complete the HIT after accepting it.
   *             If a Worker does not complete the assignment within the specified duration,
   *             the assignment is considered abandoned. If the HIT is still active
   *             (that is, its lifetime has not elapsed), the assignment becomes available
   *             for other users to find and accept.
   *         </p>
   * @public
   */
  AssignmentDurationInSeconds: number | undefined;

  /**
   * <p>
   *             The amount of money the Requester will pay a Worker for successfully completing the HIT.
   *         </p>
   * @public
   */
  Reward: string | undefined;

  /**
   * <p>
   *             The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains.
   *             On the Amazon Mechanical Turk web site, the HIT title appears in search results,
   *             and everywhere the HIT is mentioned.
   *         </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>
   *             One or more words or phrases that describe the HIT, separated by commas.
   *             These words are used in searches to find HITs.
   *         </p>
   * @public
   */
  Keywords?: string | undefined;

  /**
   * <p>
   *             A general description of the HIT. A description includes detailed information about the kind of task
   *             the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded
   *             view of search results, and in the HIT and assignment screens. A good description gives the user enough
   *             information to evaluate the HIT before accepting it.
   *         </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *             Conditions that a Worker's Qualifications must meet in order
   *             to accept the HIT. A HIT can have between zero and ten
   *             Qualification requirements. All requirements must be met in
   *             order for a Worker to accept the HIT. Additionally, other
   *             actions can be restricted using the <code>ActionsGuarded</code>
   *             field on each <code>QualificationRequirement</code> structure.
   *         </p>
   * @public
   */
  QualificationRequirements?: QualificationRequirement[] | undefined;
}

/**
 * @public
 */
export interface CreateHITTypeResponse {
  /**
   * <p> The ID of the newly registered HIT type.</p>
   * @public
   */
  HITTypeId?: string | undefined;
}

/**
 * @public
 */
export interface CreateHITWithHITTypeRequest {
  /**
   * <p>The HIT type ID you want to create this HIT with.</p>
   * @public
   */
  HITTypeId: string | undefined;

  /**
   * <p>
   *             The number of times the HIT can be accepted and completed before the HIT becomes unavailable.
   *         </p>
   * @public
   */
  MaxAssignments?: number | undefined;

  /**
   * <p>
   *             An amount of time, in seconds, after which the HIT is no longer available for users to accept.
   *             After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches,
   *             even if not all of the assignments for the HIT have been accepted.
   *         </p>
   * @public
   */
  LifetimeInSeconds: number | undefined;

  /**
   * <p>
   *             The data the person completing the HIT uses to produce the results.
   *         </p>
   *         <p>
   *             Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure,
   *             or an HTMLQuestion data structure. The XML question data must not be larger than
   *             64 kilobytes (65,535 bytes) in size, including whitespace.
   *         </p>
   *         <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>
   * @public
   */
  Question?: string | undefined;

  /**
   * <p>
   *             An arbitrary data field.
   *             The RequesterAnnotation parameter lets your application attach arbitrary data
   *             to the HIT for tracking purposes.
   *             For example, this parameter could be an identifier internal to the Requester's application
   *             that corresponds with the HIT.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT.
   *             It is not shown to the Worker, or any other Requester.
   *         </p>
   *         <p>
   *             The RequesterAnnotation parameter may be different for each HIT you submit.
   *             It does not affect how your HITs are grouped.
   *         </p>
   * @public
   */
  RequesterAnnotation?: string | undefined;

  /**
   * <p>
   *             A unique identifier for this request which allows you to retry the call
   *             on error without creating duplicate HITs.
   *             This is useful in cases such as network timeouts where it is unclear whether or not
   *             the call succeeded on the server.
   *             If the HIT already exists in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error
   *             with a message containing the HITId.
   *         </p>
   *         <note>
   *             <p>
   *                 Note: It is your responsibility to ensure uniqueness of the token.
   *                 The unique token expires after 24 hours. Subsequent calls using the same
   *                 UniqueRequestToken made after the 24 hour limit could create duplicate HITs.
   *             </p>
   *         </note>
   * @public
   */
  UniqueRequestToken?: string | undefined;

  /**
   * <p>
   *             The Assignment-level Review Policy applies to the assignments under the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p>
   *             The HIT-level Review Policy applies to the HIT.
   *             You can specify for Mechanical Turk to take various actions based on the policy.
   *         </p>
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p>
   *             The HITLayoutId allows you to use a pre-existing HIT design with placeholder values
   *             and create an additional HIT by providing those values as HITLayoutParameters.
   *         </p>
   *         <p>
   *             Constraints: Either a Question parameter or a HITLayoutId parameter must be provided.
   *         </p>
   * @public
   */
  HITLayoutId?: string | undefined;

  /**
   * <p>
   *             If the HITLayoutId is provided, any placeholder values must be filled in with values
   *             using the HITLayoutParameter structure. For more information, see HITLayout.
   *         </p>
   * @public
   */
  HITLayoutParameters?: HITLayoutParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateHITWithHITTypeResponse {
  /**
   * <p> Contains the newly created HIT data. For a description of
   *             the HIT data structure as it appears in responses, see the HIT Data
   *             Structure documentation.
   *         </p>
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 * @enum
 */
export const QualificationTypeStatus = {
  Active: "Active",
  Inactive: "Inactive",
} as const;

/**
 * @public
 */
export type QualificationTypeStatus = (typeof QualificationTypeStatus)[keyof typeof QualificationTypeStatus];

/**
 * @public
 */
export interface CreateQualificationTypeRequest {
  /**
   * <p> The name you give to the Qualification type. The type name
   *             is used to represent the Qualification to Workers, and to find the
   *             type using a Qualification type search. It must be unique across all
   *             of your Qualification types.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more words or phrases that describe the Qualification
   *             type, separated by commas. The keywords of a type make the type
   *             easier to find during a search.</p>
   * @public
   */
  Keywords?: string | undefined;

  /**
   * <p>A long description for the Qualification type. On the Amazon
   *             Mechanical Turk website, the long description is displayed when a
   *             Worker examines a Qualification type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The initial status of the Qualification type.</p>
   *         <p>Constraints: Valid values are: Active | Inactive</p>
   * @public
   */
  QualificationTypeStatus: QualificationTypeStatus | undefined;

  /**
   * <p>The number of seconds that a Worker must wait after
   *             requesting a Qualification of the Qualification type before the
   *             worker can retry the Qualification request.</p>
   *         <p>Constraints: None. If not specified, retries are disabled and
   *             Workers can request a Qualification of this type only once, even if
   *             the Worker has not been granted the Qualification. It is not possible
   *             to disable retries for a Qualification type after it has been created
   *             with retries enabled. If you want to disable retries, you must delete
   *             existing retry-enabled Qualification type and then create a new
   *             Qualification type with retries disabled.</p>
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * <p>
   *             The questions for the Qualification test a Worker must answer
   *             correctly to obtain a Qualification of this type. If this parameter
   *             is specified,
   *             <code>TestDurationInSeconds</code>
   *             must also be specified.
   *         </p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a
   *             QuestionForm data structure. This parameter cannot be specified if
   *             AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request
   *             the Qualification without answering any questions.</p>
   * @public
   */
  Test?: string | undefined;

  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter, in the form of an AnswerKey data structure.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes.</p>
   *         <p>Constraints: None. If not specified, you must process
   *             Qualification requests manually.</p>
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * <p>The number of seconds the Worker has to complete the
   *             Qualification test, starting from the time the Worker requests the
   *             Qualification.</p>
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * <p>Specifies whether requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this
   *             parameter cannot be true.</p>
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * <p>The Qualification value to use for automatically granted
   *             Qualifications. This parameter is used only if the AutoGranted
   *             parameter is true.</p>
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * <p> The QualificationType data structure represents a
 *             Qualification type, a description of a property of a Worker that must
 *             match the requirements of a HIT for the Worker to be able to accept
 *             the HIT. The type also describes how a Worker can obtain a
 *             Qualification of that type, such as through a Qualification test.
 *         </p>
 * @public
 */
export interface QualificationType {
  /**
   * <p> A unique identifier for the Qualification type. A
   *             Qualification type is given a Qualification type ID when you call the
   *             CreateQualificationType operation.
   *         </p>
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * <p> The date and time the Qualification type was created.
   *         </p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p> The name of the Qualification type. The type name is used to
   *             identify the type, and to find the type using a Qualification type
   *             search.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p> A long description for the Qualification type.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p> One or more words or phrases that describe theQualification
   *             type, separated by commas. The Keywords make the type easier to find
   *             using a search.
   *         </p>
   * @public
   */
  Keywords?: string | undefined;

  /**
   * <p> The status of the Qualification type. A Qualification type's
   *             status determines if users can apply to receive a Qualification of
   *             this type, and if HITs can be created with requirements based on this
   *             type. Valid values are Active | Inactive.
   *         </p>
   * @public
   */
  QualificationTypeStatus?: QualificationTypeStatus | undefined;

  /**
   * <p> The questions for a Qualification test associated with this
   *             Qualification type that a user can take to obtain a Qualification of
   *             this type. This parameter must be specified if AnswerKey is present.
   *             A Qualification type cannot have both a specified Test parameter and
   *             an AutoGranted value of true.
   *         </p>
   * @public
   */
  Test?: string | undefined;

  /**
   * <p> The amount of time, in seconds, given to a Worker to
   *             complete the Qualification test, beginning from the time the Worker
   *             requests the Qualification.
   *         </p>
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * <p>The answers to the Qualification test specified in the Test
   *             parameter.</p>
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * <p> The amount of time, in seconds, Workers must wait after
   *             taking the Qualification test before they can take it again. Workers
   *             can take a Qualification test multiple times if they were not granted
   *             the Qualification from a previous attempt, or if the test offers a
   *             gradient score and they want a better score. If not specified,
   *             retries are disabled and Workers can request a Qualification only
   *             once.
   *         </p>
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * <p> Specifies whether the Qualification type is one that a user
   *             can request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test. This value is False for Qualifications
   *             assigned automatically by the system. Valid values are True | False.
   *         </p>
   * @public
   */
  IsRequestable?: boolean | undefined;

  /**
   * <p>Specifies that requests for the Qualification type are
   *             granted immediately, without prompting the Worker with a
   *             Qualification test. Valid values are True | False.</p>
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * <p> The Qualification integer value to use for automatically
   *             granted Qualifications, if AutoGranted is true. This is 1 by default.
   *         </p>
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * @public
 */
export interface CreateQualificationTypeResponse {
  /**
   * <p>The created Qualification type, returned as a
   *             QualificationType data structure.</p>
   * @public
   */
  QualificationType?: QualificationType | undefined;
}

/**
 * @public
 */
export interface CreateWorkerBlockRequest {
  /**
   * <p>The ID of the Worker to block.</p>
   * @public
   */
  WorkerId: string | undefined;

  /**
   * <p>A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.</p>
   * @public
   */
  Reason: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerBlockResponse {}

/**
 * @public
 */
export interface DeleteHITRequest {
  /**
   * <p>The ID of the HIT to be deleted.</p>
   * @public
   */
  HITId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHITResponse {}

/**
 * @public
 */
export interface DeleteQualificationTypeRequest {
  /**
   * <p>The ID of the QualificationType to dispose.</p>
   * @public
   */
  QualificationTypeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQualificationTypeResponse {}

/**
 * @public
 */
export interface DeleteWorkerBlockRequest {
  /**
   * <p>The ID of the Worker to unblock.</p>
   * @public
   */
  WorkerId: string | undefined;

  /**
   * <p>A message that explains the reason for unblocking the Worker. The Worker does not see this message.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerBlockResponse {}

/**
 * @public
 */
export interface DisassociateQualificationFromWorkerRequest {
  /**
   * <p>The ID of the Worker who possesses the Qualification to be revoked.</p>
   * @public
   */
  WorkerId: string | undefined;

  /**
   * <p>The ID of the Qualification type of the Qualification to be revoked.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQualificationFromWorkerResponse {}

/**
 * @public
 * @enum
 */
export const EventType = {
  AssignmentAbandoned: "AssignmentAbandoned",
  AssignmentAccepted: "AssignmentAccepted",
  AssignmentApproved: "AssignmentApproved",
  AssignmentRejected: "AssignmentRejected",
  AssignmentReturned: "AssignmentReturned",
  AssignmentSubmitted: "AssignmentSubmitted",
  HITCreated: "HITCreated",
  HITDisposed: "HITDisposed",
  HITExpired: "HITExpired",
  HITExtended: "HITExtended",
  HITReviewable: "HITReviewable",
  Ping: "Ping",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 */
export interface GetAccountBalanceRequest {}

/**
 * @public
 */
export interface GetAccountBalanceResponse {
  /**
   * <p>A string representing a currency amount.</p>
   * @public
   */
  AvailableBalance?: string | undefined;

  /**
   * <p>A string representing a currency amount.</p>
   * @public
   */
  OnHoldBalance?: string | undefined;
}

/**
 * @public
 */
export interface GetAssignmentRequest {
  /**
   * <p>The ID of the Assignment to be retrieved.</p>
   * @public
   */
  AssignmentId: string | undefined;
}

/**
 * @public
 */
export interface GetAssignmentResponse {
  /**
   * <p> The assignment. The response includes one Assignment
   *             element.
   *         </p>
   * @public
   */
  Assignment?: Assignment | undefined;

  /**
   * <p> The HIT associated with this assignment. The response
   *             includes one HIT element.</p>
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface GetFileUploadURLRequest {
  /**
   * <p>The ID of the assignment that contains the question with a
   *             FileUploadAnswer.</p>
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * <p>The identifier of the question with a FileUploadAnswer, as
   *             specified in the QuestionForm of the HIT.</p>
   * @public
   */
  QuestionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetFileUploadURLResponse {
  /**
   * <p> A temporary URL for the file that the Worker uploaded for
   *             the answer.
   *         </p>
   * @public
   */
  FileUploadURL?: string | undefined;
}

/**
 * @public
 */
export interface GetHITRequest {
  /**
   * <p>The ID of the HIT to be retrieved.</p>
   * @public
   */
  HITId: string | undefined;
}

/**
 * @public
 */
export interface GetHITResponse {
  /**
   * <p> Contains the requested HIT data.</p>
   * @public
   */
  HIT?: HIT | undefined;
}

/**
 * @public
 */
export interface GetQualificationScoreRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The ID of the Worker whose Qualification is being updated.</p>
   * @public
   */
  WorkerId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QualificationStatus = {
  Granted: "Granted",
  Revoked: "Revoked",
} as const;

/**
 * @public
 */
export type QualificationStatus = (typeof QualificationStatus)[keyof typeof QualificationStatus];

/**
 * <p>The Qualification data structure represents a Qualification
 *             assigned to a user, including the Qualification type and the value
 *             (score).</p>
 * @public
 */
export interface Qualification {
  /**
   * <p> The ID of the Qualification type for the Qualification.</p>
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * <p> The ID of the Worker who possesses the Qualification.
   *         </p>
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * <p> The date and time the Qualification was granted to the
   *             Worker. If the Worker's Qualification was revoked, and then
   *             re-granted based on a new Qualification request, GrantTime is the
   *             date and time of the last call to the AcceptQualificationRequest
   *             operation.</p>
   * @public
   */
  GrantTime?: Date | undefined;

  /**
   * <p> The value (score) of the Qualification, if the Qualification
   *             has an integer value.</p>
   * @public
   */
  IntegerValue?: number | undefined;

  /**
   * <p>The Locale data structure represents a geographical region or location.</p>
   * @public
   */
  LocaleValue?: Locale | undefined;

  /**
   * <p> The status of the Qualification. Valid values are Granted |
   *             Revoked.</p>
   * @public
   */
  Status?: QualificationStatus | undefined;
}

/**
 * @public
 */
export interface GetQualificationScoreResponse {
  /**
   * <p> The Qualification data structure of the Qualification
   *             assigned to a user, including the Qualification type and the value
   *             (score).
   *         </p>
   * @public
   */
  Qualification?: Qualification | undefined;
}

/**
 * @public
 */
export interface GetQualificationTypeRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   * @public
   */
  QualificationTypeId: string | undefined;
}

/**
 * @public
 */
export interface GetQualificationTypeResponse {
  /**
   * <p> The returned Qualification Type</p>
   * @public
   */
  QualificationType?: QualificationType | undefined;
}

/**
 * @public
 */
export interface ListAssignmentsForHITRequest {
  /**
   * <p>The ID of the HIT.</p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>Pagination token</p>
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
  /**
   * <p>The status of the assignments to return: Submitted | Approved
   *             | Rejected</p>
   * @public
   */
  AssignmentStatuses?: AssignmentStatus[] | undefined;
}

/**
 * @public
 */
export interface ListAssignmentsForHITResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The collection of Assignment data structures returned by
   *             this call.</p>
   * @public
   */
  Assignments?: Assignment[] | undefined;
}

/**
 * @public
 */
export interface ListBonusPaymentsRequest {
  /**
   * <p>The ID of the HIT associated with the bonus payments to
   *             retrieve. If not specified, all bonus payments for all assignments
   *             for the given HIT are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   * @public
   */
  HITId?: string | undefined;

  /**
   * <p>The ID of the assignment associated with the bonus payments
   *             to retrieve. If specified, only bonus payments for the given
   *             assignment are returned. Either the HITId parameter or the
   *             AssignmentId parameter must be specified</p>
   * @public
   */
  AssignmentId?: string | undefined;

  /**
   * <p>Pagination token</p>
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBonusPaymentsResponse {
  /**
   * <p>The number of bonus payments on this page in the filtered
   *             results list, equivalent to the number of bonus payments being
   *             returned by this call.
   *         </p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A successful request to the ListBonusPayments operation
   *             returns a list of BonusPayment objects.
   *         </p>
   * @public
   */
  BonusPayments?: BonusPayment[] | undefined;
}

/**
 * @public
 */
export interface ListHITsRequest {
  /**
   * <p>Pagination token</p>
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHITsResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of HITs on this page in the filtered results list,
   *             equivalent to the number of HITs being returned by this call.</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeRequest {
  /**
   * <p>
   *             The ID of the Qualification type to use when querying HITs.
   *         </p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>Pagination Token</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHITsForQualificationTypeResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.	</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 */
export interface ListQualificationRequestsRequest {
  /**
   * <p>The ID of the QualificationType.</p>
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> The QualificationRequest data structure represents a request
 *             a Worker has made for a Qualification.
 *         </p>
 * @public
 */
export interface QualificationRequest {
  /**
   * <p>The ID of the Qualification request, a unique identifier
   *             generated when the request was submitted.
   *
   *         </p>
   * @public
   */
  QualificationRequestId?: string | undefined;

  /**
   * <p> The ID of the Qualification type the Worker is requesting,
   *             as returned by the CreateQualificationType operation.
   *         </p>
   * @public
   */
  QualificationTypeId?: string | undefined;

  /**
   * <p> The ID of the Worker requesting the Qualification.</p>
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * <p> The contents of the Qualification test that was presented to
   *             the Worker, if the type has a test and the Worker has submitted
   *             answers. This value is identical to the QuestionForm associated with
   *             the Qualification type at the time the Worker requests the
   *             Qualification.</p>
   * @public
   */
  Test?: string | undefined;

  /**
   * <p> The Worker's answers for the Qualification type's test
   *             contained in a QuestionFormAnswers document, if the type has a test
   *             and the Worker has submitted answers. If the Worker does not provide
   *             any answers, Answer may be empty.
   *         </p>
   * @public
   */
  Answer?: string | undefined;

  /**
   * <p>The date and time the Qualification request had a status of
   *             Submitted. This is either the time the Worker submitted answers for a
   *             Qualification test, or the time the Worker requested the
   *             Qualification if the Qualification type does not have a test.
   *         </p>
   * @public
   */
  SubmitTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListQualificationRequestsResponse {
  /**
   * <p>The number of Qualification requests on this page in the filtered results list,
   *             equivalent to the number of Qualification requests being returned by this call.</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Qualification request. The response includes one
   *             QualificationRequest element
   *             for each Qualification request returned
   *             by the query.</p>
   * @public
   */
  QualificationRequests?: QualificationRequest[] | undefined;
}

/**
 * @public
 */
export interface ListQualificationTypesRequest {
  /**
   * <p> A text query against all of the searchable attributes of
   *             Qualification types.
   *         </p>
   * @public
   */
  Query?: string | undefined;

  /**
   * <p>Specifies that only Qualification types that a user can
   *             request through the Amazon Mechanical Turk web site, such as by
   *             taking a Qualification test, are returned as results of the search.
   *             Some Qualification types, such as those assigned automatically by the
   *             system, cannot be requested directly by users. If false, all
   *             Qualification types, including those managed by the system, are
   *             considered. Valid values are True | False.
   *         </p>
   * @public
   */
  MustBeRequestable: boolean | undefined;

  /**
   * <p> Specifies that only Qualification types that the Requester
   *             created are returned. If false, the operation returns all
   *             Qualification types.
   *         </p>
   * @public
   */
  MustBeOwnedByCaller?: boolean | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The maximum number of results to return in a single call.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListQualificationTypesResponse {
  /**
   * <p> The number of Qualification types on this page in the
   *             filtered results list, equivalent to the number of types this
   *             operation returns.
   *         </p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The list of QualificationType elements returned by the
   *             query.
   *         </p>
   * @public
   */
  QualificationTypes?: QualificationType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReviewableHITStatus = {
  Reviewable: "Reviewable",
  Reviewing: "Reviewing",
} as const;

/**
 * @public
 */
export type ReviewableHITStatus = (typeof ReviewableHITStatus)[keyof typeof ReviewableHITStatus];

/**
 * @public
 */
export interface ListReviewableHITsRequest {
  /**
   * <p>
   *             The ID of the HIT type of the HITs to consider for the query.
   *             If not specified, all HITs for the Reviewer are considered
   *         </p>
   * @public
   */
  HITTypeId?: string | undefined;

  /**
   * <p>
   *             Can be either <code>Reviewable</code> or <code>Reviewing</code>.
   *             Reviewable is the default value.
   *         </p>
   * @public
   */
  Status?: ReviewableHITStatus | undefined;

  /**
   * <p>Pagination Token</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReviewableHITsResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The number of HITs on this page in the filtered results
   *             list, equivalent to the number of HITs being returned by this call.
   *         </p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   * @public
   */
  HITs?: HIT[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReviewPolicyLevel = {
  Assignment: "Assignment",
  HIT: "HIT",
} as const;

/**
 * @public
 */
export type ReviewPolicyLevel = (typeof ReviewPolicyLevel)[keyof typeof ReviewPolicyLevel];

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITRequest {
  /**
   * <p>The unique identifier of the HIT to retrieve review results for.</p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>
   *             The Policy Level(s) to retrieve review results for - HIT or Assignment.
   *             If omitted, the default behavior is to retrieve all data for both policy levels.
   *             For a list of all the described policies, see Review Policies.
   *         </p>
   * @public
   */
  PolicyLevels?: ReviewPolicyLevel[] | undefined;

  /**
   * <p>
   *             Specify if the operation should retrieve a list of the actions taken executing
   *             the Review Policies and their outcomes.
   *         </p>
   * @public
   */
  RetrieveActions?: boolean | undefined;

  /**
   * <p>
   *             Specify if the operation should retrieve a list of the results computed by the Review Policies.
   *         </p>
   * @public
   */
  RetrieveResults?: boolean | undefined;

  /**
   * <p>Pagination token</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Limit the number of results returned.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ReviewActionStatus = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  Intended: "Intended",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type ReviewActionStatus = (typeof ReviewActionStatus)[keyof typeof ReviewActionStatus];

/**
 * <p> Both the AssignmentReviewReport and the HITReviewReport
 *             elements contains the ReviewActionDetail data structure. This
 *             structure is returned multiple times for each action specified in the
 *             Review Policy.
 *         </p>
 * @public
 */
export interface ReviewActionDetail {
  /**
   * <p>The unique identifier for the action.</p>
   * @public
   */
  ActionId?: string | undefined;

  /**
   * <p> The nature of the action itself. The Review Policy is
   *             responsible for examining the HIT and Assignments, emitting results,
   *             and deciding which other actions will be necessary. </p>
   * @public
   */
  ActionName?: string | undefined;

  /**
   * <p> The specific HITId or AssignmentID targeted by the action.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p> The type of object in TargetId.</p>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p> The current disposition of the action: INTENDED, SUCCEEDED,
   *             FAILED, or CANCELLED.
   *         </p>
   * @public
   */
  Status?: ReviewActionStatus | undefined;

  /**
   * <p> The date when the action was completed.</p>
   * @public
   */
  CompleteTime?: Date | undefined;

  /**
   * <p> A description of the outcome of the review.</p>
   * @public
   */
  Result?: string | undefined;

  /**
   * <p> Present only when the Results have a FAILED Status.</p>
   * @public
   */
  ErrorCode?: string | undefined;
}

/**
 * <p> This data structure is returned multiple times for each
 *             result specified in the Review Policy.
 *         </p>
 * @public
 */
export interface ReviewResultDetail {
  /**
   * <p> A unique identifier of the Review action result.
   *         </p>
   * @public
   */
  ActionId?: string | undefined;

  /**
   * <p>The HITID or AssignmentId about which this result was taken.
   *             Note that HIT-level Review Policies will often emit results about
   *             both the HIT itself and its Assignments, while Assignment-level
   *             review policies generally only emit results about the Assignment
   *             itself.
   *         </p>
   * @public
   */
  SubjectId?: string | undefined;

  /**
   * <p> The type of the object from the SubjectId field.</p>
   * @public
   */
  SubjectType?: string | undefined;

  /**
   * <p> Specifies the QuestionId the result is describing. Depending
   *             on whether the TargetType is a HIT or Assignment this results could
   *             specify multiple values. If TargetType is HIT and QuestionId is
   *             absent, then the result describes results of the HIT, including the
   *             HIT agreement score. If ObjectType is Assignment and QuestionId is
   *             absent, then the result describes the Worker's performance on the
   *             HIT.
   *         </p>
   * @public
   */
  QuestionId?: string | undefined;

  /**
   * <p> Key identifies the particular piece of reviewed information.
   *         </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p> The values of Key provided by the review policies you have
   *             selected.
   *         </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p> Contains both ReviewResult and ReviewAction elements for a
 *             particular HIT.
 *         </p>
 * @public
 */
export interface ReviewReport {
  /**
   * <p> A list of ReviewResults objects for each action specified in
   *             the Review Policy.
   *         </p>
   * @public
   */
  ReviewResults?: ReviewResultDetail[] | undefined;

  /**
   * <p> A list of ReviewAction objects for each action specified in
   *             the Review Policy.
   *         </p>
   * @public
   */
  ReviewActions?: ReviewActionDetail[] | undefined;
}

/**
 * @public
 */
export interface ListReviewPolicyResultsForHITResponse {
  /**
   * <p>The HITId of the HIT for which results have been returned.</p>
   * @public
   */
  HITId?: string | undefined;

  /**
   * <p> The name of the Assignment-level Review Policy. This
   *             contains only the PolicyName element.
   *         </p>
   * @public
   */
  AssignmentReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p>The name of the HIT-level Review Policy. This contains only
   *             the PolicyName element.</p>
   * @public
   */
  HITReviewPolicy?: ReviewPolicy | undefined;

  /**
   * <p> Contains both ReviewResult and ReviewAction elements for an
   *             Assignment.
   *         </p>
   * @public
   */
  AssignmentReviewReport?: ReviewReport | undefined;

  /**
   * <p>Contains both ReviewResult and ReviewAction elements for a particular HIT.
   *         </p>
   * @public
   */
  HITReviewReport?: ReviewReport | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerBlocksRequest {
  /**
   * <p>Pagination token</p>
   * @public
   */
  NextToken?: string | undefined;

  MaxResults?: number | undefined;
}

/**
 * <p> The WorkerBlock data structure represents a Worker who has
 *             been blocked. It has two elements: the WorkerId and the Reason for
 *             the block.
 *         </p>
 * @public
 */
export interface WorkerBlock {
  /**
   * <p> The ID of the Worker who accepted the HIT.</p>
   * @public
   */
  WorkerId?: string | undefined;

  /**
   * <p> A message explaining the reason the Worker was blocked.
   *         </p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerBlocksResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The number of assignments on the page in the filtered
   *             results list, equivalent to the number of assignments returned by
   *             this call.</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The list of WorkerBlocks, containing the collection of
   *             Worker IDs and reasons for blocking.</p>
   * @public
   */
  WorkerBlocks?: WorkerBlock[] | undefined;
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeRequest {
  /**
   * <p>The ID of the Qualification type of the Qualifications to
   *             return.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>
   *             The status of the Qualifications to return.
   *             Can be <code>Granted | Revoked</code>.
   *         </p>
   * @public
   */
  Status?: QualificationStatus | undefined;

  /**
   * <p>Pagination Token</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *             Limit the number of results returned.
   *         </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkersWithQualificationTypeResponse {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk
   *             returns a pagination token in the response. You can use this pagination token
   *             to retrieve the next set of results.
   *         </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The number of Qualifications on this page in the filtered
   *             results list, equivalent to the number of Qualifications being
   *             returned by this call.</p>
   * @public
   */
  NumResults?: number | undefined;

  /**
   * <p> The list of Qualification elements returned by this call.
   *         </p>
   * @public
   */
  Qualifications?: Qualification[] | undefined;
}

/**
 * @public
 */
export interface NotifyWorkersRequest {
  /**
   * <p>The subject line of the email message to send. Can include up
   *             to 200 characters.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The text of the email message to send. Can include up to
   *             4,096 characters</p>
   * @public
   */
  MessageText: string | undefined;

  /**
   * <p>A list of Worker IDs you wish to notify. You
   *             can notify upto
   *             100 Workers at a time.</p>
   * @public
   */
  WorkerIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NotifyWorkersFailureCode = {
  HardFailure: "HardFailure",
  SoftFailure: "SoftFailure",
} as const;

/**
 * @public
 */
export type NotifyWorkersFailureCode = (typeof NotifyWorkersFailureCode)[keyof typeof NotifyWorkersFailureCode];

/**
 * <p> When MTurk encounters an issue with notifying the Workers
 *             you specified, it returns back this object with failure details.
 *         </p>
 * @public
 */
export interface NotifyWorkersFailureStatus {
  /**
   * <p> Encoded value for the failure type.
   *         </p>
   * @public
   */
  NotifyWorkersFailureCode?: NotifyWorkersFailureCode | undefined;

  /**
   * <p> A message detailing the reason the Worker could not be
   *             notified.
   *         </p>
   * @public
   */
  NotifyWorkersFailureMessage?: string | undefined;

  /**
   * <p> The ID of the Worker.</p>
   * @public
   */
  WorkerId?: string | undefined;
}

/**
 * @public
 */
export interface NotifyWorkersResponse {
  /**
   * <p> When MTurk sends notifications to the list of Workers, it
   *             returns back any failures it encounters in this list of
   *             NotifyWorkersFailureStatus objects.
   *         </p>
   * @public
   */
  NotifyWorkersFailureStatuses?: NotifyWorkersFailureStatus[] | undefined;
}

/**
 * @public
 */
export interface RejectAssignmentRequest {
  /**
   * <p>
   *             The ID of the assignment. The assignment must correspond to a HIT created by the Requester.
   *         </p>
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * <p>
   *             A message for the Worker, which the Worker can see in the Status section of the web site.
   *         </p>
   * @public
   */
  RequesterFeedback: string | undefined;
}

/**
 * @public
 */
export interface RejectAssignmentResponse {}

/**
 * @public
 */
export interface RejectQualificationRequestRequest {
  /**
   * <p>
   *             The ID of the Qualification request, as returned by the
   *             <code>ListQualificationRequests</code>
   *             operation.
   *         </p>
   * @public
   */
  QualificationRequestId: string | undefined;

  /**
   * <p>A text message explaining why the request was rejected, to be
   *             shown to the Worker who made the request.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface RejectQualificationRequestResponse {}

/**
 * @public
 */
export interface SendBonusRequest {
  /**
   * <p>The ID of the Worker being paid the bonus.</p>
   * @public
   */
  WorkerId: string | undefined;

  /**
   * <p>
   *             The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and
   *             "101.42" represents $101.42 USD). Do not include currency symbols or currency codes.
   *         </p>
   * @public
   */
  BonusAmount: string | undefined;

  /**
   * <p>The ID of the assignment for which this bonus is paid.</p>
   * @public
   */
  AssignmentId: string | undefined;

  /**
   * <p>A message that explains the reason for the bonus payment. The
   *             Worker receiving the bonus can see this message.</p>
   * @public
   */
  Reason: string | undefined;

  /**
   * <p>A unique identifier for this request, which allows you to
   *             retry the call on error without granting multiple bonuses. This is
   *             useful in cases such as network timeouts where it is unclear whether
   *             or not the call succeeded on the server. If the bonus already exists
   *             in the system from a previous call using the same UniqueRequestToken,
   *             subsequent calls will return an error with a message containing the
   *             request ID.</p>
   * @public
   */
  UniqueRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface SendBonusResponse {}

/**
 * @public
 * @enum
 */
export const NotificationTransport = {
  Email: "Email",
  SNS: "SNS",
  SQS: "SQS",
} as const;

/**
 * @public
 */
export type NotificationTransport = (typeof NotificationTransport)[keyof typeof NotificationTransport];

/**
 * <p>The NotificationSpecification data structure describes a HIT
 *             event notification for a HIT type.</p>
 * @public
 */
export interface NotificationSpecification {
  /**
   * <p>
   *             The target for notification messages. The Destination’s format is determined by the specified Transport:
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>When Transport is Email, the Destination is your email address.</p>
   *             </li>
   *             <li>
   *                 <p>When Transport is SQS, the Destination is your queue URL.</p>
   *             </li>
   *             <li>
   *                 <p>When Transport is SNS, the Destination is the ARN of your topic.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Destination: string | undefined;

  /**
   * <p> The method Amazon Mechanical Turk uses to send the
   *             notification. Valid Values: Email | SQS | SNS.
   *         </p>
   * @public
   */
  Transport: NotificationTransport | undefined;

  /**
   * <p>The version of the Notification API to use. Valid value is
   *             2006-05-05.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p> The list of events that should cause notifications to be
   *             sent. Valid Values: AssignmentAccepted | AssignmentAbandoned |
   *             AssignmentReturned | AssignmentSubmitted | AssignmentRejected |
   *             AssignmentApproved | HITCreated | HITExtended | HITDisposed |
   *             HITReviewable | HITExpired | Ping. The Ping event is only valid for
   *             the SendTestEventNotification operation.
   *         </p>
   * @public
   */
  EventTypes: EventType[] | undefined;
}

/**
 * @public
 */
export interface SendTestEventNotificationRequest {
  /**
   * <p>
   *             The notification specification to test. This value is identical to the value
   *             you would provide to the UpdateNotificationSettings operation when you establish
   *             the notification specification for a HIT type.
   *         </p>
   * @public
   */
  Notification: NotificationSpecification | undefined;

  /**
   * <p>
   *             The event to simulate to test the notification specification.
   *             This event is included in the test message even if the notification specification
   *             does not include the event type.
   *             The notification specification does not filter out the test event.
   *         </p>
   * @public
   */
  TestEventType: EventType | undefined;
}

/**
 * @public
 */
export interface SendTestEventNotificationResponse {}

/**
 * @public
 */
export interface UpdateExpirationForHITRequest {
  /**
   * <p>
   *             The HIT to update.
   *         </p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>
   *             The date and time at which you want the HIT to expire
   *         </p>
   * @public
   */
  ExpireAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateExpirationForHITResponse {}

/**
 * @public
 */
export interface UpdateHITReviewStatusRequest {
  /**
   * <p>
   *             The ID of the HIT to update.
   *         </p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>
   *             Specifies how to update the HIT status. Default is <code>False</code>.
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     Setting this to false will only transition a HIT from <code>Reviewable</code> to <code>Reviewing</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     Setting this to true will only transition a HIT from <code>Reviewing</code> to <code>Reviewable</code>
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  Revert?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateHITReviewStatusResponse {}

/**
 * @public
 */
export interface UpdateHITTypeOfHITRequest {
  /**
   * <p>The HIT to update.</p>
   * @public
   */
  HITId: string | undefined;

  /**
   * <p>The ID of the new HIT type.</p>
   * @public
   */
  HITTypeId: string | undefined;
}

/**
 * @public
 */
export interface UpdateHITTypeOfHITResponse {}

/**
 * @public
 */
export interface UpdateNotificationSettingsRequest {
  /**
   * <p>
   *             The ID of the HIT type whose notification specification is being updated.
   *         </p>
   * @public
   */
  HITTypeId: string | undefined;

  /**
   * <p>
   *             The notification specification for the HIT type.
   *         </p>
   * @public
   */
  Notification?: NotificationSpecification | undefined;

  /**
   * <p>
   *             Specifies whether notifications are sent for HITs of this HIT type,
   *             according to the notification specification.
   *             You must specify either the Notification parameter or the Active parameter
   *             for the call to UpdateNotificationSettings to succeed.
   *         </p>
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationSettingsResponse {}

/**
 * @public
 */
export interface UpdateQualificationTypeRequest {
  /**
   * <p>The ID of the Qualification type to update.</p>
   * @public
   */
  QualificationTypeId: string | undefined;

  /**
   * <p>The new description of the Qualification type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new status of the Qualification type - Active | Inactive</p>
   * @public
   */
  QualificationTypeStatus?: QualificationTypeStatus | undefined;

  /**
   * <p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p>
   *         <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p>
   *         <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>
   * @public
   */
  Test?: string | undefined;

  /**
   * <p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p>
   * @public
   */
  AnswerKey?: string | undefined;

  /**
   * <p>The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.</p>
   * @public
   */
  TestDurationInSeconds?: number | undefined;

  /**
   * <p>The amount of time, in seconds, that Workers must wait
   *             after requesting a Qualification of the specified Qualification type
   *             before they can retry the Qualification request. It is not possible to
   *             disable retries for a Qualification type after it has been created with
   *             retries enabled. If you want to disable retries, you must dispose of
   *             the existing retry-enabled Qualification type using
   *             DisposeQualificationType and then create a new Qualification type with
   *             retries disabled using CreateQualificationType.</p>
   * @public
   */
  RetryDelayInSeconds?: number | undefined;

  /**
   * <p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p>
   *         <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>
   * @public
   */
  AutoGranted?: boolean | undefined;

  /**
   * <p>The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.</p>
   * @public
   */
  AutoGrantedValue?: number | undefined;
}

/**
 * @public
 */
export interface UpdateQualificationTypeResponse {
  /**
   * <p> Contains a QualificationType data structure.</p>
   * @public
   */
  QualificationType?: QualificationType | undefined;
}
