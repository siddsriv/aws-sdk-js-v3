// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeFlowSourceThumbnailRequest, DescribeFlowSourceThumbnailResponse } from "../models/models_0";
import {
  de_DescribeFlowSourceThumbnailCommand,
  se_DescribeFlowSourceThumbnailCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowSourceThumbnailCommand}.
 */
export interface DescribeFlowSourceThumbnailCommandInput extends DescribeFlowSourceThumbnailRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowSourceThumbnailCommand}.
 */
export interface DescribeFlowSourceThumbnailCommandOutput
  extends DescribeFlowSourceThumbnailResponse,
    __MetadataBearer {}

/**
 * <p> Describes the thumbnail for the flow source. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeFlowSourceThumbnailCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeFlowSourceThumbnailCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeFlowSourceThumbnailRequest
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowSourceThumbnailCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowSourceThumbnailResponse
 * //   ThumbnailDetails: { // ThumbnailDetails
 * //     FlowArn: "STRING_VALUE", // required
 * //     Thumbnail: "STRING_VALUE",
 * //     ThumbnailMessages: [ // __listOfMessageDetail // required
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Timecode: "STRING_VALUE",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlowSourceThumbnailCommandInput - {@link DescribeFlowSourceThumbnailCommandInput}
 * @returns {@link DescribeFlowSourceThumbnailCommandOutput}
 * @see {@link DescribeFlowSourceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowSourceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class DescribeFlowSourceThumbnailCommand extends $Command
  .classBuilder<
    DescribeFlowSourceThumbnailCommandInput,
    DescribeFlowSourceThumbnailCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "DescribeFlowSourceThumbnail", {})
  .n("MediaConnectClient", "DescribeFlowSourceThumbnailCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFlowSourceThumbnailCommand)
  .de(de_DescribeFlowSourceThumbnailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlowSourceThumbnailRequest;
      output: DescribeFlowSourceThumbnailResponse;
    };
    sdk: {
      input: DescribeFlowSourceThumbnailCommandInput;
      output: DescribeFlowSourceThumbnailCommandOutput;
    };
  };
}
