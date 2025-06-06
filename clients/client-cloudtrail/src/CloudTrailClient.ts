// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCloudTrailHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import {
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "./commands/CreateEventDataStoreCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "./commands/CreateTrailCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import {
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "./commands/DeleteEventDataStoreCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "./commands/DeleteTrailCommand";
import {
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/DeregisterOrganizationDelegatedAdminCommand";
import { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "./commands/DescribeQueryCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "./commands/DescribeTrailsCommand";
import { DisableFederationCommandInput, DisableFederationCommandOutput } from "./commands/DisableFederationCommand";
import { EnableFederationCommandInput, EnableFederationCommandOutput } from "./commands/EnableFederationCommand";
import { GenerateQueryCommandInput, GenerateQueryCommandOutput } from "./commands/GenerateQueryCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetDashboardCommandInput, GetDashboardCommandOutput } from "./commands/GetDashboardCommand";
import {
  GetEventConfigurationCommandInput,
  GetEventConfigurationCommandOutput,
} from "./commands/GetEventConfigurationCommand";
import { GetEventDataStoreCommandInput, GetEventDataStoreCommandOutput } from "./commands/GetEventDataStoreCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "./commands/GetEventSelectorsCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "./commands/GetInsightSelectorsCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "./commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "./commands/GetTrailStatusCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import {
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "./commands/ListEventDataStoresCommand";
import { ListImportFailuresCommandInput, ListImportFailuresCommandOutput } from "./commands/ListImportFailuresCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListInsightsMetricDataCommandInput,
  ListInsightsMetricDataCommandOutput,
} from "./commands/ListInsightsMetricDataCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListQueriesCommandInput, ListQueriesCommandOutput } from "./commands/ListQueriesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "./commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "./commands/LookupEventsCommand";
import {
  PutEventConfigurationCommandInput,
  PutEventConfigurationCommandOutput,
} from "./commands/PutEventConfigurationCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "./commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "./commands/PutInsightSelectorsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterOrganizationDelegatedAdminCommandInput,
  RegisterOrganizationDelegatedAdminCommandOutput,
} from "./commands/RegisterOrganizationDelegatedAdminCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "./commands/RestoreEventDataStoreCommand";
import {
  SearchSampleQueriesCommandInput,
  SearchSampleQueriesCommandOutput,
} from "./commands/SearchSampleQueriesCommand";
import {
  StartDashboardRefreshCommandInput,
  StartDashboardRefreshCommandOutput,
} from "./commands/StartDashboardRefreshCommand";
import {
  StartEventDataStoreIngestionCommandInput,
  StartEventDataStoreIngestionCommandOutput,
} from "./commands/StartEventDataStoreIngestionCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "./commands/StartLoggingCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import {
  StopEventDataStoreIngestionCommandInput,
  StopEventDataStoreIngestionCommandOutput,
} from "./commands/StopEventDataStoreIngestionCommand";
import { StopImportCommandInput, StopImportCommandOutput } from "./commands/StopImportCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "./commands/StopLoggingCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import {
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "./commands/UpdateEventDataStoreCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "./commands/UpdateTrailCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddTagsCommandInput
  | CancelQueryCommandInput
  | CreateChannelCommandInput
  | CreateDashboardCommandInput
  | CreateEventDataStoreCommandInput
  | CreateTrailCommandInput
  | DeleteChannelCommandInput
  | DeleteDashboardCommandInput
  | DeleteEventDataStoreCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteTrailCommandInput
  | DeregisterOrganizationDelegatedAdminCommandInput
  | DescribeQueryCommandInput
  | DescribeTrailsCommandInput
  | DisableFederationCommandInput
  | EnableFederationCommandInput
  | GenerateQueryCommandInput
  | GetChannelCommandInput
  | GetDashboardCommandInput
  | GetEventConfigurationCommandInput
  | GetEventDataStoreCommandInput
  | GetEventSelectorsCommandInput
  | GetImportCommandInput
  | GetInsightSelectorsCommandInput
  | GetQueryResultsCommandInput
  | GetResourcePolicyCommandInput
  | GetTrailCommandInput
  | GetTrailStatusCommandInput
  | ListChannelsCommandInput
  | ListDashboardsCommandInput
  | ListEventDataStoresCommandInput
  | ListImportFailuresCommandInput
  | ListImportsCommandInput
  | ListInsightsMetricDataCommandInput
  | ListPublicKeysCommandInput
  | ListQueriesCommandInput
  | ListTagsCommandInput
  | ListTrailsCommandInput
  | LookupEventsCommandInput
  | PutEventConfigurationCommandInput
  | PutEventSelectorsCommandInput
  | PutInsightSelectorsCommandInput
  | PutResourcePolicyCommandInput
  | RegisterOrganizationDelegatedAdminCommandInput
  | RemoveTagsCommandInput
  | RestoreEventDataStoreCommandInput
  | SearchSampleQueriesCommandInput
  | StartDashboardRefreshCommandInput
  | StartEventDataStoreIngestionCommandInput
  | StartImportCommandInput
  | StartLoggingCommandInput
  | StartQueryCommandInput
  | StopEventDataStoreIngestionCommandInput
  | StopImportCommandInput
  | StopLoggingCommandInput
  | UpdateChannelCommandInput
  | UpdateDashboardCommandInput
  | UpdateEventDataStoreCommandInput
  | UpdateTrailCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CancelQueryCommandOutput
  | CreateChannelCommandOutput
  | CreateDashboardCommandOutput
  | CreateEventDataStoreCommandOutput
  | CreateTrailCommandOutput
  | DeleteChannelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteEventDataStoreCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteTrailCommandOutput
  | DeregisterOrganizationDelegatedAdminCommandOutput
  | DescribeQueryCommandOutput
  | DescribeTrailsCommandOutput
  | DisableFederationCommandOutput
  | EnableFederationCommandOutput
  | GenerateQueryCommandOutput
  | GetChannelCommandOutput
  | GetDashboardCommandOutput
  | GetEventConfigurationCommandOutput
  | GetEventDataStoreCommandOutput
  | GetEventSelectorsCommandOutput
  | GetImportCommandOutput
  | GetInsightSelectorsCommandOutput
  | GetQueryResultsCommandOutput
  | GetResourcePolicyCommandOutput
  | GetTrailCommandOutput
  | GetTrailStatusCommandOutput
  | ListChannelsCommandOutput
  | ListDashboardsCommandOutput
  | ListEventDataStoresCommandOutput
  | ListImportFailuresCommandOutput
  | ListImportsCommandOutput
  | ListInsightsMetricDataCommandOutput
  | ListPublicKeysCommandOutput
  | ListQueriesCommandOutput
  | ListTagsCommandOutput
  | ListTrailsCommandOutput
  | LookupEventsCommandOutput
  | PutEventConfigurationCommandOutput
  | PutEventSelectorsCommandOutput
  | PutInsightSelectorsCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterOrganizationDelegatedAdminCommandOutput
  | RemoveTagsCommandOutput
  | RestoreEventDataStoreCommandOutput
  | SearchSampleQueriesCommandOutput
  | StartDashboardRefreshCommandOutput
  | StartEventDataStoreIngestionCommandOutput
  | StartImportCommandOutput
  | StartLoggingCommandOutput
  | StartQueryCommandOutput
  | StopEventDataStoreIngestionCommandOutput
  | StopImportCommandOutput
  | StopLoggingCommandOutput
  | UpdateChannelCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateEventDataStoreCommandOutput
  | UpdateTrailCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudTrailClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudTrailClient class constructor that set the region, credentials and other options.
 */
export interface CloudTrailClientConfig extends CloudTrailClientConfigType {}

/**
 * @public
 */
export type CloudTrailClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
 */
export interface CloudTrailClientResolvedConfig extends CloudTrailClientResolvedConfigType {}

/**
 * <fullname>CloudTrail</fullname>
 *          <p>This is the CloudTrail API Reference. It provides descriptions of actions, data
 *          types, common parameters, and common errors for CloudTrail.</p>
 *          <p>CloudTrail is a web service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. The
 *          recorded information includes the identity of the user, the start time of the Amazon Web Services API call, the source IP address, the request parameters, and the response
 *          elements returned by the service.</p>
 *          <note>
 *             <p>As an alternative to the API, you can use one of the Amazon Web Services SDKs, which
 *             consist of libraries and sample code for various programming languages and platforms
 *             (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide programmatic access to CloudTrail. For example, the SDKs handle cryptographically signing requests,
 *             managing errors, and retrying requests automatically. For more information about the
 *                Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools to Build on Amazon Web Services</a>.</p>
 *          </note>
 *          <p>See the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html">CloudTrail
 *          User Guide</a> for information about the data that is included with each Amazon Web Services API call listed in the log files.</p>
 * @public
 */
export class CloudTrailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudTrailClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudTrailClient class. This is resolved and normalized from the {@link CloudTrailClientConfig | constructor configuration interface}.
   */
  readonly config: CloudTrailClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudTrailClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudTrailHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudTrailClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
