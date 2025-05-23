// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableBaselineInput, EnableBaselineOutput } from "../models/models_0";
import { de_EnableBaselineCommand, se_EnableBaselineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableBaselineCommand}.
 */
export interface EnableBaselineCommandInput extends EnableBaselineInput {}
/**
 * @public
 *
 * The output of {@link EnableBaselineCommand}.
 */
export interface EnableBaselineCommandOutput extends EnableBaselineOutput, __MetadataBearer {}

/**
 * <p>Enable (apply) a <code>Baseline</code> to a Target. This API starts an asynchronous operation to deploy resources specified by the <code>Baseline</code> to the specified Target. For usage examples, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html"> <i>the Amazon Web Services Control Tower User Guide</i> </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, EnableBaselineCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, EnableBaselineCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const input = { // EnableBaselineInput
 *   baselineVersion: "STRING_VALUE", // required
 *   parameters: [ // EnabledBaselineParameters
 *     { // EnabledBaselineParameter
 *       key: "STRING_VALUE", // required
 *       value: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 *   baselineIdentifier: "STRING_VALUE", // required
 *   targetIdentifier: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new EnableBaselineCommand(input);
 * const response = await client.send(command);
 * // { // EnableBaselineOutput
 * //   operationIdentifier: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param EnableBaselineCommandInput - {@link EnableBaselineCommandInput}
 * @returns {@link EnableBaselineCommandOutput}
 * @see {@link EnableBaselineCommandInput} for command's `input` shape.
 * @see {@link EnableBaselineCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded. The limit is 100 concurrent operations.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class EnableBaselineCommand extends $Command
  .classBuilder<
    EnableBaselineCommandInput,
    EnableBaselineCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "EnableBaseline", {})
  .n("ControlTowerClient", "EnableBaselineCommand")
  .f(void 0, void 0)
  .ser(se_EnableBaselineCommand)
  .de(de_EnableBaselineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableBaselineInput;
      output: EnableBaselineOutput;
    };
    sdk: {
      input: EnableBaselineCommandInput;
      output: EnableBaselineCommandOutput;
    };
  };
}
