// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { GetGroupMembershipIdRequest, GetGroupMembershipIdResponse } from "../models/models_0";
import { de_GetGroupMembershipIdCommand, se_GetGroupMembershipIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGroupMembershipIdCommand}.
 */
export interface GetGroupMembershipIdCommandInput extends GetGroupMembershipIdRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupMembershipIdCommand}.
 */
export interface GetGroupMembershipIdCommandOutput extends GetGroupMembershipIdResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <code>MembershipId</code> in an identity store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetGroupMembershipIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetGroupMembershipIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // GetGroupMembershipIdRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 *   MemberId: { // MemberId Union: only one key present
 *     UserId: "STRING_VALUE",
 *   },
 * };
 * const command = new GetGroupMembershipIdCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupMembershipIdResponse
 * //   MembershipId: "STRING_VALUE", // required
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGroupMembershipIdCommandInput - {@link GetGroupMembershipIdCommandInput}
 * @returns {@link GetGroupMembershipIdCommandOutput}
 * @see {@link GetGroupMembershipIdCommandInput} for command's `input` shape.
 * @see {@link GetGroupMembershipIdCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 *
 * @public
 */
export class GetGroupMembershipIdCommand extends $Command
  .classBuilder<
    GetGroupMembershipIdCommandInput,
    GetGroupMembershipIdCommandOutput,
    IdentitystoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IdentitystoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityStore", "GetGroupMembershipId", {})
  .n("IdentitystoreClient", "GetGroupMembershipIdCommand")
  .f(void 0, void 0)
  .ser(se_GetGroupMembershipIdCommand)
  .de(de_GetGroupMembershipIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGroupMembershipIdRequest;
      output: GetGroupMembershipIdResponse;
    };
    sdk: {
      input: GetGroupMembershipIdCommandInput;
      output: GetGroupMembershipIdCommandOutput;
    };
  };
}
