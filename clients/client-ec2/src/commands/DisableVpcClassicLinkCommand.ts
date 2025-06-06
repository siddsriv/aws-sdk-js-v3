// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVpcClassicLinkRequest, DisableVpcClassicLinkResult } from "../models/models_6";
import { de_DisableVpcClassicLinkCommand, se_DisableVpcClassicLinkCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableVpcClassicLinkCommand}.
 */
export interface DisableVpcClassicLinkCommandInput extends DisableVpcClassicLinkRequest {}
/**
 * @public
 *
 * The output of {@link DisableVpcClassicLinkCommand}.
 */
export interface DisableVpcClassicLinkCommandOutput extends DisableVpcClassicLinkResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances
 *             linked to it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableVpcClassicLinkRequest
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DisableVpcClassicLinkCommand(input);
 * const response = await client.send(command);
 * // { // DisableVpcClassicLinkResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableVpcClassicLinkCommandInput - {@link DisableVpcClassicLinkCommandInput}
 * @returns {@link DisableVpcClassicLinkCommandOutput}
 * @see {@link DisableVpcClassicLinkCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableVpcClassicLinkCommand extends $Command
  .classBuilder<
    DisableVpcClassicLinkCommandInput,
    DisableVpcClassicLinkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DisableVpcClassicLink", {})
  .n("EC2Client", "DisableVpcClassicLinkCommand")
  .f(void 0, void 0)
  .ser(se_DisableVpcClassicLinkCommand)
  .de(de_DisableVpcClassicLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableVpcClassicLinkRequest;
      output: DisableVpcClassicLinkResult;
    };
    sdk: {
      input: DisableVpcClassicLinkCommandInput;
      output: DisableVpcClassicLinkCommandOutput;
    };
  };
}
