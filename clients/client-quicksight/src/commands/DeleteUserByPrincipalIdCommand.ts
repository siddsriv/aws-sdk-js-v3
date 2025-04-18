// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserByPrincipalIdRequest, DeleteUserByPrincipalIdResponse } from "../models/models_4";
import { de_DeleteUserByPrincipalIdCommand, se_DeleteUserByPrincipalIdCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserByPrincipalIdCommand}.
 */
export interface DeleteUserByPrincipalIdCommandInput extends DeleteUserByPrincipalIdRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserByPrincipalIdCommand}.
 */
export interface DeleteUserByPrincipalIdCommandOutput extends DeleteUserByPrincipalIdResponse, __MetadataBearer {}

/**
 * <p>Deletes a user identified by its principal ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteUserByPrincipalIdCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteUserByPrincipalIdCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteUserByPrincipalIdRequest
 *   PrincipalId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserByPrincipalIdCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserByPrincipalIdResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteUserByPrincipalIdCommandInput - {@link DeleteUserByPrincipalIdCommandInput}
 * @returns {@link DeleteUserByPrincipalIdCommandOutput}
 * @see {@link DeleteUserByPrincipalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteUserByPrincipalIdCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (server fault)
 *  <p>This resource is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteUserByPrincipalIdCommand extends $Command
  .classBuilder<
    DeleteUserByPrincipalIdCommandInput,
    DeleteUserByPrincipalIdCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteUserByPrincipalId", {})
  .n("QuickSightClient", "DeleteUserByPrincipalIdCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserByPrincipalIdCommand)
  .de(de_DeleteUserByPrincipalIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserByPrincipalIdRequest;
      output: DeleteUserByPrincipalIdResponse;
    };
    sdk: {
      input: DeleteUserByPrincipalIdCommandInput;
      output: DeleteUserByPrincipalIdCommandOutput;
    };
  };
}
