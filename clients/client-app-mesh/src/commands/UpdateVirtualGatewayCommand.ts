// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVirtualGatewayInput, UpdateVirtualGatewayOutput } from "../models/models_0";
import { de_UpdateVirtualGatewayCommand, se_UpdateVirtualGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVirtualGatewayCommand}.
 */
export interface UpdateVirtualGatewayCommandInput extends UpdateVirtualGatewayInput {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualGatewayCommand}.
 */
export interface UpdateVirtualGatewayCommandOutput extends UpdateVirtualGatewayOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual gateway in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // UpdateVirtualGatewayInput
 *   virtualGatewayName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualGatewaySpec
 *     backendDefaults: { // VirtualGatewayBackendDefaults
 *       clientPolicy: { // VirtualGatewayClientPolicy
 *         tls: { // VirtualGatewayClientPolicyTls
 *           enforce: true || false,
 *           ports: [ // PortSet
 *             Number("int"),
 *           ],
 *           certificate: { // VirtualGatewayClientTlsCertificate Union: only one key present
 *             file: { // VirtualGatewayListenerTlsFileCertificate
 *               certificateChain: "STRING_VALUE", // required
 *               privateKey: "STRING_VALUE", // required
 *             },
 *             sds: { // VirtualGatewayListenerTlsSdsCertificate
 *               secretName: "STRING_VALUE", // required
 *             },
 *           },
 *           validation: { // VirtualGatewayTlsValidationContext
 *             trust: { // VirtualGatewayTlsValidationContextTrust Union: only one key present
 *               acm: { // VirtualGatewayTlsValidationContextAcmTrust
 *                 certificateAuthorityArns: [ // VirtualGatewayCertificateAuthorityArns // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               file: { // VirtualGatewayTlsValidationContextFileTrust
 *                 certificateChain: "STRING_VALUE", // required
 *               },
 *               sds: { // VirtualGatewayTlsValidationContextSdsTrust
 *                 secretName: "STRING_VALUE", // required
 *               },
 *             },
 *             subjectAlternativeNames: { // SubjectAlternativeNames
 *               match: { // SubjectAlternativeNameMatchers
 *                 exact: [ // SubjectAlternativeNameList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *         },
 *       },
 *     },
 *     listeners: [ // VirtualGatewayListeners // required
 *       { // VirtualGatewayListener
 *         healthCheck: { // VirtualGatewayHealthCheckPolicy
 *           timeoutMillis: Number("long"), // required
 *           intervalMillis: Number("long"), // required
 *           protocol: "STRING_VALUE", // required
 *           port: Number("int"),
 *           path: "STRING_VALUE",
 *           healthyThreshold: Number("int"), // required
 *           unhealthyThreshold: Number("int"), // required
 *         },
 *         portMapping: { // VirtualGatewayPortMapping
 *           port: Number("int"), // required
 *           protocol: "STRING_VALUE", // required
 *         },
 *         tls: { // VirtualGatewayListenerTls
 *           mode: "STRING_VALUE", // required
 *           validation: { // VirtualGatewayListenerTlsValidationContext
 *             trust: { // VirtualGatewayListenerTlsValidationContextTrust Union: only one key present
 *               file: {
 *                 certificateChain: "STRING_VALUE", // required
 *               },
 *               sds: {
 *                 secretName: "STRING_VALUE", // required
 *               },
 *             },
 *             subjectAlternativeNames: {
 *               match: {
 *                 exact: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *           certificate: { // VirtualGatewayListenerTlsCertificate Union: only one key present
 *             acm: { // VirtualGatewayListenerTlsAcmCertificate
 *               certificateArn: "STRING_VALUE", // required
 *             },
 *             file: {
 *               certificateChain: "STRING_VALUE", // required
 *               privateKey: "STRING_VALUE", // required
 *             },
 *             sds: {
 *               secretName: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         connectionPool: { // VirtualGatewayConnectionPool Union: only one key present
 *           http: { // VirtualGatewayHttpConnectionPool
 *             maxConnections: Number("int"), // required
 *             maxPendingRequests: Number("int"),
 *           },
 *           http2: { // VirtualGatewayHttp2ConnectionPool
 *             maxRequests: Number("int"), // required
 *           },
 *           grpc: { // VirtualGatewayGrpcConnectionPool
 *             maxRequests: Number("int"), // required
 *           },
 *         },
 *       },
 *     ],
 *     logging: { // VirtualGatewayLogging
 *       accessLog: { // VirtualGatewayAccessLog Union: only one key present
 *         file: { // VirtualGatewayFileAccessLog
 *           path: "STRING_VALUE", // required
 *           format: { // LoggingFormat Union: only one key present
 *             text: "STRING_VALUE",
 *             json: [ // JsonFormat
 *               { // JsonFormatRef
 *                 key: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new UpdateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVirtualGatewayOutput
 * //   virtualGateway: { // VirtualGatewayData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualGatewayName: "STRING_VALUE", // required
 * //     spec: { // VirtualGatewaySpec
 * //       backendDefaults: { // VirtualGatewayBackendDefaults
 * //         clientPolicy: { // VirtualGatewayClientPolicy
 * //           tls: { // VirtualGatewayClientPolicyTls
 * //             enforce: true || false,
 * //             ports: [ // PortSet
 * //               Number("int"),
 * //             ],
 * //             certificate: { // VirtualGatewayClientTlsCertificate Union: only one key present
 * //               file: { // VirtualGatewayListenerTlsFileCertificate
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: { // VirtualGatewayListenerTlsSdsCertificate
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             validation: { // VirtualGatewayTlsValidationContext
 * //               trust: { // VirtualGatewayTlsValidationContextTrust Union: only one key present
 * //                 acm: { // VirtualGatewayTlsValidationContextAcmTrust
 * //                   certificateAuthorityArns: [ // VirtualGatewayCertificateAuthorityArns // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 file: { // VirtualGatewayTlsValidationContextFileTrust
 * //                   certificateChain: "STRING_VALUE", // required
 * //                 },
 * //                 sds: { // VirtualGatewayTlsValidationContextSdsTrust
 * //                   secretName: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               subjectAlternativeNames: { // SubjectAlternativeNames
 * //                 match: { // SubjectAlternativeNameMatchers
 * //                   exact: [ // SubjectAlternativeNameList // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       listeners: [ // VirtualGatewayListeners // required
 * //         { // VirtualGatewayListener
 * //           healthCheck: { // VirtualGatewayHealthCheckPolicy
 * //             timeoutMillis: Number("long"), // required
 * //             intervalMillis: Number("long"), // required
 * //             protocol: "STRING_VALUE", // required
 * //             port: Number("int"),
 * //             path: "STRING_VALUE",
 * //             healthyThreshold: Number("int"), // required
 * //             unhealthyThreshold: Number("int"), // required
 * //           },
 * //           portMapping: { // VirtualGatewayPortMapping
 * //             port: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //           },
 * //           tls: { // VirtualGatewayListenerTls
 * //             mode: "STRING_VALUE", // required
 * //             validation: { // VirtualGatewayListenerTlsValidationContext
 * //               trust: { // VirtualGatewayListenerTlsValidationContextTrust Union: only one key present
 * //                 file: {
 * //                   certificateChain: "STRING_VALUE", // required
 * //                 },
 * //                 sds: {
 * //                   secretName: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               subjectAlternativeNames: {
 * //                 match: {
 * //                   exact: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             certificate: { // VirtualGatewayListenerTlsCertificate Union: only one key present
 * //               acm: { // VirtualGatewayListenerTlsAcmCertificate
 * //                 certificateArn: "STRING_VALUE", // required
 * //               },
 * //               file: {
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: {
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           connectionPool: { // VirtualGatewayConnectionPool Union: only one key present
 * //             http: { // VirtualGatewayHttpConnectionPool
 * //               maxConnections: Number("int"), // required
 * //               maxPendingRequests: Number("int"),
 * //             },
 * //             http2: { // VirtualGatewayHttp2ConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //             grpc: { // VirtualGatewayGrpcConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       logging: { // VirtualGatewayLogging
 * //         accessLog: { // VirtualGatewayAccessLog Union: only one key present
 * //           file: { // VirtualGatewayFileAccessLog
 * //             path: "STRING_VALUE", // required
 * //             format: { // LoggingFormat Union: only one key present
 * //               text: "STRING_VALUE",
 * //               json: [ // JsonFormat
 * //                 { // JsonFormatRef
 * //                   key: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // VirtualGatewayStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVirtualGatewayCommandInput - {@link UpdateVirtualGatewayCommandInput}
 * @returns {@link UpdateVirtualGatewayCommandOutput}
 * @see {@link UpdateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 *
 * @public
 */
export class UpdateVirtualGatewayCommand extends $Command
  .classBuilder<
    UpdateVirtualGatewayCommandInput,
    UpdateVirtualGatewayCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppMesh", "UpdateVirtualGateway", {})
  .n("AppMeshClient", "UpdateVirtualGatewayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVirtualGatewayCommand)
  .de(de_UpdateVirtualGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVirtualGatewayInput;
      output: UpdateVirtualGatewayOutput;
    };
    sdk: {
      input: UpdateVirtualGatewayCommandInput;
      output: UpdateVirtualGatewayCommandOutput;
    };
  };
}
